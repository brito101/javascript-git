export default function numbersAnimation() {
  function initAnimation() {
    const numbers = document.querySelectorAll("[data-number]");
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = Math.floor(total / 100);
      let start = 0;
      const counter = setInterval(() => {
        start += increment;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(counter);
        }
      }, 25);
    });
  }

  let observer;

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      initAnimation();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numbers");
  observer.observe(observerTarget, { attributes: true });
}
