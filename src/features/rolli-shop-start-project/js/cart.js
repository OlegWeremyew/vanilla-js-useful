const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener("click", (event) => {

  //проверяем что клик был по кнопке с нужным нам атрибутом "data-cart"
  if (event.target.hasAttribute('data-cart')) {

    //находим родителя с классом "card"
    const card = event.target.closest('.card')

    //собираем данные с этого товара и записываем их в единый объект
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.item-title').innerText,
      itemInBox: card.querySelector('[data-items-in-box]').innerText,
      weight: card.querySelector('.price__weight').innerText,
      price: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,
    }

    //находим в корзине элементы с текущим товаром (для избежания повторений товаров в корзине)
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

    if (itemInCart) {
      const counterElement = itemInCart.querySelector('[data-counter]');
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
    } else {
      const cartItem = `
<div class="cart-item" data-id="${productInfo.id}">
  <div class="cart-item__top">
    <div class="cart-item__img">
      <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
    </div>
    
    <div class="cart-item__desc">
      <div class="cart-item__title">${productInfo.title}</div>
      <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}.</div>

      <div class="cart-item__details">

        <div class="items items--small counter-wrapper">
          <div class="items__control" data-action="minus">-</div>
          <div class="items__current" data-counter="">${productInfo.counter}</div>
          <div class="items__control" data-action="plus">+</div>
        </div>

          <div class="price">
          <div class="price__currency">${productInfo.price}</div>
        </div>

      </div>
    </div>
  </div>
</div>
`
      //добавляем товар в разметку
      cartWrapper.insertAdjacentHTML("beforeend", cartItem)
    }

    //сбрасываем счётчик после добавления
    card.querySelector('[data-counter]').innerText = '1'

  }
})