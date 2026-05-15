const menuBtn = document.getElementById('menuToggle')
const menu = document.getElementById('menu');

function hideMenu() {
  menu.classList.remove('show');
  menuToggle.classList.remove('hide');
}

menuToggle.onclick = function() {
menu.classList.add('show');
menuBtn.classList.add('hide');
};

document.onclick = function(event) {
  if (menu.classList.contains('show') && event.target !== menuToggle && !menu.contains(event.target)) {
    hideMenu();
  }
};