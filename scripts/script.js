const body = document.body;
const menu = document.getElementById("menu");
const me = document.getElementById("me");
const work = document.getElementById("work");
const links = document.querySelectorAll(".ext-link");

function darkToggle() {
  body.classList.toggle("body-dark-mode");
  menu.classList.toggle("dark");
  links.forEach((e) => {
    e.classList.toggle("ext-link--dark");
  });
}

let scrollPosition = 0;
var navBar = document.getElementById("navbar");
console.log(navBar);
navBar.style.transition = "opacity 1s";

function navbarAppear() {
  if (window.scrollY > 600) {
    navBar.style.opacity = 1;
  } else {
    navBar.style.opacity = 0;
  }
}

document.addEventListener("scroll", () => navbarAppear());
