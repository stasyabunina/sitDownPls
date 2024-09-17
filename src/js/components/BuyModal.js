import FormValidator from './FormValidator.js';

export default class BuyModal {
  constructor(productSection, element) {
    this.productSection = productSection;
    this.element = element;

    this.init();
  }

  bindToDOM() {
    this.openModal = this.productSection.querySelector('.product__buy-btn');
    this.closeModal = this.element.querySelector('.buy__close-btn');
    this.wrapper = this.element.querySelector('.buy__wrapper');
    this.phoneInput = this.element.querySelector('.buy__tel-input');
    this.form = this.element.querySelector('.buy__form');
    this.success = this.element.querySelector('.buy__success');
    this.formWrapper = this.element.querySelector('.buy__form-wrapper');
  }

  init() {
    this.bindToDOM();
    this.addEventListeners();
    this.formValidator();
  }

  addEventListeners() {
    this.openModal.addEventListener('click', () => {
      this.element.classList.toggle('buy--visible');

      this.wrapper.classList.toggle('buy__wrapper--visible');
      document.body.classList.toggle('stop-scroll');
    });

    this.closeModal.addEventListener('click', () => {
      this.element.classList.remove('buy--visible');
      this.wrapper.classList.remove('buy__wrapper--visible');
      document.body.classList.remove('stop-scroll');
    });
  }

  formValidator() {
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
      this.formWrapper.classList.add('buy__form-wrapper--hidden');
      this.success.classList.add('buy__success--visible');
    };

    this.validator = new FormValidator(this.form, this.phoneInput, options, fields, onSuccess);
  }
}
