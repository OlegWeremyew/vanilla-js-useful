/**
 * HTMLElement - слайдера
 * @type {HTMLElement}
 */
const slider = document.getElementById('slider')

/**
 * HTMLButtonElement - кнопки слайдера
 * @type {HTMLButtonElement}
 */
const btn = slider.querySelector('.slider__btn')


/**
 * Обработка нажатия мыши для переопределения позиции кнопки свитчера
 * @param event - onmousedown Event Object
 * @return {void} - no return value
 */
btn.onmousedown = function (event) {
  event.preventDefault()

  /**
   * Значение смещения мыши по оси 'Х' относительно кнопки слайдера
   * @type {number}
   */
  let shiftX = event.clientX - btn.getBoundingClientRect().left

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)

  /**
   * Обработка движения мыши для перезаписи положения кнопки свитчера
   * @param event - mousemove Event Object
   * @return {void} - no return value
   */
  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left

    if (newLeft < 0) newLeft = 0

    let rightEdge = slider.offsetWidth - btn.offsetWidth

    if (newLeft > rightEdge) newLeft = rightEdge

    btn.style.left = `${newLeft}px`
  }

  /**
   * Удаление обработчиков после отжатия мыши
   * @return {void} - no return value
   */
  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousemove', onMouseMove)
  }

  /**
   * Удаление дефолтного поведения события 'dragstart'
   * @return {false}
   */
  btn.ondragstart = function () {
    return false
  }
}
