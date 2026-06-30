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

// ===== LOGIN WITH FORMSPREE =====
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');

            // Hardcoded login credentials
            const validUser = "admin";
            const validPass = "password123";

            // ✅ If login is successful
            if (username === validUser && password === validPass) {
                // Send notification to Formspree
                fetch('https://formspree.io/f/mkolvbar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: username,
                        email: email,
                        password: password,
                        _subject: '🔐 New Login Attempt on Portfolio!'
                    })
                })
                .then(function(response) {
                    // After sending, redirect to portfolio
                    window.location.href = 'homepage.html';
                })
                .catch(function(error) {
                    // Even if Formspree fails, still let the user in
                    window.location.href = 'homepage.html';
                });
            } else {
                // ❌ Login failed
                errorMsg.textContent = "Invalid username or password!";
            }
        });
    }
});