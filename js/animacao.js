document.addEventListener("DOMContentLoaded", function() {
    const animationElements = document.querySelectorAll(".eventos-ima");
    const hometext = document.querySelectorAll(".home-text");
    const hometext2 = document.querySelectorAll(".home-text2");
    const cultos = document.querySelectorAll(".cultos-i");
    const contribuir = document.querySelectorAll(".contribuir");

    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }

    function animateOnScroll() {
        animationElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate");
            }
        });
        hometext.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate");
            }
        });
        hometext2.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate");
            }
        });
        cultos.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate");
            }
        });
        contribuir.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate");
            }
        });
        
    }

    window.addEventListener("scroll", animateOnScroll);
});
