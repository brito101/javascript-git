import NumbersAnimation from "./numbers-animation.js"

export default function numbersFetch() {
  function createNumberDiv(number) {
    const div = document.createElement("div")
    div.classList.add("numbers-skill")
    div.innerHTML = `<h3>${number.name}</h3><span data-number>${number.total}</span>`
    return div
  }

  async function apiFetch(url) {
    try {
      const apiResponse = await fetch(url)
      const apiJSON = await apiResponse.json()
      const numbersGrid = document.querySelector(".numbers-grid")

      apiJSON.forEach((item) => {
        const divNumber = createNumberDiv(item)
        numbersGrid.appendChild(divNumber)
      })

      const animaNumbers = new NumbersAnimation("[data-number]", ".numbers", "active");
      animaNumbers.init();

    } catch (error) {
      console.log(error)
    }
  }

  apiFetch("./numbers-api.json")
}
