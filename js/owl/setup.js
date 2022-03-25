$('.owl-carousel').owlCarousel({
    loop:true,/*define se quando acabar o carrocel continua ou para*/
    margin:10,/*margin entre as imagens*/
    nav:false,/*a propriedade nav define se quer a seta no carrocelou não*/
    responsive:{
        0:{/*quando tiver 0 pixel ela cabera  1 items na tela*/
            items:1
        },
        580:{item :1},
        600:{/*quando tiver 600 pixel ela cabera  3 items na tela*/
            items:3
        },
        1000:{/*quando tiver 1000 pixel ela cabera  5 items na tela*/
            items:5
        }
    }
})