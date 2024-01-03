document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const anteriorBotao = document.getElementById('anterior');
    const proximoBotao = document.getElementById('proximo');
    let virarCartao = true;

    const imagens = [
        
        {
            front: 'imagens/Fotos/calendario/Segunda.png',
            back: 'imagens/Fotos/calendario/Segunda.png'
        },
        {
            front: 'imagens/Fotos/calendario/Terca.png',
            back: 'imagens/Fotos/calendario/Terca.png'
        },
        {
            front: 'imagens/Fotos/calendario/Quarta.png',
            back: 'imagens/Fotos/calendario/Quarta.png'
        },
        {
            front: 'imagens/Fotos/calendario/Quinta.png',
            back: 'imagens/Fotos/calendario/Quinta.png'
        },
        {
            front: 'imagens/Fotos/calendario/Sexta.png',
            back: 'imagens/Fotos/calendario/Sexta.png'
        },
        {
            front: 'imagens/Fotos/calendario/Sabado.png',
            back: 'imagens/Fotos/calendario/Sabado.png'
        },
        {
            front: 'imagens/Fotos/calendario/Domingo.png',
            back: 'imagens/Fotos/calendario/Domingo.png'
        },
        // Adicione mais imagens conforme necessário
    ];

    let currentImageIndex = -1;

    function trocarImagens() {
        const currentImage = imagens[currentImageIndex];
        card.style.transition = 'transform 0.5s ease-in-out'; // Adiciona uma transição suave
    
        card.style.transform = 'rotateY(90deg)';
        card.addEventListener('transitionend', function rotateBack() {
            card.querySelector('.card-front img').src = currentImage.front;
            card.querySelector('.card-back img').src = currentImage.back;
    
            card.style.transform = 'rotateY(0deg)';
            card.removeEventListener('transitionend', rotateBack);
        });
    }
    
    
    
    

    function slideAnterior() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = imagens.length - 1;
        }
        trocarImagens();
    }

    function proximoSlide() {
        currentImageIndex++;
        if (currentImageIndex >= imagens.length) {
            currentImageIndex =0;
        }
        trocarImagens();
    }

    anteriorBotao.addEventListener('click', slideAnterior);
    proximoBotao.addEventListener('click', proximoSlide);
});



