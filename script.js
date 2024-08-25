$(document).ready(function(){
    // Inicializa o slick-carousel
    var $gallery = $('.gallery').slick({
        dots: false,  // Oculta os botões indicadores (bolinhas)
        autoplay: true,  // Habilita a rotação automática
        autoplaySpeed: 2000,  // Tempo de espera entre cada slide (2 segundos)
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });

    // Função para destruir o carousel em telas pequenas
    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 768) {
            if ($gallery.hasClass('slick-initialized')) {
                $gallery.slick('unslick'); // Desativa o carousel
            }
        } else {
            if (!$gallery.hasClass('slick-initialized')) {
                $gallery.slick({
                    dots: false,  // Oculta os botões indicadores
                    autoplay: true,
                    autoplaySpeed: 2000,
                    prevArrow: $('.slick-prev'),
                    nextArrow: $('.slick-next')
                });
            }
        }
    }

    // Verifica o tamanho da janela ao carregar a página
    checkWidth();
    
    // Verifica o tamanho da janela ao redimensionar
    $(window).resize(checkWidth);
});
