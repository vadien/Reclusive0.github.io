const body = document.body;
const links = document.querySelectorAll(".link");
const navBar = document.querySelector(".navbar");

// Toggle dark mode
function darkToggle() {
  body.classList.toggle("body--dark");
  navBar.classList.toggle("navbar--dark");
  links.forEach((e) => {
    e.classList.toggle("link--dark");
  });
}

// Navbar fade in/out
navBar.style.transition = "opacity 0.66s";

function navbarAppear() {
  if (window.scrollY < 600) {
    navBar.style.opacity = 0;
  } else {
    navBar.style.opacity = 1;
  }
}
navbarAppear();
document.addEventListener("scroll", () => navbarAppear());
