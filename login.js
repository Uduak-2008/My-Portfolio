window.addEventListener('load', function() {
            setTimeout(function() {
                const splash = document.getElementById('splashScreen');
                splash.style.transition = 'opacity 0.8s ease';
                splash.style.opacity = '0';

                setTimeout(function() {
                    window.location.replace('homepage.html');
                }, 800);
            }, 3000);
        });

        //Fallback if DOMContentLoaded doesn't work//
        setTimeout(function() {
            if (document.getElementById('splashScreen')) {
                window.location.replace('homepage.html');
            }
        }, 5000);