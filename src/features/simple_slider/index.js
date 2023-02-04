//current position
let offset = 0;

const sliderLine = document.querySelector('.slider-line');

const sliderButtonNext = document.querySelector('.slider-next');
sliderButtonNext.addEventListener('click', function (event) {
  offset += 256;
  if (offset > 768) {
    offset = 0;
  }
  sliderLine.style.left = `-${offset}px`;
});

const sliderButtonPrev = document.querySelector('.slider-prev');
sliderButtonPrev.addEventListener('click', function (event) {
  offset -= 256;
  if (offset < 0) {
    offset = 768;
  }
  sliderLine.style.left = `-${offset}px`;
});