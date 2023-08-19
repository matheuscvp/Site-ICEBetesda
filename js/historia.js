const galery = document.querySelector('.galery');
const images = document.querySelectorAll('.principal img');
const pageIndicators = document.querySelector('.page-indicators');
let isGoingLeft = true;
let currentPageIndex = 0;


// Calcula o número de páginas com base no número de imagens
const numPages = 3;

// Cria os indicadores de página
for (let i = 0; i < numPages; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('page-indicator');
    indicator.dataset.pageIndex = i;
    pageIndicators.appendChild(indicator);
}

const pageIndicatorsList = document.querySelectorAll('.page-indicator');

function updatePageIndicators() {
    pageIndicatorsList.forEach((indicator, index) => {
        if (index === currentPageIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function calculateCurrentPage() {
    const scrollY = galery.scrollTop;
    const pageHeight = galery.clientHeight;
    const pageIndex = Math.floor((scrollY + pageHeight / 2) / pageHeight);
    return pageIndex;
}


galery.addEventListener('scroll', () => {
    const scrollY = galery.scrollTop;
    

    if (isGoingLeft) {
        images.forEach(image => {
            const angle = scrollY * 1; // Ajuste a velocidade de rotação
            const translateY = scrollY * 1; // Ajuste a velocidade de descida
            const translateX = scrollY * -1.5; // Ajuste a velocidade de mudança de posição para a direita após passar de 300
            image.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${angle}deg)`;
        });
    } else {
        const angle = scrollY * 1; // Ajuste a velocidade de rotação
        const translateY = scrollY * 1; // Ajuste a velocidade de descida
        const translateX = (scrollY - 1000) * 1; // Ajuste a velocidade de mudança de posição para a direita após passar de 300
        images.forEach(image => {
            image.style.transform = `translate(${translateX}px, ${translateY}px) rotateX(${angle}deg)`;
        });
    }

    if (scrollY >= 400) {
        isGoingLeft = false;
    } else {
        isGoingLeft = true;
    }
});


// Evento de rolagem da galeria
galery.addEventListener('scroll', () => {
    const scrollY = galery.scrollTop;
    const pageIndex = calculateCurrentPage();

    if (pageIndex !== currentPageIndex) {
        currentPageIndex = pageIndex;
        updatePageIndicators();
    }

    updateGalleryPosition(scrollY);
});

updatePageIndicators();
updateGalleryPosition(0);







