$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easy-in',
        infinite: true,
        initialSlide:0,
        autoplay: false,
        autoplaySpeed:2000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,              // Отвечает за передвижение слайда пальцем
        waitForAnimate: true,         // Насколько быстро ты можешь перелистывать слайд
        centerMode: true,            // Первая картинка явл. центральной
         fade: true,
         cssEase: 'linear',
         
    });
});

$(document).ready(function(){
    $('.slider-1').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'easy-in',
        infinite: true,
        initialSlide:0,
        autoplay: false,
        autoplaySpeed:2000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,              // Отвечает за передвижение слайда пальцем
        waitForAnimate: true,         // Насколько быстро ты можешь перелистывать слайд
        centerMode: true,            // Первая картинка явл. центральной
        //  fade: true,
        //  cssEase: 'linear',
         
    });
});