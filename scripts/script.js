function darkToggle() {
  let body = document.body;
  let menu = document.getElementById("menu");
  let me = document.getElementById("me");
  let work = document.getElementById("work");
  body.classList.toggle("body-dark-mode");
  menu.classList.toggle("dark");
  me.classList.toggle("page-alt");
  me.classList.toggle("page-alt-dark");
  work.classList.toggle("page-alt");
  work.classList.toggle("page-alt-dark");
}

let scrollPosition = 0;
var navBar = document.getElementById("navbar");
console.log(navBar);
navBar.style.transition = "opacity 1s";

setInterval(
  document.addEventListener("scroll", (event) => navbarAppear(), 1000)
);

function navbarAppear() {
  if (window.scrollY > 600) {
    navBar.style.opacity = 1;
    console.log("Navbar should appear");
  } else {
    navBar.style.opacity = 0;
    console.log("Navbar should disappear");
  }
}
