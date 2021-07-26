// -----------------------------------------------------------------------------
// This file contains all main js.
// -----------------------------------------------------------------------------

$(document).ready(function() {
    $('.autoplay-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    // $('.journey-slick').slick({
    //     slidesToScroll: 1,
    //     slidesToShow: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     infinite: true,
    //     dots: true,
    //     focusOnSelect: true,
    //     arrows: true,
    //     customPaging: function(slider, i) { 
    //         return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '<i class="fa fa-sort-asc"></i></button>';
    //     },
    // });


    $('.slider-for-journey').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav-journey'
    });

    $('.slider-nav-journey').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for-journey',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    AOS.init();
});