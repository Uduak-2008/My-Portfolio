window.addEventListener('load', function() {
            setTimeout(function() {
                const splash = document.getElementById('splashScreen');
                splash.style.opacity = '0';
                setTimeout(function() {
                    window.location.href = 'homepage.html';
                }, 800);
            }, 2500);
        });