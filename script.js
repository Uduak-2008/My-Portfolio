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
  const errorMsg = document.getElementById('errorMsg');

  const validUser = "admin"
  const validPass = "password123"

if (username === validUser && password === validPass) {
        // ✅ Login successful — redirect to portfolio
        window.location.href = "homepage.html";
    } else {
        // ❌ Login failed — show error
        errorMsg.textContent = "Invalid username or password!";
    }
  }

// ========== CONTACT FORM ON HOMEPAGE ==========
// This only runs on homepage.html
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Netlify handles the submission automatically
            // You can add a loading message here if you want
        });
    }
});