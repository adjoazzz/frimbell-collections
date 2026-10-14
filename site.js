/* Frimbell Collections prototype: shared shop data + bag + helpers.
   Loaded by index.html and product.html. All product details here are dummy data. */
(function () {
  'use strict';

  var WA_NUMBER = '233244665883';
  function wa(msg) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg); }
  function money(n) { return 'GH₵ ' + Number(n).toLocaleString('en-US'); }

  var HEX = {
    'Red': '#c8202b', 'Blush pink': '#f0c5cf', 'Champagne': '#e4cf9f', 'Black': '#1a1212',
    'Ivory': '#f4ede0', 'Wine': '#6d1a2b', 'Gold': '#c9a24a', 'Emerald': '#1f6b4a'
  };
  function hex(name) { return HEX[name] || '#cccccc'; }

  /* ---------- dummy products ---------- */
  var PRODUCTS = [
    {
      id: 'beaded-mermaid-gown', name: 'Beaded Mermaid Gown', price: 2450, was: 2900, tag: 'New',
      note: 'Stretch satin, beaded tulle cape sleeves',
      short: 'A fitted gown with hand-placed beadwork and sheer cape sleeves, made for evenings you want to remember.',
      long: 'A fitted mermaid silhouette in stretch satin, finished with hand-placed crystal beadwork and sheer cape sleeves. Made to order in Accra by our own tailors.',
      photos: ['product-1.jpg', 'product-1-b.jpg', 'product-1-c.jpg'], photoAlts: ['Front view', 'Back view', 'Beadwork detail'],
      colours: ['Red', 'Blush pink', 'Champagne', 'Black'],
      sku: 'FC-BMG-001', category: 'Gowns, Occasion wear', tags: 'Beaded, Evening, Wedding guest',
      rating: '4.9 (23 reviews)', reviews: 23,
      bullets: ['Fitted through the body, flared at the hem', 'Sheer cape sleeves with beadwork', 'Zip closure at the back, fully lined', 'Model is 5\'9" and wears a UK 12'],
      fabric: { 'Fabric': 'Stretch satin with beaded tulle', 'Lining': 'Soft stretch lining', 'Fit': 'Fitted, true to size', 'Care': 'Dry clean only' }
    },
    {
      id: 'blush-bow-lace-gown', name: 'Blush Bow Lace Gown', price: 2150, tag: 'Best seller',
      note: 'Beaded lace with a sculpted bow shoulder',
      short: 'Soft blush lace with pearl beadwork, sheer sleeves and a sculpted bow at the shoulder.',
      long: 'Delicate blush lace covered in pearl and crystal beadwork, with long sheer sleeves and a sculpted bow at one shoulder. Gentle on the figure and easy to move in.',
      photos: ['product-2.jpg', 'product-3.jpg', 'product-5.jpg'], photoAlts: ['Front view', 'Full length view', 'Bodice detail'],
      colours: ['Blush pink', 'Ivory', 'Champagne'],
      sku: 'FC-BBL-002', category: 'Gowns, Occasion wear', tags: 'Lace, Bridal guest, Engagement',
      rating: '4.8 (31 reviews)', reviews: 31,
      bullets: ['Relaxed fit with a gentle flare at the hem', 'One-shoulder bow, sheer long sleeve', 'Hidden zip at the side, fully lined', 'Model is 5\'8" and wears a UK 12'],
      fabric: { 'Fabric': 'Beaded lace on stretch crepe', 'Lining': 'Soft satin lining', 'Fit': 'Relaxed, true to size', 'Care': 'Dry clean only' }
    },
    {
      id: 'rose-pearl-evening-gown', name: 'Rose Pearl Evening Gown', price: 1980,
      note: 'Pearl-beaded lace with sheer sleeves',
      short: 'A graceful column gown in rose lace, scattered with pearls and finished with sheer sleeves.',
      long: 'A long column gown in rose lace with pearl detailing from neckline to hem. Light, elegant and comfortable for long evenings.',
      photos: ['product-3.jpg', 'product-2.jpg', 'product-5.jpg'], photoAlts: ['Full length view', 'Front view', 'Bodice detail'],
      colours: ['Blush pink', 'Wine', 'Ivory'],
      sku: 'FC-RPE-003', category: 'Gowns, Occasion wear', tags: 'Pearl, Evening, Reception',
      rating: '4.7 (14 reviews)', reviews: 14,
      bullets: ['Straight column shape, floor length', 'Sheer sleeves with pearl detail', 'Zip closure at the back, fully lined', 'Model is 5\'8" and wears a UK 12'],
      fabric: { 'Fabric': 'Pearl-beaded lace', 'Lining': 'Soft stretch lining', 'Fit': 'Straight, true to size', 'Care': 'Dry clean only' }
    },
    {
      id: 'crimson-crystal-gown', name: 'Crimson Crystal Gown', price: 2750, was: 3200, tag: 'Sale',
      note: 'Crystal neckline and ruffled cuffs',
      short: 'A bold red gown with a crystal-covered neckline, long beaded sleeves and ruffled cuffs.',
      long: 'A show-stopping red gown with a crystal-covered neckline, long beaded sleeves and soft ruffled cuffs. Made for the moments when you want every eye on you.',
      photos: ['product-4.jpg', 'product-1.jpg', 'product-1-b.jpg'], photoAlts: ['Neckline detail', 'Front view', 'Back view'],
      colours: ['Red', 'Wine', 'Black'],
      sku: 'FC-CCG-004', category: 'Gowns, Occasion wear', tags: 'Crystal, Statement, Gala',
      rating: '5.0 (9 reviews)', reviews: 9,
      bullets: ['Fitted body with a flared hem', 'Crystal beadwork across the neckline', 'Ruffled cuffs on long sheer sleeves', 'Model is 5\'9" and wears a UK 12'],
      fabric: { 'Fabric': 'Stretch satin with crystal tulle', 'Lining': 'Soft stretch lining', 'Fit': 'Fitted, true to size', 'Care': 'Dry clean only' }
    },
    {
      id: 'blush-gown-clutch-set', name: 'Blush Gown & Bow Clutch Set', price: 2600, tag: 'Set',
      note: 'Gown with a matching crystal bow clutch',
      short: 'Our blush beaded gown, sold together with a matching crystal bow clutch.',
      long: 'The blush beaded gown paired with a hand-finished crystal bow clutch, so your look is ready the moment it arrives.',
      photos: ['product-5.jpg', 'product-2.jpg', 'product-3.jpg'], photoAlts: ['Gown and clutch', 'Front view', 'Full length view'],
      colours: ['Blush pink', 'Champagne'],
      sku: 'FC-BGC-005', category: 'Sets, Occasion wear', tags: 'Set, Clutch, Wedding guest',
      rating: '4.9 (17 reviews)', reviews: 17,
      bullets: ['Gown and crystal bow clutch included', 'Sheer long sleeves with beadwork', 'Zip closure at the back, fully lined', 'Model is 5\'8" and wears a UK 12'],
      fabric: { 'Fabric': 'Beaded lace on stretch crepe', 'Lining': 'Soft satin lining', 'Fit': 'Relaxed, true to size', 'Care': 'Dry clean only' }
    }
  ];
  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; return null; }

  /* ---------- bag ---------- */
  var KEY = 'frimbel_bag_v1', items = [];
  function load() { try { items = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { items = []; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} }
  function count() { return items.reduce(function (n, it) { return n + it.qty; }, 0); }
  function total() { return items.reduce(function (n, it) { return n + it.price * it.qty; }, 0); }

  var drawer, overlay, lastFocus = null;

  function optsText(it) { return [it.colour, it.size ? 'UK ' + it.size : ''].filter(Boolean).join(' · '); }

  function orderMessage() {
    var lines = items.map(function (it, i) {
      return (i + 1) + '. ' + it.name + ' (' + optsText(it).replace(' · ', ', ') + ') x' + it.qty + ' - ' + money(it.price * it.qty);
    });
    return 'Hello Frimbell Collections, I would like to order:\n' + lines.join('\n') +
           '\nTotal: ' + money(total()) + '\n\nMy name:\nDelivery location:';
  }

  function render() {
    var n = count();
    document.querySelectorAll('[data-bag-count]').forEach(function (el) { el.textContent = n; });
    if (!drawer) return;
    var body = drawer.querySelector('#bag-body'), foot = drawer.querySelector('#bag-foot');
    if (!items.length) {
      body.innerHTML = '<p class="bag-empty">Your bag is empty.<br>Pick a piece you love and it will show up here.</p>';
      foot.hidden = true;
      return;
    }
    foot.hidden = false;
    body.innerHTML = items.map(function (it, i) {
      return '<div class="bag-item" data-i="' + i + '">' +
        '<img src="' + it.img + '" alt="">' +
        '<div><h3>' + it.name + '</h3><p class="opts">' + optsText(it) + '</p>' +
        '<div class="qtyrow"><button type="button" data-act="minus" aria-label="One less">−</button>' +
        '<output>' + it.qty + '</output>' +
        '<button type="button" data-act="plus" aria-label="One more">+</button>' +
        '<button type="button" class="rm" data-act="remove">Remove</button></div></div>' +
        '<div class="line">' + money(it.price * it.qty) + '</div></div>';
    }).join('');
    drawer.querySelector('#bag-total').textContent = money(total());
    drawer.querySelector('#bag-order').href = wa(orderMessage());
  }

  function openBag() {
    if (!drawer) return;
    lastFocus = document.activeElement;
    drawer.classList.add('open'); overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('bag-open');
    setTimeout(function () { drawer.querySelector('.bag-close').focus(); }, 50);
  }
  function closeBag() {
    if (!drawer) return;
    drawer.classList.remove('open'); overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('bag-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function add(item) {
    for (var i = 0; i < items.length; i++) {
      var it = items[i];
      if (it.id === item.id && it.size === item.size && it.colour === item.colour) { it.qty += item.qty || 1; save(); render(); openBag(); return; }
    }
    items.push({ id: item.id, name: item.name, price: item.price, size: item.size || '', colour: item.colour || '', qty: item.qty || 1, img: item.img });
    save(); render(); openBag();
  }

  /* ---------- quick "pick your size" box (home page cards) ---------- */
  var quickDlg, qState = { id: null, size: '', colour: '' };
  var SIZES = ['8', '10', '12', '14', '16', '18'];

  function quick(id) {
    var p = byId(id); if (!p || !quickDlg) return;
    qState = { id: id, size: '', colour: p.colours[0] };
    quickDlg.querySelector('#q-img').src = p.photos[0];
    quickDlg.querySelector('#q-img').alt = p.name;
    quickDlg.querySelector('#q-title').textContent = p.name;
    quickDlg.querySelector('#q-price').textContent = money(p.price);
    quickDlg.querySelector('#q-view').href = 'product.html?id=' + p.id;
    quickDlg.querySelector('#q-err').textContent = '';
    quickDlg.querySelector('#q-colours').innerHTML = p.colours.map(function (c, i) {
      return '<button type="button" class="chip-btn" role="radio" aria-checked="' + (i === 0) + '" data-colour="' + c + '">' + c + '</button>';
    }).join('');
    quickDlg.querySelector('#q-sizes').innerHTML = SIZES.map(function (s) {
      return '<button type="button" class="chip-btn" role="radio" aria-checked="false" data-size="' + s + '">' + s + '</button>';
    }).join('');
    quickDlg.showModal();
  }

  /* ---------- build the shared pieces ---------- */
  function build() {
    // bag drawer
    overlay = document.createElement('div'); overlay.className = 'bag-overlay';
    drawer = document.createElement('aside'); drawer.id = 'bag';
    drawer.setAttribute('role', 'dialog'); drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-labelledby', 'bag-title'); drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML =
      '<div class="bag-head"><h2 id="bag-title">Your bag</h2><button type="button" class="bag-close" aria-label="Close bag">×</button></div>' +
      '<div class="bag-body" id="bag-body"></div>' +
      '<div class="bag-foot" id="bag-foot" hidden>' +
        '<div class="bag-total"><span>Total</span><strong id="bag-total">GH₵ 0</strong></div>' +
        '<p class="bag-note">We confirm delivery with you on WhatsApp. Pay with mobile money, card or on delivery.</p>' +
        '<a class="bag-order" id="bag-order" target="_blank" rel="noopener">Order on WhatsApp</a>' +
        '<button type="button" class="bag-continue">Continue shopping</button>' +
      '</div>';
    document.body.appendChild(overlay); document.body.appendChild(drawer);

    overlay.addEventListener('click', closeBag);
    drawer.querySelector('.bag-close').addEventListener('click', closeBag);
    drawer.querySelector('.bag-continue').addEventListener('click', closeBag);
    drawer.addEventListener('click', function (e) {
      var b = e.target.closest('[data-act]'); if (!b) return;
      var row = b.closest('.bag-item'); var i = +row.getAttribute('data-i'); var act = b.getAttribute('data-act');
      if (act === 'plus') items[i].qty = Math.min(10, items[i].qty + 1);
      if (act === 'minus') items[i].qty = Math.max(1, items[i].qty - 1);
      if (act === 'remove') items.splice(i, 1);
      save(); render();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && drawer.classList.contains('open')) closeBag(); });

    document.querySelectorAll('[data-bag]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); openBag(); });
    });

    // quick size box
    quickDlg = document.createElement('dialog'); quickDlg.id = 'quick'; quickDlg.setAttribute('aria-labelledby', 'q-title');
    quickDlg.innerHTML =
      '<div class="q-wrap"><button type="button" class="q-close" aria-label="Close">×</button>' +
      '<img id="q-img" alt="">' +
      '<div class="q-info"><h2 id="q-title"></h2><p id="q-price" class="q-price"></p>' +
        '<p class="q-label">Colour</p><div id="q-colours" class="q-chips" role="radiogroup" aria-label="Colour"></div>' +
        '<p class="q-label">Size (UK)</p><div id="q-sizes" class="q-chips" role="radiogroup" aria-label="Size"></div>' +
        '<p id="q-err" class="q-err" role="alert"></p>' +
        '<button type="button" id="q-add" class="q-add">Add to bag</button>' +
        '<a id="q-view" class="q-view" href="product.html">See full details</a></div></div>';
    document.body.appendChild(quickDlg);
    quickDlg.querySelector('.q-close').addEventListener('click', function () { quickDlg.close(); });
    quickDlg.addEventListener('click', function (e) { if (e.target === quickDlg) quickDlg.close(); });
    quickDlg.addEventListener('click', function (e) {
      var c = e.target.closest('[data-colour]'), s = e.target.closest('[data-size]');
      if (c) { qState.colour = c.getAttribute('data-colour'); quickDlg.querySelectorAll('[data-colour]').forEach(function (x) { x.setAttribute('aria-checked', String(x === c)); }); }
      if (s) { qState.size = s.getAttribute('data-size'); quickDlg.querySelectorAll('[data-size]').forEach(function (x) { x.setAttribute('aria-checked', String(x === s)); }); quickDlg.querySelector('#q-err').textContent = ''; }
    });
    quickDlg.querySelector('#q-add').addEventListener('click', function () {
      if (!qState.size) { quickDlg.querySelector('#q-err').textContent = 'Please choose a size first.'; return; }
      var p = byId(qState.id);
      quickDlg.close();
      add({ id: p.id, name: p.name, price: p.price, size: qState.size, colour: qState.colour, qty: 1, img: p.photos[0] });
    });
    document.addEventListener('click', function (e) {
      var b = e.target.closest('.card .add'); if (!b) return;
      quick(b.closest('.card').getAttribute('data-id'));
    });

    // floating WhatsApp button
    var f = document.createElement('a'); f.className = 'wa-float'; f.target = '_blank'; f.rel = 'noopener';
    f.href = wa('Hello Frimbell Collections, I have a question.');
    f.setAttribute('aria-label', 'Chat with us on WhatsApp');
    f.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.7 1.2 5.1 3.2 6.8L4.4 22l4.2-1.9c1.1.3 2.2.5 3.4.5 5.5 0 10-4.2 10-9.4S17.5 2 12 2zm-3 5.6h1.3l.6 1.6-.8 1c.6 1.2 1.6 2.1 2.9 2.7l.9-.9 1.6.8-.2 1.3c-.2.6-1 1-1.8.9-3.3-.6-5.6-3-6-5.7-.1-.8.4-1.5 1.5-1.7z"/></svg><span>Chat with us</span>';
    document.body.appendChild(f);

    // gentle fade-in as sections scroll into view (skipped if the visitor prefers less motion)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.08 });
      document.querySelectorAll('.products, .collage, .about, .stores, .info, .related, .foot-card').forEach(function (el) {
        el.classList.add('reveal'); io.observe(el);
      });
    }

    load(); render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();

  window.FrimbellCart = { PRODUCTS: PRODUCTS, byId: byId, money: money, wa: wa, hex: hex, add: add, open: openBag, quick: quick };
})();
