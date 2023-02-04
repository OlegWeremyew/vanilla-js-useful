const rootNav = document.querySelector('.root-nav')
rootNav.addEventListener("click", (event) => {

  if (event.target.nodeName !== "SPAN") return;

  const nextSiblings = event.target.nextElementSibling
  closeAllSubMenu(nextSiblings)

  event.target.classList.add("sub-menu-active-span")
  nextSiblings.classList.toggle("sub-menu-active")
})

function closeAllSubMenu(current = null) {
  const parents = [];

  if (current) {
    let currentParent = current.parentNode;

    while (currentParent) {
      if (currentParent.classList.contains("root-nav")) break
      if (currentParent.nodeName === 'UL') {
        parents.push(currentParent)
      }

      currentParent = currentParent.parentNode
    }
  }

  const subMenus = document.querySelectorAll('.root-nav ul')

  Array.from(subMenus).forEach((subMenu) => {
    if (subMenu !== current && !parents.includes(subMenu)) {
      subMenu.classList.remove("sub-menu-active")

      const prevElemSib = subMenu.previousElementSibling

      if (prevElemSib.nodeName === "SPAN") {
        prevElemSib.classList.remove("sub-menu-active-span")
      }
    }
  })
}

//close menu
document.querySelector('.root-nav').onmouseleave = closeAllSubMenu