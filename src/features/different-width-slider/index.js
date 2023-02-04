let line = document.querySelector('.line');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let remainder = 0;

for (let i = 0; i < slides.length; i++) {
  widthArray.push(slides[i].offsetWidth);
  lineWidth += slides[i].offsetWidth;
}

line.style.width = `${lineWidth}px`;

document.addEventListener("click", next)

function next() {
  remainder = lineWidth - sliderWidth - (offset + widthArray[step]);

  if (remainder >= 0) {
    offset += widthArray[step];
    line.style.left = `-${offset}px`;
  } else {
    line.style.left = `-${lineWidth - sliderWidth}px`
    offset = 0;
    step = -1;
  }

  if (step + 1 === slides.length) {
    step = 0;
    offset = 0;
  } else {
    step += 1;
  }
}

next();