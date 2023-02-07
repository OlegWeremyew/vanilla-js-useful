//вычисляем на каком элементе произошло событие

window.addEventListener("click", (event) => {

  if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {

    //находим обёптку блока
    const counterWrapper = event.target.closest('.counter-wrapper')
    //находим значение счётчика внутри блока
    const counter = counterWrapper.querySelector('[data-counter]')

    //проверяем является ли элемент кнопкой "Плюс"
    if (event.target.dataset.action === "plus") {
      counter.innerText = ++counter.innerText
      return;
    }

    //проверяем является ли элемент кнопкой "Минус"
    if (event.target.dataset.action === "minus") {
      if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText
      }
    }
  }
})