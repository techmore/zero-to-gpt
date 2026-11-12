/* Zero to GPT — people index, built from the same data as the timeline. */
(function () {
  'use strict';
  var ZTG = window.ZTG, esc = ZTG.esc;
  var $ = function (id) { return document.getElementById(id); };
  var PEOPLE = [];

  ZTG.initThemeToggle($('theme-toggle'));
  ZTG.loadData('data/').then(init).catch(function (err) {
    var el = $('load-error'); el.hidden = false;
    el.textContent = 'Sorry, the data could not be loaded (' + err.message + ').';
  });

  function lastName(n) {
    var parts = n.replace(/\(.*?\)/g, '').trim().split(/\s+/);
    return (parts[parts.length - 1] || n).toLowerCase();
  }

  function init(data) {
    var map = {};
    var events = data.events.slice().sort(function (a, b) { return a.year - b.year || String(a.date || '').localeCompare(String(b.date || '')); });
    events.forEach(function (e) {
      e.people.forEach(function (p) {
        var rec = map[p.name] || (map[p.name] = { name: p.name, info: data.people[p.name] || {}, events: [] });
        rec.events.push({ e: e, role: p.role });
      });
    });
    PEOPLE = Object.keys(map).map(function (k) {
      var r = map[k];
      r.slug = ZTG.slug(r.name);
      r.first = r.events[0].e.year;
      r.hay = (r.name + ' ' + (r.info.bio || '') + ' ' + (r.info.lived || '') + ' ' +
        r.events.map(function (x) { return x.e.title + ' ' + x.e.year + ' ' + x.role; }).join(' ')).toLowerCase();
      return r;
    });

    var q = $('pq');
    q.addEventListener('input', render);
    document.querySelectorAll('input[name="sort"]').forEach(function (r) { r.addEventListener('change', render); });
    render();
    if (location.hash) {
      var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (t) { t.scrollIntoView({ block: 'start' }); var h = t.querySelector('h2'); if (h) h.focus({ preventScroll: true }); }
    }
  }

  function render() {
    var q = $('pq').value.trim().toLowerCase();
    var sort = (document.querySelector('input[name="sort"]:checked') || {}).value || 'time';
    var list = PEOPLE.filter(function (p) {
      if (!q) return true;
      return q.split(/\s+/).every(function (w) { return p.hay.indexOf(w) >= 0; });
    });
    list.sort(sort === 'az'
      ? function (a, b) { return lastName(a.name).localeCompare(lastName(b.name)) || a.name.localeCompare(b.name); }
      : function (a, b) { return a.first - b.first || lastName(a.name).localeCompare(lastName(b.name)); });

    $('people').innerHTML = list.map(function (p) {
      return '<li class="person" id="' + esc(p.slug) + '">' +
        '<h2 tabindex="-1">' + esc(p.name) + '</h2>' +
        (p.info.lived ? '<span class="lived">' + esc(p.info.lived) + '</span>' : '') +
        (p.info.bio ? '<p class="bio">' + esc(p.info.bio) + '</p>' : '') +
        '<h3>On the timeline</h3><ul>' + p.events.map(function (x) {
          return '<li><a href="index.html#event=' + encodeURIComponent(x.e.id) + '"><span class="y">' + esc(x.e.year) + '</span>' +
            '<span class="t">' + esc(x.e.title) + '</span></a><span class="r">' + esc(x.role) + '</span></li>';
        }).join('') + '</ul></li>';
    }).join('');
    $('pcount').textContent = list.length === PEOPLE.length ? PEOPLE.length + ' people' : list.length + ' of ' + PEOPLE.length + ' people';
  }
})();
