document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile_menu");
  const navigation = document.getElementById("navegação");
  const logo = document.querySelector(".logo img");
  const navItems = navigation.querySelectorAll("li.nav");

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      navigation.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });

  mobileMenu.addEventListener("click", function () {
    navigation.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
