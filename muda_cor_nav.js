const menu = document.querySelector('ul');
const logo = document.querySelector('.logo img');
const navBar = document.querySelector('#nav-bar');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
    logo.classList.toggle('ativo', scrollY > 0);
    navBar.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);