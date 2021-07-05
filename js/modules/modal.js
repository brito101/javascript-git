/** Efeito Modal */
export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("active");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickOutModal(e) {
    if (e.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
