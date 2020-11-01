$('.trust-us__slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
});

$('.portfolio-slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    fade: true
});

$('.reasons-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    infinite: false,
    appendDots: '.reasons-slider__nav'
});
