const body = document.body;
const me = document.getElementById("me");
const work = document.getElementById("work");
const links = document.querySelectorAll(".ext-link");

console.log(links);
function darkToggle() {
  body.classList.toggle("body-dark-mode");
  links.forEach((e) => {
    e.classList.toggle("ext-link--dark");
  });
}

let scrollPosition = 0;
var navBar = document.getElementById("navbar");
navBar.style.transition = "opacity 1s";

function navbarAppear() {
  if (window.scrollY > 600) {
    navBar.style.opacity = 1;
  } else {
    navBar.style.opacity = 0;
  }
}

document.addEventListener("scroll", () => navbarAppear());
