gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.offers')) {
  gsap.fromTo('.offers__swiper-container', { opacity: 0, y: 100 }, {
    scrollTrigger: {
      trigger: '.offers__swiper-container',
      start: 'top 90%',
    },
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.rating')) {
  gsap.fromTo('.rating__item', { opacity: 0, y: 100 }, {
    scrollTrigger: {
      trigger: '.rating__item',
      start: 'top 90%',
    },
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.top-category')) {
  gsap.fromTo('.top-category__item', { opacity: 0, y: 100 }, {
    scrollTrigger: {
      trigger: '.top-category__item',
      start: 'top 90%',
    },
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.useful')) {
  gsap.fromTo('.useful__swiper-container', { opacity: 0, y: 100 }, {
    scrollTrigger: {
      trigger: '.useful__swiper-container',
      start: 'top 90%',
    },
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.product')) {
  gsap.fromTo('.product__desc', { opacity: 0, y: 100 }, {
    duration: 0.7,
    opacity: 1,
    y: 0
  });

  gsap.fromTo('.product__details', { opacity: 0, y: 100 }, {
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.similar')) {
  gsap.fromTo('.similar__swiper-container', { opacity: 0, y: 100 }, {
    scrollTrigger: {
      trigger: '.similar__swiper-container',
      start: 'top 90%',
    },
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};

if (document.querySelector('.catalog')) {
  gsap.fromTo('.catalog__swiper-container', { opacity: 0, y: 100 }, {
    duration: 0.7,
    opacity: 1,
    y: 0
  })
};
