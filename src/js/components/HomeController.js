import FormValidator from './FormValidator.js';
import LoadMoreHandler from './LoadMoreHandler.js';

export default class HomeController {
  constructor(element) {
    this.element = element;
  }

  bindToDOM() {
    this.btnMore = this.element.querySelector('.rating__btn');
    this.ratingItems = this.element.querySelectorAll('.rating__item');
    this.phoneInput = this.element.querySelector('.feedback__tel-input');
    this.form = this.element.querySelector('.feedback__form');
  }

  init() {
    this.bindToDOM();

    this.tooltipHandler();
    this.swiperInit();
    this.feedbackFormValidator();
    this.timeline();

    this.loader = new LoadMoreHandler(this.btnMore, this.ratingItems);
  }

  timeline() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.offers__swiper-container', {opacity: 0, y: 100}, {
      scrollTrigger: {
        trigger: '.offers__swiper-container',
        start: 'top 90%',
      },
      duration: 0.7,
      opacity: 1,
      y: 0,
    });

    gsap.fromTo('.rating__item', {opacity: 0, y: 100}, {
      scrollTrigger: {
        trigger: '.rating__item',
        start: 'top 90%',
      },
      duration: 0.7,
      opacity: 1,
      y: 0,
    });

    gsap.fromTo('.top-category__item', {opacity: 0, y: 100}, {
      scrollTrigger: {
        trigger: '.top-category__item',
        start: 'top 90%',
      },
      duration: 0.7,
      opacity: 1,
      y: 0,
    });

    gsap.fromTo('.useful__swiper-container', {opacity: 0, y: 100}, {
      scrollTrigger: {
        trigger: '.useful__swiper-container',
        start: 'top 90%',
      },
      duration: 0.7,
      opacity: 1,
      y: 0,
    });
  }

  tooltipHandler() {
    tippy('.feedback__tooltip', {
      content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
      theme: 'gray',
      maxWidth: 190,
    });
  }

  swiperInit() {
    this.heroSwiperInit();
    this.offersSwiperInit();
    this.usefulSwiperInit();
  }

  heroSwiperInit() {
    const options = {
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
    };

    this.heroSwiper = new Swiper('.hero__swiper-container', options);
  }

  offersSwiperInit() {
    const options = {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 32,
      autoplay: false,
      a11y: {
        prevSlideMessage: 'К предыдущему слайду',
        nextSlideMessage: 'К следующему слайду',
      },
      navigation: {
        nextEl: '.offers__button-next',
        prevEl: '.offers__button-prev',
      },
      breakpoints: {
        1201: {
          slidesPerView: 'auto',
        },
        963: {
          slidesPerView: 3,
        },
        751: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    };

    this.offersSwiper = new Swiper('.offers__swiper-container', options);
  }

  usefulSwiperInit() {
    const options = {
      slidesPerGroup: 1,
      spaceBetween: 32,
      autoplay: false,
      a11y: {
        prevSlideMessage: 'К предыдущему слайду',
        nextSlideMessage: 'К следующему слайду',
      },
      navigation: {
        nextEl: '.useful__button-next',
        prevEl: '.useful__button-prev',
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
        },
      },
    };

    this.usefulSwiper = new Swiper('.useful__swiper-container', options);
  }

  feedbackFormValidator() {
    const options = {
      successFieldCssClass: 'is-valid',
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#FF6972',
      },
    };

    const fields = [
      {
        id: '#name', rules: [{
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Поле должно содержать минимум :value символов',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Поле должно содержать максимум :value символов',
        },
        {
          rule: 'customRegexp',
          value: '^[a-zA-Zа-яА-Я -]+$',
          errorMessage: 'Недопустимый формат',
        }],
      },
      {
        id: '#email', rules: [
          {
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
          },
          {
            rule: 'email',
            errorMessage: 'Недопустимый формат',
          }
        ],
      },
      {
        id: '#tel', rules: [{
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },
        {
          validator: () => (Number(this.phoneInput.inputmask.unmaskedvalue()) && this.phoneInput.inputmask.unmaskedvalue().length === 10),
          errorMessage: 'Пожалуйста, введите действительный номер телефона',
        }],
      },
      {
        id: '#agree', rules: [{
          rule: 'required',
          errorMessage: 'Обязательное согласие',
        }],
      }
    ];

    const onSuccess = () => {
      this.form.reset();
    };

    this.validator = new FormValidator(this.form, this.phoneInput, options, fields, onSuccess);
  }
}
