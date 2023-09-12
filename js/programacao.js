document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const anteriorBotao = document.getElementById('anterior');
    const proximoBotao = document.getElementById('proximo');
    let virarCartao = false;

    const imagens = [
        {
            front: 'imagens/Fotos/calendario/Domingo.png',
            back: 'imagens/Fundos/Raw Photo.jpg'
        },
        {
            front: 'imagens/Fundos/fundo_ket.jpg',
            back: 'imagens/Fundos/fotoPGS.jpg'
        },
        {
            front: 'imagens/Fundos/fotoPGS.jpg',
            back: 'imagens/Fundos/fundo_ket.jpg'
        }
        // Adicione mais imagens conforme necessário
    ];

    let currentImageIndex = 0;

    function trocarImagens() {
        const currentImage = imagens[currentImageIndex];
        if (!virarCartao) {
            card.style.transform = 'rotateY(180deg)';
            card.querySelector('.card-front img').src = currentImage.back;
        } else {
            card.style.transform = 'rotateY(0deg)';
            card.querySelector('.card-front img').src = currentImage.front;
        }
        virarCartao = !virarCartao;
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
            currentImageIndex = 0;
        }
        trocarImagens();
    }

    anteriorBotao.addEventListener('click', slideAnterior);
    proximoBotao.addEventListener('click', proximoSlide);
});



