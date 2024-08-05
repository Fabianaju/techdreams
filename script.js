// script.js

// Animação de Partículas
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Efeito de Digitação
const typedText = document.getElementById('typed-text');
const texts = ["Inovação", "Tecnologia", "Soluções Futuristas"];
let currentTextIndex = 0;
let currentCharIndex = 0;

function type() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        typedText.innerHTML += texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        typedText.innerHTML = texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 100);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 200);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, 1000);
});
