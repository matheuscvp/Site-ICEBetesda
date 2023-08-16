document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu2 = document.querySelector(".mobile_menu2");
    const info = document.querySelector(".info");
    const esquerda = document.querySelector(".esquerda");
    const direita = document.querySelector(".direita");


  
    mobileMenu2.addEventListener("click", function () {
      mobileMenu2.classList.toggle("active");
      esquerda.classList.toggle("active");
      direita.classList.toggle("active");
    });
});
  