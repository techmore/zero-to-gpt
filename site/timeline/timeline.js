/* Zero to GPT — interactive timeline. Vanilla JS, no dependencies. */
(function () {
  'use strict';
  var ZTG = window.ZTG;
  var esc = ZTG.esc;
  var $ = function (id) { return document.getElementById(id); };

  var DATA = null;
  var EVENTS = [];          // sorted
  var visible = [];         // filtered, sorted
  var state = { q: '', path: 'all', track: '', kid: false, eras: new Set() };
  var opener = null;        // element to refocus after closing the dialog
  var currentId = null;
  var verticalMQ = window.matchMedia('(max-width: 760px)');

  ZTG.initThemeToggle($('theme-toggle'));

  ZTG.loadData('data/').then(init).catch(function (err) {
    var el = $('load-error');
    el.hidden = false;
    el.textContent = 'Sorry, the timeline data could not be loaded (' + err.message + ').';
  });

  function sortKey(e) { return e.year * 10000 + (e.date ? parseInt((e.date + '-00-00').slice(5, 7), 10) * 100 + parseInt((e.date + '-00-00').slice(8, 10), 10) || 0 : 0); }
  function isBranch(e) { return e.track.indexOf('branch-') === 0; }
  function eraOf(id) { for (var i = 0; i < DATA.eras.length; i++) if (DATA.eras[i].id === id) return DATA.eras[i]; return null; }
  function periodsFor(e) { return (DATA.periods || []).filter(function (p) { return e.year >= p.start && e.year <= p.end; }); }

  function trackLabel(id) {
    var t = ZTG.trackInfo(DATA, id);
    if (id.indexOf('branch-') === 0) return (t.icon ? t.icon + ' ' : '') + t.title;
    return 'Lesson ' + t.n + ': ' + t.title;
  }

  /* ---------------- init ---------------- */
  function init(data) {
    DATA = data;
    EVENTS = data.events.slice().sort(function (a, b) { return sortKey(a) - sortKey(b); });
    EVENTS.forEach(function (e) {
      e._hay = [e.title, e.year, e.date, e.what_happened, e.why_it_mattered_kid, e.thinking_move,
        (e.tags || []).join(' '), e.people.map(function (p) { return p.name + ' ' + p.role; }).join(' '),
        trackLabel(e.track), (eraOf(e.era) || {}).label].join(' ').toLowerCase();
    });
    buildControls();
    readHash();
    syncControls();
    render();
    bindGlobalKeys();
    window.addEventListener('hashchange', onHashChange);
    openFromHash();
  }

  function buildControls() {
    var sel = $('track');
    var g1 = document.createElement('optgroup'); g1.label = 'Main path';
    DATA.tracks.main.forEach(function (t) { g1.appendChild(new Option(String(t.n).padStart(2, '0') + ' · ' + t.title, t.id)); });
    var g2 = document.createElement('optgroup'); g2.label = 'Branches';
    DATA.tracks.branches.forEach(function (t) { g2.appendChild(new Option(t.title, t.id)); });
    sel.appendChild(g1); sel.appendChild(g2);

    var chips = $('era-chips');
    DATA.eras.forEach(function (era) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'era-chip'; b.dataset.era = era.id;
      b.setAttribute('aria-pressed', 'false');
      b.innerHTML = esc(era.label) + ' <small>' + yearsLabel(era) + '</small>';
      b.addEventListener('click', function () {
        state.eras.has(era.id) ? state.eras.delete(era.id) : state.eras.add(era.id);
        changed();
      });
      chips.appendChild(b);
    });

    var q = $('q'), t;
    q.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { state.q = q.value.trim(); changed(); }, 120); });
    q.addEventListener('keydown', function (e) { if (e.key === 'Escape' && q.value) { q.value = ''; state.q = ''; changed(); } });
    document.querySelectorAll('input[name="path"]').forEach(function (r) {
      r.addEventListener('change', function () { state.path = r.value; if (r.value !== 'all') state.track = ''; changed(); });
    });
    sel.addEventListener('change', function () { state.track = sel.value; if (sel.value) state.path = 'all'; changed(); });
    $('kid').addEventListener('change', function (e) { state.kid = e.target.checked; changed(); });
    $('clear').addEventListener('click', clearFilters);
    $('empty-clear').addEventListener('click', clearFilters);

    $('scroll-left').addEventListener('click', function () { scrollByPage(-1); });
    $('scroll-right').addEventListener('click', function () { scrollByPage(1); });

    var sc = $('scroller');
    sc.addEventListener('wheel', function (e) {
      if (verticalMQ.matches || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      var max = sc.scrollWidth - sc.clientWidth;
      if ((e.deltaY < 0 && sc.scrollLeft <= 0) || (e.deltaY > 0 && sc.scrollLeft >= max - 1)) return;
      e.preventDefault();
      sc.scrollLeft += e.deltaY;
    }, { passive: false });
    var raf;
    sc.addEventListener('scroll', function () { cancelAnimationFrame(raf); raf = requestAnimationFrame(updateMinimapCurrent); });

    if (window.ResizeObserver) new ResizeObserver(function () { drawBands(); }).observe($('timeline'));
    else window.addEventListener('resize', drawBands);
    if (verticalMQ.addEventListener) verticalMQ.addEventListener('change', drawBands); else verticalMQ.addListener(drawBands);

    var dlg = $('detail');
    $('d-close').addEventListener('click', function () { dlg.close(); });
    $('d-prev').addEventListener('click', function () { step(-1); });
    $('d-next').addEventListener('click', function () { step(1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', onDialogClose);
    dlg.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
      if (e.key === 'ArrowLeft' && !$('d-prev').disabled) { e.preventDefault(); step(-1); }
      if (e.key === 'ArrowRight' && !$('d-next').disabled) { e.preventDefault(); step(1); }
    });
  }

  function yearsLabel(era) {
    if (era.id === DATA.eras[0].id) return 'before ' + (era.end + 1);
    if (era.id === DATA.eras[DATA.eras.length - 1].id) return era.start + '–now';
    return era.start + '–' + era.end;
  }

  function clearFilters() {
    state = { q: '', path: 'all', track: '', kid: false, eras: new Set() };
    $('q').value = '';
    changed();
  }

  function changed() { syncControls(); render(); writeHash(); }

  function syncControls() {
    $('q').value = state.q;
    document.querySelectorAll('input[name="path"]').forEach(function (r) { r.checked = r.value === state.path; });
    $('track').value = state.track;
    $('kid').checked = state.kid;
    document.querySelectorAll('.era-chip').forEach(function (b) { b.setAttribute('aria-pressed', state.eras.has(b.dataset.era) ? 'true' : 'false'); });
    var active = state.q || state.path !== 'all' || state.track || state.kid || state.eras.size;
    $('clear').hidden = !active;
  }

  /* ---------------- filtering + render ---------------- */
  function matches(e) {
    if (state.path === 'main' && isBranch(e)) return false;
    if (state.path === 'branch' && !isBranch(e)) return false;
    if (state.track && e.track !== state.track) return false;
    if (state.kid && !e.kid_friendly) return false;
    if (state.eras.size && !state.eras.has(e.era)) return false;
    if (state.q) {
      var words = state.q.toLowerCase().split(/\s+/);
      for (var i = 0; i < words.length; i++) if (e._hay.indexOf(words[i]) < 0) return false;
    }
    return true;
  }

  function render() {
    visible = EVENTS.filter(matches);
    var ol = $('timeline');
    var html = [];
    var lastEra = null, below = false;
    var shownPeriods = {};
    visible.forEach(function (e) {
      if (e.era !== lastEra) {
        var era = eraOf(e.era);
        html.push('<li class="era-mark" data-era="' + esc(e.era) + '"><h2 id="era-' + esc(e.era) + '">' + esc(era ? era.label : e.era) +
          ' <span>' + (era ? yearsLabel(era) : '') + '</span></h2></li>');
        lastEra = e.era;
      }
      (DATA.periods || []).forEach(function (p) {
        if (!shownPeriods[p.id] && e.year >= p.start && e.year <= p.end) {
          shownPeriods[p.id] = true;
          html.push('<li class="period-mark"><button type="button" class="period-btn ' + esc(p.kind) + '" data-period="' + esc(p.id) + '">' +
            (p.kind === 'winter' ? '❄️ ' : '🔥 ') + esc(p.label) + ' <small>' + (p.approximate ? 'about ' : '') + p.start + '–' + (p.ongoing ? 'now' : p.end) + '</small></button></li>');
        }
      });
      var tc = ZTG.trackColorVar(e.track);
      var who = e.people.slice(0, 2).map(function (p) { return p.name; }).join(', ') + (e.people.length > 2 ? ' + ' + (e.people.length - 2) + ' more' : '');
      var inWinter = periodsFor(e).some(function (p) { return p.kind === 'winter'; });
      html.push('<li class="ev' + (isBranch(e) ? ' branch' : '') + (below ? ' below' : '') + '" style="--tc:' + tc + '" data-id="' + esc(e.id) + '">' +
        '<span class="stem" aria-hidden="true"></span><span class="pin" aria-hidden="true"></span>' +
        '<button type="button" class="card" data-id="' + esc(e.id) + '" aria-haspopup="dialog">' +
        '<span class="badges" aria-hidden="true">' + (inWinter ? '<span title="During an AI winter">❄️</span>' : '') + '</span>' +
        '<span class="yr">' + esc(e.year) + '</span>' +
        '<span class="ttl">' + esc(e.title) + '</span>' +
        '<span class="who">' + esc(who) + '</span>' +
        '<span class="chip"><span class="dot" style="--dot:' + tc + '"></span>' + esc(trackLabel(e.track)) + '</span>' +
        '<span class="sr-only">' + (isBranch(e) ? 'Branch. ' : 'Main path. ') + (inWinter ? 'During an AI winter. ' : '') + '</span>' +
        '</button></li>');
      below = !below;
    });
    ol.innerHTML = html.join('');
    ol.querySelectorAll('.card').forEach(function (c) {
      c.addEventListener('click', function () { openEvent(c.dataset.id, c); });
    });
    ol.querySelectorAll('.period-btn').forEach(function (b) {
      b.addEventListener('click', function () { openPeriod(b.dataset.period, b); });
    });
    ol.addEventListener('keydown', onTrackKey);

    $('empty').hidden = visible.length > 0;
    var total = EVENTS.length;
    $('count').textContent = visible.length === total ? 'Showing all ' + total + ' moments' : 'Showing ' + visible.length + ' of ' + total + ' moments';
    buildMinimap();
    drawBands();
  }

  /* Coloured bands behind the line for AI winters / hype booms. */
  function drawBands() {
    var bands = $('bands');
    if (!bands || !DATA) return;
    bands.innerHTML = '';
    var vertical = verticalMQ.matches;
    var canvas = $('canvas');
    var cRect = canvas.getBoundingClientRect();
    (DATA.periods || []).forEach(function (p) {
      var items = Array.prototype.filter.call(document.querySelectorAll('#timeline .ev'), function (li) {
        var e = byId(li.dataset.id); return e && e.year >= p.start && e.year <= p.end;
      });
      var mark = document.querySelector('#timeline .period-btn[data-period="' + p.id + '"]');
      if (!items.length) return;
      var first = mark ? mark.closest('li') : items[0];
      var last = items[items.length - 1];
      var r1 = first.getBoundingClientRect(), r2 = last.getBoundingClientRect();
      var div = document.createElement('div');
      div.className = 'band ' + p.kind;
      if (vertical) {
        div.style.top = (r1.top - cRect.top) + 'px';
        div.style.height = Math.max(20, r2.bottom - r1.top) + 'px';
      } else {
        div.style.left = (r1.left - cRect.left) + 'px';
        div.style.width = Math.max(40, r2.left - r1.left + 60) + 'px';
      }
      div.innerHTML = '<span>' + (p.kind === 'winter' ? '❄ ' : '') + esc(p.label) + '</span>';
      bands.appendChild(div);
    });
  }

  function buildMinimap() {
    var nav = $('minimap');
    var counts = {};
    visible.forEach(function (e) { counts[e.era] = (counts[e.era] || 0) + 1; });
    nav.innerHTML = '';
    DATA.eras.forEach(function (era) {
      if (!counts[era.id]) return;
      var b = document.createElement('button');
      b.type = 'button'; b.dataset.era = era.id;
      b.style.flexGrow = String(Math.max(1, counts[era.id]));
      b.innerHTML = esc(era.label) + '<span>' + yearsLabel(era) + ' · ' + counts[era.id] + '</span>';
      b.title = era.label + ' (' + yearsLabel(era) + ')';
      b.addEventListener('click', function () {
        var mark = document.querySelector('.era-mark[data-era="' + era.id + '"]');
        var sc = $('scroller');
        if (mark) sc.scrollTo({ left: mark.offsetLeft - 16, behavior: smooth() });
        var first = visible.filter(function (e) { return e.era === era.id; })[0];
        if (first) { var c = cardFor(first.id); if (c) c.focus({ preventScroll: true }); }
      });
      nav.appendChild(b);
    });
    updateMinimapCurrent();
  }

  function updateMinimapCurrent() {
    var sc = $('scroller');
    var x = sc.scrollLeft + sc.clientWidth * 0.35;
    var cur = null;
    document.querySelectorAll('.era-mark').forEach(function (m) { if (m.offsetLeft <= x) cur = m.dataset.era; });
    if (!cur) { var f = document.querySelector('.era-mark'); cur = f && f.dataset.era; }
    document.querySelectorAll('#minimap button').forEach(function (b) { b.setAttribute('aria-current', b.dataset.era === cur ? 'true' : 'false'); });
  }

  function smooth() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'; }
  function scrollByPage(dir) { var sc = $('scroller'); sc.scrollBy({ left: dir * sc.clientWidth * 0.8, behavior: smooth() }); }
  function byId(id) { for (var i = 0; i < EVENTS.length; i++) if (EVENTS[i].id === id) return EVENTS[i]; return null; }
  function cardFor(id) { return document.querySelector('#timeline .card[data-id="' + CSS.escape(id) + '"]'); }

  /* Arrow keys move between cards (roving focus over the normal tab order). */
  function onTrackKey(e) {
    var focusables = Array.prototype.slice.call(document.querySelectorAll('#timeline .card, #timeline .period-btn'));
    var i = focusables.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = focusables[Math.min(focusables.length - 1, i + 1)];
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = focusables[Math.max(0, i - 1)];
    else if (e.key === 'Home') next = focusables[0];
    else if (e.key === 'End') next = focusables[focusables.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
      next.scrollIntoView({ block: 'nearest', inline: 'center', behavior: smooth() });
    }
  }

  function bindGlobalKeys() {
    document.addEventListener('keydown', function (e) {
      if ($('detail').open) return;
      var tag = (e.target.tagName || '').toLowerCase();
      if (e.key === '/' && tag !== 'input' && tag !== 'select' && tag !== 'textarea') { e.preventDefault(); $('q').focus(); }
    });
  }

  /* ---------------- detail dialog ---------------- */
  function linkList(items, fn) {
    if (!items || !items.length) return '';
    return '<ul class="links">' + items.map(fn).join('') + '</ul>';
  }

  function openEvent(id, from) {
    var e = byId(id);
    if (!e) return;
    currentId = id;
    if (from) opener = from;
    var dlg = $('detail');
    var tc = ZTG.trackColorVar(e.track);
    dlg.style.setProperty('--tc', tc);
    var era = eraOf(e.era);
    $('d-meta').innerHTML = '<span class="d-date">' + esc(ZTG.formatDate(e)) + '</span>' +
      '<span class="chip"><span class="dot" style="--dot:' + tc + '"></span>' + esc(trackLabel(e.track)) + '</span>' +
      (era ? '<span class="chip">' + esc(era.label) + '</span>' : '') +
      (e.kid_friendly ? '<span class="chip">Great story for kids</span>' : '');
    $('d-title').textContent = e.title;

    var b = [];
    periodsFor(e).forEach(function (p) {
      b.push('<p class="d-period ' + esc(p.kind) + '">' + (p.kind === 'winter' ? '❄️ This happened during the <strong>' : '🔥 This happened during the <strong>') + esc(p.label.toLowerCase()) + '</strong>' +
        ' (' + (p.approximate ? 'about ' : '') + p.start + '–' + (p.ongoing ? 'now' : p.end) + ').</p>');
    });
    b.push('<section><h3>What happened</h3><p>' + esc(e.what_happened) + '</p></section>');
    b.push('<section class="callout"><h3>Why it mattered</h3><p class="kidline">' + esc(e.why_it_mattered_kid) + '</p><p>' + esc(e.why_it_mattered_adult) + '</p></section>');
    b.push('<section class="callout move"><h3>💡 The thinking move</h3><p>' + esc(e.thinking_move) + '</p></section>');
    b.push('<section><h3>The story behind it</h3>' + e.deeper_dive.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>');
    b.push('<section><h3>People</h3><ul class="people">' + e.people.map(function (p) {
      return '<li><a href="people.html#' + esc(ZTG.slug(p.name)) + '">' + esc(p.name) + '</a><span class="role">' + esc(p.role) + '</span></li>';
    }).join('') + '</ul></section>');
    if (e.watch && e.watch.length) b.push('<section><h3>▶ Watch</h3>' + linkList(e.watch, function (v) {
      return '<li><a href="' + esc(v.url) + '" target="_blank" rel="noopener">' + esc(v.title) + '</a><span class="sub">' + esc(v.channel) + (v.note ? ' · ' + esc(v.note) : '') + '</span></li>';
    }) + '</section>');
    if (e.read && e.read.length) b.push('<section><h3>📚 Read</h3>' + linkList(e.read, function (r) {
      return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.title) + '</a>' + (r.kid_friendly ? '<span class="badge-kid">Kid-friendly</span>' : '') +
        '<span class="sub">' + esc(r.author) + ' · ' + esc(r.year) + ' · ISBN ' + esc(r.isbn13) + '</span></li>';
    }) + '</section>');
    if (e.sources && e.sources.length) b.push('<section><h3>🔎 Sources</h3>' + linkList(e.sources, function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.title) + '</a>' + (s.note ? '<span class="sub">' + esc(s.note) + '</span>' : '') + '</li>';
    }) + '</section>');
    $('d-body').innerHTML = b.join('');
    $('d-body').scrollTop = 0;

    var lesson = $('d-lesson');
    var t = ZTG.trackInfo(DATA, e.track);
    lesson.hidden = false;
    lesson.href = ZTG.trackHref(DATA, e.track, '../../');
    if (e.track.indexOf('branch-') === 0) {
      lesson.textContent = 'About this branch →';
      lesson.setAttribute('aria-label', 'Read about the ' + t.title + ' branch in the course roadmap');
    } else if (t.has_lesson) {
      lesson.textContent = 'Go to Lesson ' + t.n + ' →';
      lesson.setAttribute('aria-label', 'Go to lesson ' + t.n + ': ' + t.title);
    } else {
      lesson.textContent = 'Lesson ' + t.n + ' plan →';
      lesson.setAttribute('aria-label', 'Lesson ' + t.n + ' is planned. Read its plan in the course roadmap: ' + t.title);
    }
    var idx = visibleIndex(id);
    $('d-prev').disabled = idx <= 0;
    $('d-next').disabled = idx < 0 || idx >= visible.length - 1;

    if (!dlg.open) dlg.showModal();
    $('d-title').focus();
    setHashEvent(id);
  }

  function openPeriod(pid, from) {
    var p = (DATA.periods || []).filter(function (x) { return x.id === pid; })[0];
    if (!p) return;
    currentId = null;
    opener = from || opener;
    var dlg = $('detail');
    dlg.style.setProperty('--tc', p.kind === 'winter' ? 'var(--winter-edge)' : 'var(--hype-edge)');
    $('d-meta').innerHTML = '<span class="d-date">' + (p.approximate ? 'About ' : '') + p.start + '–' + (p.ongoing ? 'now' : p.end) + '</span>' +
      '<span class="chip">' + (p.kind === 'winter' ? '❄️ AI winter' : '🔥 Hype boom') + '</span>';
    $('d-title').textContent = p.label;
    var inside = EVENTS.filter(function (e) { return e.year >= p.start && e.year <= p.end; });
    $('d-body').innerHTML = '<section><p>' + esc(p.note) + '</p></section>' +
      '<section class="callout"><h3>What is an ' + (p.kind === 'winter' ? 'AI winter' : 'AI hype boom') + '?</h3><p>' +
      (p.kind === 'winter'
        ? 'An “AI winter” is a stretch of years when money and excitement for AI dried up, usually because earlier promises were too big. Research did not stop, though: some of the most important ideas on this timeline were worked out during winters.'
        : 'A hype boom is a stretch when excitement, money and predictions about AI run high. Booms bring real progress and real overpromises. Part of thinking like a scientist is asking which claims have evidence behind them.') +
      '</p></section>' +
      (inside.length ? '<section><h3>Moments from these years</h3>' + linkList(inside, function (e) {
        return '<li><a href="#event=' + esc(e.id) + '" data-goto="' + esc(e.id) + '">' + esc(e.year) + ' · ' + esc(e.title) + '</a></li>';
      }) + '</section>' : '');
    $('d-body').querySelectorAll('[data-goto]').forEach(function (a) {
      a.addEventListener('click', function (ev) { ev.preventDefault(); openEvent(a.dataset.goto); });
    });
    $('d-lesson').hidden = true;
    $('d-prev').disabled = true; $('d-next').disabled = true;
    if (!dlg.open) dlg.showModal();
    $('d-title').focus();
  }

  function visibleIndex(id) { for (var i = 0; i < visible.length; i++) if (visible[i].id === id) return i; return -1; }

  function step(dir) {
    var i = visibleIndex(currentId);
    var n = visible[i + dir];
    if (n) {
      openEvent(n.id, cardFor(n.id));
      var c = cardFor(n.id);
      if (c) c.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }

  function onDialogClose() {
    setHashEvent(null);
    var target = (currentId && cardFor(currentId)) || opener;
    currentId = null;
    if (target && document.body.contains(target)) target.focus();
  }

  /* ---------------- URL hash: #event=id&q=..&path=..&track=..&era=a,b&kid=1 ---------------- */
  var writingHash = false;
  function params() { return new URLSearchParams(location.hash.replace(/^#/, '')); }
  function readHash() {
    var p = params();
    state.q = p.get('q') || '';
    state.path = ['main', 'branch'].indexOf(p.get('path')) >= 0 ? p.get('path') : 'all';
    state.track = p.get('track') || '';
    state.kid = p.get('kid') === '1';
    state.eras = new Set((p.get('era') || '').split(',').filter(Boolean));
  }
  function writeHash(eventId) {
    var p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.path !== 'all') p.set('path', state.path);
    if (state.track) p.set('track', state.track);
    if (state.eras.size) p.set('era', Array.from(state.eras).join(','));
    if (state.kid) p.set('kid', '1');
    var ev = eventId === undefined ? params().get('event') : eventId;
    if (ev) p.set('event', ev);
    var s = p.toString();
    writingHash = true;
    history.replaceState(null, '', s ? '#' + s : location.pathname + location.search);
    writingHash = false;
  }
  function setHashEvent(id) { writeHash(id); }
  function openFromHash() {
    var id = params().get('event');
    if (id && byId(id)) {
      var c = cardFor(id);
      if (c) c.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });
      openEvent(id, c);
    }
  }
  function onHashChange() {
    if (writingHash) return;
    readHash(); syncControls(); render();
    var id = params().get('event');
    if (id && byId(id)) openEvent(id, cardFor(id));
    else if ($('detail').open) $('detail').close();
  }
})();
