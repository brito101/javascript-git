import outsideClick from "./outsideclick.js";

export default function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  function openMenu() {
    menuButton.classList.add("active");
    menuList.classList.add("active");

    outsideClick(menuList, events, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    events.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu)
    );
  }
}
