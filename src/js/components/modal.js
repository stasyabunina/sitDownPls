if (document.querySelector('.product')) {
  const product = document.querySelector('.product');
  const openModal = document.querySelector('.product__buy-btn');
  const closeBuyModal = document.querySelector('.buy__close-btn');
  const closePreviewModal = document.querySelector('.preview__close-btn');
  const buyModal = document.querySelector('.buy');
  const previewModal = document.querySelector('.preview');
  const buyWrapper = document.querySelector('.buy__wrapper');
  const previeWrapper = document.querySelector('.preview__wrapper');
  const primarySlider = product.querySelectorAll('.primary-slider__slide');

  openModal.addEventListener('click', function () {
    buyModal.classList.toggle('buy--visible');
    buyWrapper.classList.toggle('buy__wrapper--visible');
    document.body.classList.toggle('stop-scroll')
  });

  closeBuyModal.addEventListener('click', function () {
    buyModal.classList.remove('buy--visible');
    buyWrapper.classList.remove('buy__wrapper--visible');
    document.body.classList.remove('stop-scroll')
  });

  primarySlider.forEach(function (el) {
    el.addEventListener('click', function () {
      previewModal.classList.toggle('preview--visible');
      previeWrapper.classList.toggle('preview__wrapper--visible');
      document.body.classList.toggle('stop-scroll')
    })
  });

  closePreviewModal.addEventListener('click', function () {
    previewModal.classList.remove('preview--visible');
    previeWrapper.classList.remove('preview__wrapper--visible');
    document.body.classList.remove('stop-scroll')
  })

  primarySlider.forEach(function (slider) {
    slider.addEventListener('click', function () {
      previewModal.focus()
    })
  });
};

