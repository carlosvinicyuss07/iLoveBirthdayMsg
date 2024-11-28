const box = document.querySelector('.fotos');
const imagens = document.querySelectorAll('.fotos img');

let contador = 0;

function slider() {
    const offset = -contador * 100;
    box.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    contador = (contador + 1) % imagens.length;
    slider();
}, 3000);