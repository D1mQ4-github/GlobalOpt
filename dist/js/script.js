$(document).ready(() => {
    $('.hamburger').click(() => {
        $('.header__nav').toggleClass('header__nav-active');
    });

    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});