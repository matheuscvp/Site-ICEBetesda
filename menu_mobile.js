document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile_menu");
    const navigation = document.getElementById("navegação");
  
    mobileMenu.addEventListener("click", function () {
      navigation.classList.toggle("active");
    });
  });