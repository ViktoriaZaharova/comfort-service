$('.trust-us__slider').slick({
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
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

$('.about-page__slider').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    fade: true
});

$('.reviews-wrapper__slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.certificates-slider').slick({
    slidesToShow: 6,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.result-work-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.clients-reviews-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false,
            }
        }
    ]
});

$('.type-window__item').click(function () {
   $(this).toggleClass('active');
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.staff-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            fade: true
        });

        $('.video-reviews-my-slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            fade: true
        });

        $('.example-price-wrapper:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: true,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            fade: true
        });
    } else {
        $(".staff-slider.slick-initialized").slick("unslick");
        $(".video-reviews-my-slider.slick-initialized").slick("unslick");
        $(".example-price-wrapper.slick-initialized").slick("unslick");
    }
});
// slick active