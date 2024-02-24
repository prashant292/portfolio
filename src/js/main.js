import ScrollReveal from "scrollreveal";
import "../scss/main.scss";

/* Selectors */
import selectors from "./selectors";

// Functionality to handle navigation //
window.onload = () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
  }
};
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768.001px)").matches) {
    selectors.navigationContainer.classList.add("navigation-visible");
    selectors.hamburgerBtn.classList.remove("animated-hamburger-btn");
  } else if (
    !selectors.hamburgerBtn.classList.contains("animated-hamburger-btn")
  ) {
    selectors.navigationContainer.classList.remove("navigation-visible");
  }
});
selectors.hamburgerBtn.addEventListener("click", function () {
  this.classList.toggle("animated-hamburger-btn");
  selectors.navigationContainer.classList.toggle("navigation-visible");
});

// Functionality to add shadow to navigation header //
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
    selectors.navigationHeader.style.boxShadow =
      "0 3px 8px hwb(0 0% 100% / .15)";
  } else {
    selectors.navigationHeader.style.boxShadow = "none";
  }
});

// Functionality to reveal on scrolling //
ScrollReveal({
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "top",
  reset: false
}).reveal(".project");

ScrollReveal({
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  origin: "top",
  reset: false
}).reveal(".contact-section");
