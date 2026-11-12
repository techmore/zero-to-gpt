/* Zero to GPT — shared helpers: theme toggle + data loading.
   Loaded in <head> so the saved theme applies before first paint. */
(function () {
  'use strict';
  var ZTG = (window.ZTG = window.ZTG || {});
  var KEY = 'ztg-theme';

  function readTheme() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function writeTheme(t) { try { if (t) localStorage.setItem(KEY, t); else localStorage.removeItem(KEY); } catch (e) { /* storage blocked: fine */ } }
  function applyTheme(t) {
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }
  applyTheme(readTheme());

  ZTG.currentTheme = function () {
    var a = document.documentElement.getAttribute('data-theme');
    if (a) return a;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  ZTG.initThemeToggle = function (btn) {
    if (!btn) return;
    function sync() {
      var dark = ZTG.currentTheme() === 'dark';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.title = btn.getAttribute('aria-label');
      btn.textContent = dark ? '☀️' : '🌙';
    }
    btn.addEventListener('click', function () {
      var next = ZTG.currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next); writeTheme(next); sync();
      document.dispatchEvent(new CustomEvent('ztg:theme'));
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () { if (!readTheme()) sync(); };
      if (mq.addEventListener) mq.addEventListener('change', onChange); else if (mq.addListener) mq.addListener(onChange);
    }
    sync();
  };

  /* Load the timeline data.
     - Over http(s): fetch data/events.json (the canonical file).
     - Opened as a local file (file://), or if fetch fails: load data/events.js,
       which sets window.ZTG_DATA (kept in sync by validate.py --write-js). */
  ZTG.loadData = function (base) {
    base = base || 'data/';
    if (window.ZTG_DATA) return Promise.resolve(window.ZTG_DATA);
    function viaScript() {
      return new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = base + 'events.js';
        s.onload = function () { window.ZTG_DATA ? resolve(window.ZTG_DATA) : reject(new Error('events.js loaded but defined no data')); };
        s.onerror = function () { reject(new Error('Could not load ' + s.src)); };
        document.head.appendChild(s);
      });
    }
    if (location.protocol === 'file:' || !window.fetch) return viaScript();
    return fetch(base + 'events.json', { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .catch(viaScript);
  };

  ZTG.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  ZTG.slug = function (s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  };

  ZTG.formatDate = function (ev) {
    var d = ev.date;
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (typeof d === 'string') {
      var m = d.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
      if (m) {
        var mon = months[parseInt(m[2], 10) - 1];
        return m[3] ? mon + ' ' + parseInt(m[3], 10) + ', ' + m[1] : mon + ' ' + m[1];
      }
    }
    return String(ev.year);
  };

  ZTG.trackInfo = function (data, id) {
    var all = (data.tracks.main || []).concat(data.tracks.branches || []);
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return { id: id, title: id, kind: 'main' };
  };

  /* Links from the site into the repo's Markdown docs.
     The site is meant to be served by GitHub Pages from the repo root, where
     Jekyll renders lessons/<id>/README.md as lessons/<id>/ and ROADMAP.md as
     ROADMAP.html. Opened as a local file (file://), we link the .md files.
     `root` is the path from the current page to the repo root ('../' or '../../'). */
  var LOCAL = location.protocol === 'file:';
  ZTG.mdHref = function (root, path, hash) {
    var p = LOCAL ? path : path.replace(/README\.md$/, '').replace(/\.md$/, '.html');
    return root + p + (hash ? '#' + hash : '');
  };

  /* Where "Go to lesson" points for a track:
     - a main lesson that exists (tracks.main[i].has_lesson) -> the lesson folder
     - a planned lesson or a branch -> its entry in ROADMAP.md (anchored by its ID) */
  ZTG.trackHref = function (data, id, root) {
    var t = ZTG.trackInfo(data, id);
    if (id.indexOf('branch-') !== 0 && t.has_lesson) return ZTG.mdHref(root, 'lessons/' + id + '/README.md');
    return ZTG.mdHref(root, 'ROADMAP.md', id);
  };

  /* <a data-md-href="timeline/LINKS-VERIFIED.md"> gets the right extension too. */
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[data-md-href]');
    for (var i = 0; i < links.length; i++) links[i].href = ZTG.mdHref('', links[i].getAttribute('data-md-href'));
  });

  ZTG.trackColorVar = function (id) {
    return id.indexOf('branch-') === 0 ? 'var(--t-' + id + ')' : 'var(--t-main)';
  };
})();
