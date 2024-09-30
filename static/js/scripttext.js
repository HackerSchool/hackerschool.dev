document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = "HackerSaudações. Estávamos à tua espera."; //Damos-te as boas vindas ao site da HackerSchool.

    const targetElement = document.getElementById("type-js");
    const hiddenContent = document.getElementById("hidden-content");
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
            targetElement.style.color = "#6DBA83"; //por uma questão de coerência de cor?
            // Animation complete: make the page scrollable and show hidden content
            // Trigger the fade-out after turning green
            setTimeout(() => {
                targetElement.classList.add('fade-out');
                setTimeout(() => {
                    targetElement.style.display = 'none'; // Hide the text after fade-out
                    document.getElementById('logo').classList.add('fade-in'); // Display the logo

                    hiddenContent.style.display = 'flex'; // Reveal hidden content
                    hiddenContent.style.flexDirection = 'column'; // Reveal hidden content
                    document.body.style.overflow = '';
                    setTimeout(() => {
                        document.querySelector('.content').style.transition = 'min-height 2s ease';
                        document.querySelector('.content').style.minHeight = '20vh';

                    }, speedUp? 0: 3000);


                }, speedUp? 0:1000); // Wait for 1 second before starting the fade-out
            }, speedUp? 500 :1000); // Wait for 1 second of green color before fading out
            // document.body.style.height = 'auto'; // Remove temporary height

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

