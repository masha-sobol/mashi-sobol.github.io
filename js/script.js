$(document).ready(function(){
    $('.popular__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.svg"></button>',
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1320,
              settings: {
                slidesToShow: 3,
                arrows: false
              }
            },
            {
              breakpoint: 375,
              settings: "unslick"
            }
        ]
    });
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

new WOW().init();

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header__mobile'),
      closeElem = document.querySelector('.header__mobile-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('header__mobile_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('header__mobile_active');
});