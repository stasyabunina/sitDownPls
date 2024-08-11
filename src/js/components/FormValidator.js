export default class FormValidator {
  constructor(form, phone, options, fields, onSuccess = undefined) {
    this.form = form;
    this.phone = phone;
    this.options = options;
    this.fields = fields;
    this.onSuccess = onSuccess;

    this.validation = undefined;

    this.init()
  }

  init() {
    this.inputMask();
    this.validate();
    this.addFields();
    this.onSuccessHandler();
  }

  inputMask() {
    const im = new Inputmask('+7(999) 999 99 99');
    im.mask(this.phone);
  }

  validate() {
    this.validation = new JustValidate(this.form, this.options);
  }

  addFields() {
    for (const field of this.fields) {
      this.validation.addField(field.id, field.rules)
    }
  }

  onSuccessHandler() {
    this.onSuccess !== undefined && this.validation.onSuccess(() => this.onSuccess());
  }
}
