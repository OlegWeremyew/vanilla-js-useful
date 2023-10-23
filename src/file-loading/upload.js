function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (!bytes) {
    return '0 Byte'
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

export function upload(selector, options = {}) {
  const input = document.querySelector(selector)
  const preview = document.createElement('div')

  preview.classList.add('preview')

  const open = document.createElement('button')
  open.classList.add('btn')
  open.textContent = 'Open'

  if (options.multi) {
    input.setAttribute('multiple', true)
  }

  if (options.accept && Array.isArray(options.accept)) {
    input.setAttribute('accept', options.accept.join(','))
  }

  input.insertAdjacentElement('afterend', open)
  input.insertAdjacentElement('afterend', preview)

  const triggerInput = () => input.click()

  const changeHandler = (event) => {
    if (!event.target.files.length) return

    const files = [...event.target.files]

    preview.innerHTML = null

    files.forEach((file) => {
      if (!file.type.match('image')) return

      const reader = new FileReader()

      reader.onload = ev => {
        const src = ev.target.result
        preview.insertAdjacentHTML('afterbegin', `
          <div class="preview-image">
            <div class="preview-remove" data-name="${file.name}">&times;</div>
            <img src="${src}" alt="${file.name}" />
            <div class="preview-info">
              <span>${file.name}</span>
              ${bytesToSize(file.size)}
            </div>
          </div>
        `)
      }

      reader.readAsDataURL(file)
    })
  }

  open.addEventListener('click', triggerInput)
  input.addEventListener('change', changeHandler)
}
