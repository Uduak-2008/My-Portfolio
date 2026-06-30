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
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').Value.trim();
  const password = document.getElementById('password').Value.trim();
  const email = document.getElementById('email').Value.trim();
  const errorMsg = document.getElementById('errorMsg');

  const validUser = "admin"
  const validPass = "password123"

}