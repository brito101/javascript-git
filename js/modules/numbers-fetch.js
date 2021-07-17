import NumbersAnimation from "./numbers-animation.js"

export default function numbersFetch(url, target) {
  function createNumberDiv(number) {
    const div = document.createElement("div")
    div.classList.add("numbers-skill")
    div.innerHTML = `<h3>${number.name}</h3><span data-number>${number.total}</span>`
    return div
  }

  const numbersGrid = document.querySelector(target)

  function insertData(item) {
    const divNumber = createNumberDiv(item)
    numbersGrid.appendChild(divNumber)
  }

  function numbersAnimation() {
    const animaNumbers = new NumbersAnimation(
      "[data-number]",
      ".numbers",
      "active"
    )
    animaNumbers.init()
  }

  async function apiFetch() {
    try {
      const apiResponse = await fetch(url)
      const apiJSON = await apiResponse.json()
      apiJSON.forEach((item) => insertData(item))
      numbersAnimation()
    } catch (error) {
      console.log(error)
    }
  }

  return apiFetch()
}
