const texto = document.querySelector('.content p');
const frase = "Seja a luz que ilumina o caminho de alguém em tempos difíceis; sua generosidade é a chave para isso. Junte-se a nós apoiando aqueles que mais precisam.";
let i = 0;
texto.style.textAlign = 'center';
texto.style.fontSize = '30px';
texto.style.fontWeight = 'bold';

const button = document.querySelector('.cta-button');

function typing() {
  texto.textContent += frase[i];
  i++;
  if (i < frase.length) {
    setTimeout(typing, 30);
  } else {
    button.classList.add('visible');
  }
}

document.addEventListener('DOMContentLoaded', typing);
