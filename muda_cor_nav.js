const menu = document.querySelector('ul');
const logo = document.querySelector('.logo');
const navBar = document.querySelector('#nav-bar');
const menuMobile = document.querySelector(".mobile_menu");
const hometext = document.querySelector(".home-text");
const hometext2 = document.querySelector(".home-text2")
const eventima = document.querySelector(".eventos-ima");
const cultosi = document.querySelector(".cultos-i");
const cultos = document.querySelector(".culto");
const contribuir = document.querySelector(".contribuir");




function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
    logo.classList.toggle('ativo', scrollY > 0);
    navBar.classList.toggle('ativo', scrollY > 0);
    hometext.classList.toggle('ativo',scrollY > 0);
    hometext2.classList.toggle('ativo',scrollY > 1600);
    eventima.classList.toggle('ativo',scrollY > 800);
    cultosi.classList.toggle('ativo',scrollY > 2200);
    cultos.classList.toggle('ativo',scrollY > 2300);
    contribuir.classList.toggle('ativo',scrollY > 2300);
}

window.addEventListener('scroll', activeScroll);