/** Animar conteúdo no scroll */
export default function animationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  const idealHeigth = window.innerHeight * 0.6;

  function activeAnimation() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - idealHeigth < 0;
      if (sectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }

  if (sections.length) {
    activeAnimation();
    window.addEventListener("scroll", activeAnimation);
  }
}
