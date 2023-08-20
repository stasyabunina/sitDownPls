if (document.querySelector(".filter__price-slider")) {
  let filterSlider = document.querySelector('.filter__price-slider');

  noUiSlider.create(filterSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1000,
    range: {
      'min': 0,
      'max': 200000,
    },
    format: {
      to: (v) => parseFloat(v).toFixed(0),
      from: (v) => parseFloat(v).toFixed(0)
    }
  })


  let input0 = document.querySelector('.filter__price-input_lower');
  let input1 = document.querySelector('.filter__price-input_higher');
  let inputs = [input0, input1];

  filterSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  inputs.forEach(function (input, handle) {
    input.addEventListener('change', function () {
      filterSlider.noUiSlider.setHandle(handle, Math.round(this.value));
    });

    input.addEventListener('keydown', function (e) {
      var values = filterSlider.noUiSlider.get();
      var value = Number(values[handle]);
      var steps = filterSlider.noUiSlider.steps();
      var step = steps[handle];
      var position;
      switch (e.which) {
        case 13:
          filterSlider.noUiSlider.setHandle(handle, this.value);
          break;
        case 38:
          position = step[1];
          if (position === false) {
            position = 1;
          }
          if (position !== null) {
            filterSlider.noUiSlider.setHandle(handle, value + position);
          }
          break;
        case 40:
          position = step[0];
          if (position === false) {
            position = 1;
          }
          if (position !== null) {
            filterSlider.noUiSlider.setHandle(handle, value - position);
          }
          break;
      }
    });
  });
};
