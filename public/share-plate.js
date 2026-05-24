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
        // Tap-to-play is interactive only on mobile, so expose button semantics here.
        plate.setAttribute('role', 'button');
        plate.setAttribute('tabindex', '0');
        plate.setAttribute('aria-pressed', 'false');
        plate.setAttribute('aria-label', 'Play the postcard share animation');
        var play = function () {
          if (plate.classList.contains('is-playing')) return;
          plate.classList.add('is-playing');
          plate.setAttribute('aria-pressed', 'true');
          plate.setAttribute('aria-label', 'Postcard share animation playing');
        };
        plate.addEventListener('click', play);
        plate.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            play();
          }
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
