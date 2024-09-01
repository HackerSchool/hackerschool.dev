document.addEventListener("DOMContentLoaded", function () {
    let letter = 0;
    const text = "Saudações. Bem vindo à HackerSchool.\n\nMais texto mimimimi\nmimimimimimimimimimimimimimimimimimi\n\nmimimimimimimimimimimimimimimimimimimimimimimi";
    
    function typeText() {
        if (letter < text.length) {
            let currentChar = text.charAt(letter);
            
            // Verifica se o caractere atual é uma nova linha
            if (currentChar === '\n') {
                document.getElementById("type-js").innerHTML += '<br>'; // Insere uma quebra de linha no HTML
            } else {
                document.getElementById("type-js").innerHTML += currentChar;
            }
            
            letter++;

            let speed;

            if (currentChar === '.') {
                speed = Math.floor(Math.random() * 20) + 50;
            } else if (currentChar === '\n') {
                speed = 250;
            } else {
                speed = Math.floor(Math.random() * 5) + 50;
            }

            setTimeout(typeText, speed);
        }
    }

    setTimeout(typeText, 500);
});