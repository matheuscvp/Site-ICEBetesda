const bola = document.querySelector('.bola');
const bola1 = document.querySelector('.bola1');
const bola2 = document.querySelector('.bola2');
const bola3 = document.querySelector('.bola3');

const infop = document.querySelector('.infop');
const infop1 = document.querySelector('.infop1');
const infop2= document.querySelector('.infop2');
const infop3 = document.querySelector('.infop3');

bola.addEventListener("mouseenter", () => {
    infop.classList.add('animada');
});
bola1.addEventListener("mouseenter", () => {
    infop1.classList.add('animada');
});
bola2.addEventListener("mouseenter", () => {
    infop2.classList.add('animada');
});
bola3.addEventListener("mouseenter", () => {
    infop3.classList.add('animada');
});

bola.addEventListener("mouseleave", () => {
    infop.classList.remove('animada');
});
bola1.addEventListener("mouseleave", () => {
    infop1.classList.remove('animada');
});
bola2.addEventListener("mouseleave", () => {
    infop2.classList.remove('animada');
});
bola3.addEventListener("mouseleave", () => {
    infop3.classList.remove('animada');
});
