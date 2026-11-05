const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }
});
