const galery = document.querySelector('.galery');
const images = document.querySelectorAll('.principal img');
const pageIndicators = document.querySelector('.page-indicators');
const container = document.querySelector('.container');
const div = document.querySelector('.principal');
let isGoingLeft = true;
let currentPageIndex = 0;
let lastScrollTop = 0;

// Calcula o número de páginas com base no número de imagens
const numPages = 4;

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
    const pageIndex = calculateCurrentPage();
    const alt = div.offsetHeight;
    const divTop = div.getBoundingClientRect().top;
    const divBottom = div.getBoundingClientRect().bottom;
    const pi = (calculateCurrentPage()%2);
    const meio = (alt/2);
    var h = alt*pageIndex;

    const altm1 = alt;
    const altm2 = 2*alt;

    if ((pageIndex !=0 || pageIndex !=3) && (scrollY >= altm1 && scrollY <= altm2)) {
        isGoingLeft = false;

    } else {
        isGoingLeft = true;
    }

    lastScrollTop = scrollY;
    

    images.forEach(image => {
        
        if (scrollY >= 2.78*alt) {
        }else{
            if(isGoingLeft){
                
                
                
                if(scrollY<=(altm2)){
                    const angle = scrollY * 1; // Ajuste a velocidade de rotação
                    const translateY = scrollY * 1; // Ajuste a velocidade de descida
                    const translateX = scrollY*-1.1; 

                    image.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${angle}deg)`;

                }else{

                    const angle = scrollY * 1; // Ajuste a velocidade de rotação
                    const translateY = scrollY * 1; // Ajuste a velocidade de descida
                    const translateX = (scrollY-1181)*-1.1; 

                    console.log(scrollY)

                    image.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${angle}deg)`;
    
                }



            }else{
                const angle = scrollY * 1; // Ajuste a velocidade de rotação
                const translateY = scrollY * 1; // Ajuste a velocidade de descida
                const translateX = (scrollY-(2*alt)) * 1; 

                
                

                image.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${angle}deg)`;

            }
        }

        
    });

    if (scrollY >= pageIndex * galery.clientHeight) {
        currentPageIndex = pageIndex;
        updatePageIndicators();
    }
});

updatePageIndicators();

// Calcule a posição dos indicadores de página com base na posição da galeria
function updatePageIndicatorPosition() {
    const galeryRect = galery.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const topOffset = 300; // Ajuste conforme necessário

    pageIndicators.style.top = galeryRect.top - containerRect.top + topOffset + 'px';
}

// Atualize a posição inicial dos indicadores
updatePageIndicatorPosition();

// Atualize a posição dos indicadores quando a galeria for rolada
galery.addEventListener('scroll', updatePageIndicatorPosition);
