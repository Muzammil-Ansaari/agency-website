// Initialize AOS
AOS.init({
  duration: 1000, // Customize the duration of the animations
  once: false, // Allow animations to repeat when elements come into view again
});

// Initialize Swiper
let swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // Optional: Cross-fade between slides
  },
  autoplay: {
    delay: 5000,
    // pauseOnMouseEnter: true
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    // Reset AOS animations on each slide change
    slideChangeTransitionStart: function () {
      // Remove AOS animations from all slides to reset
      document.querySelectorAll('.swiper-slide [data-aos]').forEach(function (element) {
        element.classList.remove('aos-animate');
      });
    },
    slideChangeTransitionEnd: function () {
      // Trigger AOS animations for the active slide
      document.querySelectorAll('.swiper-slide-active [data-aos]').forEach(function (element) {
        element.classList.add('aos-animate');
      });
    }
  }
});

