if (document.querySelector('.hero')) {
  const heroSwiper = new Swiper('.hero__swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    a11y: {
      paginationBulletMessage: 'Перейти к другому слайду',
    },
    keyboard: true,
  })
};

if (document.querySelector('.offers')) {
  const offersSwiper = new Swiper('.offers__swiper-container', {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 32,
    autoplay: false,
    a11y: {
      prevSlideMessage: 'К предыдущему слайду',
      nextSlideMessage: 'К следующему слайду',
    },
    navigation: {
      nextEl: ".offers__button-next",
      prevEl: ".offers__button-prev",
    },
    breakpoints: {
      1201: {
        slidesPerView: "auto",
      },
      963: {
        slidesPerView: 3,
      },
      751: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  })
};

if (document.querySelector('.useful')) {
  const usefulSwiper = new Swiper('.useful__swiper-container', {
    slidesPerGroup: 1,
    spaceBetween: 32,
    autoplay: false,
    a11y: {
      prevSlideMessage: 'К предыдущему слайду',
      nextSlideMessage: 'К следующему слайду',
    },
    navigation: {
      nextEl: ".useful__button-next",
      prevEl: ".useful__button-prev",
    },
    breakpoints: {
      1201: {
        slidesPerView: 2,
      },
      963: {
        slidesPerView: 3,
      },
      751: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      }
    }
  })
};

if (document.querySelector('.product')) {
  const secondarySlider = new Swiper('.secondary-slider', {
    spaceBetween: 38,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      1201: {
        slidesPerView: 4,
        direction: 'horizontal',
        spaceBetween: 38,
      },
      963: {
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 38,
      },
      751: {
        slidesPerView: 4,
        direction: 'vertical',
        spaceBetween: 18,
      },
      577: {
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 38,
      },
      320: {
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 38,
      }
    }
  });

  const primarySlider = new Swiper('.primary-slider', {
    spaceBetween: 38,
    thumbs: {
      swiper: secondarySlider
    },
    breakpoints: {
      963: {
        spaceBetween: 38,
      },
      751: {
        spaceBetween: 18,
      },
      320: {
        spaceBetween: 38,
      }
    }
  })
};

if (document.querySelector('.similar')) {
  const similarSwiper = new Swiper('.similar__swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 32,
    autoplay: false,
    a11y: {
      prevSlideMessage: 'К предыдущему слайду',
      nextSlideMessage: 'К следующему слайду',
    },
    navigation: {
      nextEl: '.similar__button-next',
      prevEl: '.similar__button-prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 4,
      },
      963: {
        slidesPerView: 3,
      },
      751: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      }
    }
  })
};

if (document.querySelector('.preview')) {
  const previewSecondary = new Swiper('.preview-secondary-slider', {
    spaceBetween: 78,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: false,
    navigation: {
      nextEl: ".preview__button-next",
      prevEl: ".preview__button-prev",
    },
    a11y: {
      prevSlideMessage: 'К предыдущему слайду',
      nextSlideMessage: 'К следующему слайду',
    },
    breakpoints: {
      751: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
      320: {
        slidesPerView: 1,
        centeredSlides: true,
      }
    }
  });

  const previewPrimary = new Swiper('.preview-primary-slider', {
    spaceBetween: 78,
    thumbs: {
      swiper: previewSecondary
    }
  })
};

if (document.querySelector('.catalog')) {
  const catalogSwiper = new Swiper('.catalog__swiper-container', {
    watchSlidesProgress: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      fill: 'rows',
      rows: 3,
    },
    spaceBetween: 32,
    breakpoints: {
      963: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      751: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      }
    },
    pagination: {
      el: ".catalog__pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    a11y: {
      paginationBulletMessage: 'Перейти к следующей странице',
    },
  })
};


