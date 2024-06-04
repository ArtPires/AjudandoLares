const texto = document.querySelector('.content p');
const part1 = "Seja a luz que ilumina o caminho de alguém em tempos difíceis, sua generosidade é a chave para isso.";
const part2 = "Junte-se a nós apoiando aqueles que mais precisam.";
const texto1 = document.getElementById('part1');
const texto2 = document.getElementById('part2');
const button = document.querySelector('.cta-button');

let i = 0;
let j = 0;

function typing1() {
    if (i < part1.length) {
        texto1.textContent += part1[i];
        i++;
        setTimeout(typing1, 25);
    } else {
        typing2();
    }
}

function typing2() {
    if (j < part2.length) {
        texto2.textContent += part2[j];
        j++;
        setTimeout(typing2, 25);
    } else {
        button.classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', typing1);
