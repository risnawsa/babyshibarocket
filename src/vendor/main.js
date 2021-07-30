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
        'height': content_ft+30,
        'margin-top': hgtHeader
    });
    var logobabyshiba = content_ft-220;
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

    if (window.matchMedia('(max-width: 768px)').matches) {
        $('#add-animate1').attr({
            'data-aos': 'fade-right'
        });
        $('#add-animate2').attr({
            'data-aos': 'fade-left'
        });
        $('#add-animate3').attr({
            'data-aos': 'fade-right'
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
    /*One Scroll Page*/
    /********************************/
    function scrollToAnchor(aid){
        var aTag = $(".section-scroll[name='"+ aid +"']");
        $('html,body').animate(
            { scrollTop: aTag.offset().top-70 }
        ,'slow');
    }

    function addClassOnScroll () {
        var windowTop = $(window).scrollTop();
        $('.section-scroll[id]').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);
    
            if( windowTop > (offsetTop - 100) && windowTop < ( offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                $(".nav-link").parent().siblings().removeClass('active');
                $(".nav-link[data-target='#" + elemId + "']").parent().addClass('active');
            }
        });
    };

    $('#btn-shiba-ft-ct').click(function() {
        scrollToAnchor('shiba-ft-ct');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-shiba-ft-ct').on('click', addClassOnScroll);
    if($('#btn-shiba-ft-ct').parent().hasClass('active')){
        $('#btn-shiba-ft-ct').parent().siblings().removeClass('active');
    }

    $("#btn-feature-shiba").click(function() {
        var aTag = $(".section-scroll[name=feature-shiba]");
        $('html,body').animate(
            { scrollTop: aTag.offset().top+20 }
        ,'slow');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-feature-shiba').on('click', addClassOnScroll);

    $('#btn-tokenomics-shiba').click(function() {
        scrollToAnchor('tokenomics-shiba');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-tokenomics-shiba').on('click', addClassOnScroll);
    
    $("#btn-rocketmaps-shiba").click(function() {
        scrollToAnchor('rocketmaps-shiba');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-rocketmaps-shiba').on('click', addClassOnScroll);
    
    $('#btn-htb-shiba').click(function() {
        scrollToAnchor('htb-shiba');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-htb-shiba').on('click', addClassOnScroll);
    
    $("#btn-team-shibaa").click(function() {
        scrollToAnchor('team-shibaa');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#btn-team-shibaa').on('click', addClassOnScroll);
    
    $(window).on('scroll', function () {
        addClassOnScroll();
    });

    /********************************/
    /*slick slider*/
    /********************************/
    $('.slider-nd-top').on('init', function (slick) {
        $('.top-ct-nd').removeClass('slider-lazy');
    });

    $('.slider-nd-top').on('lazyLoaded', function(event, slick, image, imageSource){
        var img = new Image(),
            src = imageSource,
            ele = $(image).parent(),
            parent = ele.parent();
        image.remove();
        img.onload = function() {
            ele.css("background-image", "url('"+src+"')");
            ele.addClass('loaded');
        }
        img.src = src;
    });

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

    $('.slick-rd-shiba').on('init', function (slick) {
        $('.secndslider').removeClass('slider-lazy');
    });

    $('.slick-rd-shiba').on('lazyLoaded', function(event, slick, image, imageSource){
        var img = new Image(),
            src = imageSource,
            ele = $(image).parent(),
            parent = ele.parent();
        image.remove();
        img.onload = function() {
            ele.css("background-image", "url('"+src+"')");
            ele.addClass('loaded');
        }
        img.src = src;
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
        arrows: true,
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
                centerPadding: '0',
                centerMode: false,
            }
          }
        ]
    });

    /********************************/
    /*Global Clipboard Copy*/
    /********************************/
    function setToggle(id) {
        $("#copyclip-cp"+id).slideDown();
    }

    function hideToggle(id) {
        setTimeout(function() {
            $('#copyclip-cp'+id).slideUp();
        }, 1200);
    }
    
    var clp = new ClipboardJS('#copy-contract');
    clp.on('success', function(e) {
        setToggle($(e.trigger).data('target'));
        hideToggle($(e.trigger).data('target'));
    });
});