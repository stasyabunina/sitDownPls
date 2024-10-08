import Filter from './Filter.js';
import Slider from './Slider.js';

export default class CatalogController {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.filterSection = this.element.querySelector('.filter');
    this.priceSliderEl = this.element.querySelector('.filter__price-slider');
    this.inputHigher = this.element.querySelector('.filter__price-input_higher');
    this.inputLower = this.element.querySelector('.filter__price-input_lower');
  }

  init() {
    this.bindToDOM();

    this.swiperInit();
    this.priceSlider = new Slider(this.priceSliderEl, this.inputLower, this.inputHigher);
    this.filter = new Filter(this.filterSection);
    this.timeline();
  }

  timeline() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.catalog__swiper-container', {opacity: 0, y: 100}, {
      duration: 0.7,
      opacity: 1,
      y: 0,
    });
  }

  swiperInit() {
    this.catalogSwiperInit();
  }

  catalogSwiperInit() {
    const options = {
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
        },
      },
      pagination: {
        el: '.catalog__pagination',
        clickable: true,
        renderBullet(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      a11y: {
        paginationBulletMessage: 'Перейти к следующей странице',
      },
    };

    this.catalogSwiper = new Swiper('.catalog__swiper-container', options);
  }
}
