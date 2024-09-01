const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

// Array para armazenar o tempo de atraso para cada coluna
const delays = Array.from({ length: columns }).map(() => Math.random() * 100);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        // Só começar a desenhar a coluna depois que o atraso tiver passado
        if (delays[i] > 0) {
            delays[i]--; // Decrementa o atraso
            continue;    // Pula a coluna até que o atraso seja 0
        }

        const text = letters[Math.floor(Math.random() * letters.length)];

        // Calcular a opacidade com base na posição X da letra
        const xPos = i * fontSize;
        const canvasMid = canvas.width / 2;
        let opacity;

        if (xPos <= canvasMid) {
            // Opacidade de 0 (meio) a 1 (bordas)
            opacity = 1 - (xPos / canvasMid);
        } else {
            // Opacidade de 0 (meio) a 1 (bordas)
            opacity = (xPos - canvasMid) / canvasMid;
        }

        // Definir a cor com a opacidade calculada
        ctx.fillStyle = `rgba(10, 255, 10, ${opacity})`;
        ctx.fillText(text, xPos, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
            delays[i] = Math.random() * 100; // Reinicia o atraso quando a coluna reseta
        }

        drops[i]++;
    }
}

// Iniciar o intervalo de animação após 3 segundos
setTimeout(() => {
    setInterval(draw, 33);
}, 1000);
