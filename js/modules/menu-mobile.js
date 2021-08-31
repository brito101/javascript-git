import outsideClick from "./outsideclick.js"

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    this.activeClass = "active"
    if (events === undefined) this.events = ["click", "touchstart"]
    else this.events = events

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(event) {
    event.preventDefault()
    this.menuButton.classList.add(this.activeClass)
    this.menuList.classList.add(this.activeClass)

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

  addEvents() {
    this.events.forEach((userEvent) =>
      this.menuButton.addEventListener(userEvent, this.openMenu)
    )
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvents()
    }
    return this
  }
}
