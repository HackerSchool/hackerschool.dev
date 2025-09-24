document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;

    const translations = {
        pt: "HackerSaudações. Estávamos à tua espera.",
        en: "HackerGreetings. We were expecting you."
    };

    const path = window.location.pathname;
    console.log("Current path:", path); // Debugging line to check the path
    const userLang = path.includes("/pt/") ? "pt" : "en";

    const text = translations[userLang] || translations.en; //Damos-te as boas vindas ao site da HackerSchool.

    const targetElement = document.getElementById("type-js");
    const hiddenContent = document.getElementById("hidden-content");
    const logo = document.getElementById("logo");
    let typingSpeed = 50; // Default typing speed
    let speedUp = false;  // Track if user is trying to speed up
    document.body.style.overflow = 'hidden';
    document.querySelector('.content').style.transition = 'min-height 0s ease';
    document.querySelector('.content').style.minHeight = '100vh';

    // Add temporary scroll padding to make page scrollable

    // Ensure the target element exists
    if (!targetElement) {
        console.error("Element with id 'type-js' not found.");
        return;
    }

    // Typing function
    function typeText() {
        if (letter < text.length) {
            let currentChar = text.charAt(letter);

            if (currentChar === '\n') {
                targetElement.innerHTML += '<br>';
            } else {
                targetElement.innerHTML += currentChar;
            }

            letter++;

            let speed;
            if (currentChar === '.' || currentChar === ',') {
                speed = speedUp ? Math.floor(Math.random() * 5) + 20 : Math.floor(Math.random() * 30) + 100;
            } else if (currentChar === '\n') {
                speed = speedUp ? 30 : 100;
            } else {
                speed = speedUp ? Math.floor(Math.random() * 2) + 10 : Math.floor(Math.random() * 50) + typingSpeed;
            }

            setTimeout(typeText, speed);
        } else {
            targetElement.style.color = "#6DBA83";
            setTimeout(() => {
                targetElement.classList.add('fade-out');
                setTimeout(() => {
                    targetElement.style.display = 'none';
                    hiddenContent.style.display = 'flex';
                    hiddenContent.style.flexDirection = 'column';
                    logo.classList.add('fade-in');

                    // Add fade-out for the logo after a delay
                    setTimeout(() => {
                        logo.classList.remove('fade-in'); // Remove fade-in to avoid conflicts
                        logo.classList.add('fade-out');
                        setTimeout(() => {
                            logo.style.display = 'none'; // Hide logo after fade-out
                            document.body.style.overflow = '';
                            document.querySelector('.content').style.transition = 'min-height 2s ease';
                            document.querySelector('.content').style.minHeight = '20vh';
                        }, speedUp ? 0 : 1000); // Duration of logo fade-out
                    }, speedUp ? 500 : 2000); // Delay before logo starts fading out
                }, speedUp ? 0 : 1000);
            }, speedUp ? 500 : 1000);
        }
    }

    // Start the typing animation
    setTimeout(typeText, 500);

    // Use both scroll and wheel events to detect user's attempt to speed up
    function enableSpeedUp() {
        if (!speedUp) {
            speedUp = true;
        }
    }

    // Listen for scroll and wheel events
    // window.addEventListener('scroll', enableSpeedUp);
    window.addEventListener('wheel', enableSpeedUp);

    let clientY;

    window.addEventListener(
        "touchstart",
        (e) => {
            // Cache the initial Y-coordinate
            clientY = e.touches[0].clientY;
        },
        false
    );

    window.addEventListener(
        "touchend",
        (e) => {
            let deltaY;

            // Calculate the change in Y-coordinate
            deltaY = e.changedTouches[0].clientY - clientY;

            // If there's a significant vertical movement, activate the speedup
            if (Math.abs(deltaY) > 50) { // Adjust the threshold as needed
                enableSpeedUp();
            }
        },
        false
    );
});

