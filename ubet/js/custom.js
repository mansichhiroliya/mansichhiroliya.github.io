function openCity(evt, cityName) {
    $('.tab_item').hide();
    $('#' + cityName).show();
    
}
$('.promotion ul li a').click(function(){
    $('.promotion ul li').removeClass('active');
    $(this).parent(".promotion_inner ul li").addClass('active');
});
$('.tab-content').hide();
$('#new').show();
$('.game_box .nav > li > a').click(function () {
    $('.game_box .nav > li').removeClass('active');
    $(this).parent().addClass('active');
    $('.tab-content').hide();
    $('#' + $(this).data('toggle')).fadeIn();
});
$(".festival_detail .details .more").click(function () {
    if ($(this).hasClass('active')) {
        $(".festival_detail .details .more").removeClass("active");
        $(".festival_img").removeClass("back_color");
        $(".festival").next(".term").slideUp();
    } else {
        $(".festival_img").removeClass("back_color");
        $(this).parents(".festival").children('div').children(".festival_img").addClass("back_color");
        $(this).addClass("active");
        $(".festival").next(".term").slideUp();
        $(this).parents(".festival").next(".term").slideDown();
    }
});
function openCity1(evt, cityName) {
    $('.tab_item').hide();
    $('#' + cityName).show();
}
$(document).ready(function () {
    $('select').niceSelect();
});
$(".login .modal-body .form-control").focusin(function () {
    $(".login .modal-body label").css("opacity", "1");
});
$(".login .modal-body .form-control").focusout(function () {
    $(".login .modal-body label").css("opacity", "0");
});
$(".tabs ul li a").click(function () {
    $(".tabs ul li").removeClass('active');
    $(this).parent("li").addClass('active');
    $(".tabs ul li").removeClass("bg_color");
    $(this).parent(".tabs ul li").addClass("bg_color");
    $(".tabs ul li a span").removeClass("cssadd");
    $(this).children(".tabs ul li a span").addClass("cssadd");
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});
$('.slickslider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
//    responsive: [
//        {
//            breakpoint: 767,
//            settings: {
//                slidesToShow: 2,
//                
//            }
//        }]
});
$('.slidebonus').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
//    responsive: [
//        {
//            breakpoint: 767,
//            settings: {
//                slidesToShow: 2,
//                
//            }
//        }]
});
$('.slick_sports').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 6,
    adaptiveHeight: true,
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
            breakpoint: 561,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,

            }
        }

    ]
});
$('.slot_slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    //    responsive: [
    //        {
    //            breakpoint: 767,
    //            settings: {
    //                slidesToShow: 2,
    //                
    //            }
    //        }]
});
$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    } else {
        var id = $(this).data('id');

        $('.tab').find('span').removeClass('color');
        $(this).find('span').addClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs').slideUp();
        $('#tab' + id).slideDown();
    }
});