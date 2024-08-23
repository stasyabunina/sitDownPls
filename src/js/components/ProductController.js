import BuyModal from './BuyModal';
import PreviewModal from './PreviewModal';

export default class ProductController {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.productSection = this.element.querySelector('.product');
    this.buyModal = this.element.querySelector('.buy');
    this.previewModal = this.element.querySelector('.preview');
  }

  init() {
    this.bindToDOM();

    this.swiperInit();
    new PreviewModal(this.productSection, this.previewModal);
    new BuyModal(this.productSection, this.buyModal);
    this.timeline();
  }

  timeline() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.product__desc', { opacity: 0, y: 100 }, {
      duration: 0.7,
      opacity: 1,
      y: 0
    });

    gsap.fromTo('.product__details', { opacity: 0, y: 100 }, {
      duration: 0.7,
      opacity: 1,
      y: 0
    });

    gsap.fromTo('.similar__swiper-container', { opacity: 0, y: 100 }, {
      scrollTrigger: {
        trigger: '.similar__swiper-container',
        start: 'top 90%',
      },
      duration: 0.7,
      opacity: 1,
      y: 0
    })
  }

  swiperInit() {
    this.previewSwiperInit();
    this.productSwiperInit();
    this.similarSwiperInit();
  }

  similarSwiperInit() {
    const options = {
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
    };

    new Swiper('.similar__swiper-container', options);
  }

  previewSwiperInit() {
    const secondaryPreviewOptions = {
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
    };

    const secondaryPreviewSwiperElement = new Swiper('.preview-secondary-slider', secondaryPreviewOptions);

    const primaryPreviewOptions = {
      spaceBetween: 78,
      thumbs: {
        swiper: secondaryPreviewSwiperElement
      }
    };

    new Swiper('.preview-primary-slider', primaryPreviewOptions);
  }

  productSwiperInit() {
    const secondaryOptions = {
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
    };

    const secondarySwiperElement = new Swiper('.secondary-slider', secondaryOptions);

    const primaryOptions = {
      spaceBetween: 38,
      thumbs: {
        swiper: secondarySwiperElement
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
    };

    new Swiper('.primary-slider', primaryOptions);
  }
}
