export default class Slider {
  constructor(element, inputLower, inputHigher) {
    this.element = element;
    this.inputLower = inputLower;
    this.inputHigher = inputHigher;
    this.inputs = [this.inputLower, this.inputHigher];

    this.init(this.element, this.inputs)
  }

  init(element, inputs) {
    noUiSlider.create(element, {
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

    element.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    inputs.forEach((input, handle) => {
      input.addEventListener('change', () => {
        element.noUiSlider.setHandle(handle, Math.round(this.value));
      });

      input.addEventListener('keydown', (e) => {
        var values = element.noUiSlider.get();
        var value = Number(values[handle]);
        var steps = element.noUiSlider.steps();
        var step = steps[handle];
        var position;
        switch (e.which) {
          case 13:
            element.noUiSlider.setHandle(handle, this.value);
            break;
          case 38:
            position = step[1];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              element.noUiSlider.setHandle(handle, value + position);
            }
            break;
          case 40:
            position = step[0];
            if (position === false) {
              position = 1;
            }
            if (position !== null) {
              element.noUiSlider.setHandle(handle, value - position);
            }
            break;
        }
      });
    });
  }
}
