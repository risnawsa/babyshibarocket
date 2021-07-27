// -----------------------------------------------------------------------------
// This file contains all main js.
// -----------------------------------------------------------------------------

$(document).ready(function() {
    /********************************/
    /*Header*/
    /********************************/
    var mxHght = $(window).height();
    var hgtHeader = $('#header-shiba').height();
    var content_ft = mxHght-hgtHeader;
    $('#shiba-ft-ct').css({
        'height': content_ft,
        'margin-top': hgtHeader
    });
    var logobabyshiba = content_ft-230;
    $('#logobabyshiba').css({
        'padding-top': logobabyshiba
    });

    if (window.matchMedia('(max-height: 600px)').matches) {
        $('#shiba-ft-ct').css({
            'height': '500px',
            'margin-top': hgtHeader
        });
        var logobabyshibaxs = $('#shiba-ft-ct').height();
        var logobabyshiba1 = logobabyshibaxs-130;
        $('#logobabyshiba').css({
            'padding-top': logobabyshiba1
        });
    }

    if (window.matchMedia('(max-width: 991px) and (max-height: 450px)').matches) {
        var mainlogo = $('#mainlogo').height();
        var totalhgmobile = mxHght - (mainlogo+50);
        $('#navbarSupportedContent').css({
            'max-height': totalhgmobile,
            'overflow-y': 'auto'
        });
    }

    /********************************/
    /*scroll page*/
    /********************************/
    function scrollToAnchor(aid){
        var aTag = $(".section-scroll[name='"+ aid +"']");
        $('html,body').animate(
            { scrollTop: aTag.offset().top-70 }
        ,'slow');
    }

    $('#btn-shiba-ft-ct').click(function() {
        scrollToAnchor('shiba-ft-ct');
    });
    $("#btn-feature-shiba").click(function() {
        var aTag = $(".section-scroll[name=feature-shiba]");
        $('html,body').animate(
            { scrollTop: aTag.offset().top+20 }
        ,'slow');
    });
    $('#btn-tokenomics-shiba').click(function() {
        scrollToAnchor('tokenomics-shiba');
    });
    $("#btn-rocketmaps-shiba").click(function() {
        scrollToAnchor('rocketmaps-shiba');
    });
    $('#btn-htb-shiba').click(function() {
        scrollToAnchor('htb-shiba');
    });
    $("#btn-team-shibaa").click(function() {
        scrollToAnchor('team-shibaa');
    });

    /********************************/
    /*slick slider*/
    /********************************/
    $('.slider-nd-top').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slick-rd-shiba').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slick-fth-shiba').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                centerPadding: '60px',
            }
          },
          {
            breakpoint: 576,
            settings: {
                centerPadding: '20px',
            }
          }
        ]
      });
});