const body = document.body;
const me = document.getElementById("me");
const work = document.getElementById("work");
const links = document.querySelectorAll(".ext-link");

console.log(links);
function darkToggle() {
  body.classList.toggle("body--dark");
  links.forEach((e) => {
    e.classList.toggle("ext-link--dark");
  });
}

let scrollPosition = 0;
var navBar = document.querySelector(".navbar");
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
