if (document.querySelector(".feedback__form")) {
  validateFeedbackForm();

  function validateFeedbackForm() {
    var phone1 = document.querySelector('.feedback__tel-input');

    var im1 = new Inputmask("+7(999) 999 99 99");
    im1.mask(phone1);

    const feedbackValidation = new JustValidate('.feedback__form', {
      successFieldCssClass: 'is-valid',
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#FF6972',
      },
    });

    feedbackValidation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: "Поле должно содержать минимум :value символов",
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: "Поле должно содержать максимум :value символов",
        },
        {
          rule: 'customRegexp',
          value: '^[a-zA-Zа-яА-Я -]+$',
          errorMessage: "Недопустимый формат",
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: "Вы не ввели e-mail",
        },
        {
          rule: 'email',
          errorMessage: "Недопустимый формат",
        },
      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: "Вы не ввели телефон",
        },
        {
          validator: (value) => (Number(phone1.inputmask.unmaskedvalue()) && phone1.inputmask.unmaskedvalue().length === 10),
          errorMessage: "Пожалуйста, введите действительный номер телефона",
        },
      ])
      .addField("#agree", [
        {
          rule: "required",
          errorMessage: "Обязательное согласие",
        },
      ])
      .onSuccess(() => {
        // document.querySelector(".feedback__form").reset()
      })
  };
};

if (document.querySelector(".buy__form")) {
  validateModalForm();

  function validateModalForm() {
    var phone2 = document.querySelector('.buy__tel-input');

    var im2 = new Inputmask("+7(999) 999 99 99");
    im2.mask(phone2);

    const modalValidation = new JustValidate('.buy__form', {
      successFieldCssClass: 'is-valid',
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#FF6972',
      },
    });

    modalValidation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: "Поле должно содержать минимум :value символов",
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: "Поле должно содержать максимум :value символов",
        },
        {
          rule: 'customRegexp',
          value: '^[a-zA-Zа-яА-Я -]+$',
          errorMessage: "Недопустимый формат",
        },
      ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: "Вы не ввели телефон",
        },
        {
          validator: (value) => (Number(phone2.inputmask.unmaskedvalue()) && phone2.inputmask.unmaskedvalue().length === 10),
          errorMessage: "Пожалуйста, введите действительный номер телефона",
        },
      ])
      .addField("#agree", [
        {
          rule: "required",
          errorMessage: "Обязательное согласие",
        },
      ])
      .onSuccess(() => {
        // document.querySelector(".feedback__form").reset()
        document.querySelector('.buy__form-wrapper').classList.add('buy__form-wrapper--hidden');
        document.querySelector('.buy__success').classList.add('buy__success--visible');
      })
  };
};





