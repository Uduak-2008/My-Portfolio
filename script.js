const menu = document.getElementById("menu");
const toggle = document.getElementById("menuToggle");

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== toggle) {
    menu.classList.remove("show");
  }
});