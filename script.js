(function () {
  'use strict';

  /* ── FAQ アコーディオン ──────────────────────────────────── */
  document.querySelectorAll('.af-faq__item').forEach(function (item) {
    var trigger = item.querySelector('.af-faq__q');
    var icon    = item.querySelector('.af-faq__icon');
    if (!trigger) return;

    function toggleFaq() {
      var open = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (icon) icon.textContent = open ? '－' : '＋';
    }

    trigger.addEventListener('click', toggleFaq);

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq();
      }
    });
  });

  /* ── TOPボタン 追従表示 / スムーズスクロール ─────────────── */
  var totopFab = document.querySelector('.totop-fab');
  var fvEl     = document.querySelector('.fv');

  if (totopFab) {
    var threshold = fvEl ? fvEl.offsetHeight * 0.6 : window.innerHeight * 0.6;

    function updateTotop() {
      if (window.scrollY > threshold) {
        totopFab.classList.add('is-visible');
      } else {
        totopFab.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', updateTotop, { passive: true });
    updateTotop();

    totopFab.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
