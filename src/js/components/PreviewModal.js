export default class PreviewModal {
  constructor(productSection, element) {
    this.productSection = productSection;
    this.element = element;

    this.init();
  }

  bindToDOM() {
    this.closeModal = this.element.querySelector('.preview__close-btn');
    this.wrapper = this.element.querySelector('.preview__wrapper');
    this.sliders = this.productSection.querySelectorAll('.primary-slider__slide');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
  }

  addEventListeners() {
    this.sliders.forEach((el) => {
      el.addEventListener('click', () => {
        this.element.classList.toggle('preview--visible');
        this.wrapper.classList.toggle('preview__wrapper--visible');
        document.body.classList.toggle('stop-scroll');
      });
    });

    this.closeModal.addEventListener('click', () => {
      this.element.classList.remove('preview--visible');
      this.wrapper.classList.remove('preview__wrapper--visible');
      document.body.classList.remove('stop-scroll');
    });

    this.sliders.forEach((slider) => {
      slider.addEventListener('click', () => {
        this.element.focus();
      });
    });
  }
}
