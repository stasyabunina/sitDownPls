export default class SwiperElement {
  constructor(className, options) {
    this.swiper = null;

    this.init(className, options)
  }

  init(className, options) {
    this.swiper = new Swiper(className, options);
  }
}
