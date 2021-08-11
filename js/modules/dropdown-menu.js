import outsideClick from "./outsideclick.js"

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
    this.activeClass = "active"
    if (events === undefined) this.events = ["click", "touchstart"]
    else this.events = events
  }

  activeDropDownMenu(event) {
    event.preventDefault()
    const el = event.currentTarget
    el.classList.add(this.activeClass)
    outsideClick(el, this.events, () => {
      el.classList.remove(this.activeClass)
    })
  }

  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent()
    }
    return this
  }
}
