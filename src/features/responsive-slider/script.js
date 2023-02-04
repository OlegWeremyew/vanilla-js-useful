const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;

window.addEventListener("load", init)

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = `${width * images.length}px`;

  images.forEach((image) => {
    image.style.width = `${width}px`;
    image.style.height = `auto`;
  })

  rollSlider();
}

//after resize page
window.addEventListener("resize", init)


const sliderButtonNext = document.querySelector('.slider-next');
sliderButtonNext.addEventListener('click', function () {
  count += 1;
  if (count >= images.length) {
    count = 0;
  }

  rollSlider();
});

const sliderButtonPrev = document.querySelector('.slider-prev');
sliderButtonPrev.addEventListener('click', function () {
  count -= 1;
  if (count < 0) {
    count = images.length - 1;
  }

  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = `translate(-${count * width}px)`
}