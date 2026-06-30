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
                .then(function() {
                    window.location.href = 'homepage.html';
                })
                .catch(function() {
                    window.location.href = 'homepage.html';
                });

            } else {
                errorMsg.textContent = "Invalid username or password!";
            }
        });
    }
});