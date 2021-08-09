$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 30,
        randomStart: true,
        captions: true,
        pause: 3000,
        pagerType: 'short'
    });
});