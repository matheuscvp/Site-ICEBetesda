const todosOsMais = document.querySelectorAll('.mais');
const todosOsTextos = document.querySelectorAll('.texto');
const todosOsLine7 = document.querySelectorAll('.line7');

todosOsMais.forEach((mais, index) => {
    let clicado = false;
    mais.addEventListener("click", () => {
        if (!clicado) {
            todosOsTextos[index].classList.add('animada');
            todosOsLine7[index].classList.add('animada');
        } else {
            todosOsTextos[index].classList.remove('animada');
            todosOsLine7[index].classList.remove('animada');
        }

        clicado = !clicado;
    });
});



