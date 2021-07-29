import debounce from "./debounce.js";

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.idealHeigth = window.innerHeight * 0.6
    this.activeAnimation = debounce(this.activeAnimation.bind(this), 50)
  }

  getDistance() {
    this.distances = [...this.sections].map((section) => {
      const top = section.offsetTop
      return {
        el: section,
        top: Math.floor(top - this.idealHeigth),
      }
    })
  }

  activeAnimation() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.top) {
        item.el.classList.add("active")
      } else if (item.el.classList.contains("active")) {
        item.el.classList.remove("active")
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.activeAnimation()
      window.addEventListener("scroll", this.activeAnimation)
    }
    return this
  }
}
