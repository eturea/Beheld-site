/* share-plate.js — animate sprite-sheet on desktop in-view, tap-to-play on mobile.
   Drop on any page that uses .share-plate. No deps. */
(function () {
  function init() {
    var plates = document.querySelectorAll('.share-plate');
    if (!plates.length) return;
    var isMobile = window.matchMedia('(max-width: 720px)').matches;

    plates.forEach(function (plate) {
      if (isMobile) {
        plate.setAttribute('data-mobile-tap', '');
        plate.addEventListener('click', function () {
          plate.classList.add('is-playing');
        });
        return;
      }

      // Desktop: animate when in view, pause when out.
      if (!('IntersectionObserver' in window)) {
        plate.classList.add('is-playing');
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          plate.classList.toggle('is-playing', e.isIntersecting);
        });
      }, { threshold: 0.2 });
      io.observe(plate);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
