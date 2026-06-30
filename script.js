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

// Login with Formspree//
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').Value.trim();
      const email = document.getElementById('email').Value.trim();
      const password = document.getElementById('password').Value.trim();
      const errorMsg = document.getElementById('errorMsg');

      const validUser = "admin"
      const validPass = "password123";

      //if login is successful//
      if (username === validUser && password === validPass) {
        fetch('https://formspree.io/f/mkolvbar', {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            _subject: '🔑 New Login Attempt on Portfolio'
          })

        })
           .then(function() {
            window.location.href = 'hompage.html';
           }) 
           .catch(function() {
            window.location.href ='homepage.html';
           });
          } else {
            //login failed//
            errorMsg.textContent = "Invalid username or password!";
          }
        });
      }

    });