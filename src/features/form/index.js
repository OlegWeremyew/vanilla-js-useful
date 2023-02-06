"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend)

  async function formSend(e) {
    e.preventDefault()
    let error = formValidate(form)

    let formData = new FormData(form)
    formData.append('image', formImage.files[0])

    if (error === 0) {
      form.classList.add('_sending')
      let response = await fetch('sendmail.php', {
        method: "POST",
        body: formData
      })
      if (response.ok) {
        let result = await response.json()
        alert(result.message)
        formPreview.innerHTML = ""
        form.reset()
        form.classList.remove('_sending')
      } else {
        alert("Oшибка")
        form.classList.remove('_sending')
      }

    } else {
      alert("Заполните поля")
    }
  }
})

function formValidate(form) {
  let error = 0;

  //получаем все обязательные элеиенты
  let formReq = document.querySelectorAll('._req')

  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i]
    formRemoveError(input)

    if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        formAddError(input)
        error += 1
      }
    } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
      formAddError(input)
      error += 1
    } else {
      if (input.value === "") {
        formAddError(input)
        error += 1
      }
    }
  }

  return error
}

function formAddError(input) {
  input.parentElement.classList.add('_error')
  input.classList.add('_error')
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error')
  input.classList.remove('_error')
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

//получаем инпут файл
const formImage = document.getElementById('formImage')
//получаем див для превью в переменную
const formPreview = document.getElementById('formPreview')

//слушаем изменения в инпуте formImage
formImage.addEventListener('change', () => {
  uploadFile(formImage.files[0])
})

function uploadFile(file) {
  //проверка типа файла
  if (!['image/jpeg', 'image/png', 'image/jpg', 'image/gif'].includes(file.type)) {
    alert("Разрешены только изобрадения")
    formImage.value = ""
    return
  }
  //не больше 2мб
  if (file.size > 2 * 1024 * 1024) {
    alert("Должен быть менее 2мб")
    return
  }

  const render = new FileReader()
  //когда файл загружен записываем его
  render.onload = function (e) {
    formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`
  }

  //если ошибка
  render.onerror = function (e) {
    alert("Ошибка")
  }

  render.readAsDataURL(file)
}