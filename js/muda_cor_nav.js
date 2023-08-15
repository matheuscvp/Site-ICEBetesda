const menu = document.querySelector('ul');
const logo = document.querySelector('.logo');
const navBar = document.querySelector('#nav-bar');
const menuMobile = document.querySelector(".mobile_menu");


function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
    logo.classList.toggle('ativo', scrollY > 0);
    navBar.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);