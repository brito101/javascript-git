/** Efeito Modal */
export default function modal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("active");
  }

  function clickOutModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (openButton && closeButton && containerModal) {
    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutModal);
  }
}
