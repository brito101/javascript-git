export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass
    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementNumbers(number) {
    const total = +number.innerText
    const increment = Math.floor(total / 100)
    let start = 0
    const counter = setInterval(() => {
      start += increment
      number.innerText = start
      if (start > total) {
        number.innerText = total
        clearInterval(counter)
      }
    }, 25)
  }

  initAnimation() {
    this.numbers.forEach((number) => this.constructor.incrementNumbers(number))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.initAnimation()
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
