/** Deslizar no scroll de forma suave */
export default class SmoothScroll {
  constructor(links, options) {
    this.internalLinks = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkevent() {
    this.internalLinks.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.internalLinks.length) {
      this.addLinkevent();
    }
    return this;
  }
}
