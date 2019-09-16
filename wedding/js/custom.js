
//   $('.popup__close, .popup__overlay').click(function() {
//     $('.popup__overlay').fadeOut();
//     $('body').css("overflow-y","auto");
//   })
  
//   $(document).on("click", "a.popup__close, div.popup__overlay", function() {
//        $('.video').remove();
//    });
$('.popup').on('hide.bs.modal', function(e) {    
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});

$('.sidenav a').click(function () {
    $('#mySidenav').css('left', '-190px');
    $('.hamburger').removeClass('is-active')
});
$('.story').click(function () {
    $('html,body').animate({
        scrollTop: $('.ourstory ').offset().top - 90
    }, 1000)
});
$('.schedu').click(function () {
    $('html,body').animate({
        scrollTop: $('.schedule ').offset().top - 90
    }, 1000)
});
$('.dir').click(function () {
    $('html,body').animate({
        scrollTop: $('.direction ').offset().top - 90
    }, 1000)
});
$('.hotel').click(function () {
    $('html,body').animate({
        scrollTop: $('.slider_out ').offset().top - 150
    }, 1000)
});
$('.activ').click(function () {
    $('html,body').animate({
        scrollTop: $('.activities ').offset().top - 150
    }, 1000)
});
$('.gift').click(function () {
    $('html,body').animate({
        scrollTop: $('.gifts ').offset().top + 150
    }, 1000)
});
$('.innerrspv').click(function () {
    $('html,body').animate({
        scrollTop: $('.wine ').offset().top - 90
    }, 1000)
});
$(document).ready(function () {
    $(".accordion").on("click", ".heading", function () {

        $(this).toggleClass("active").next().slideToggle();

        $(".contents").not($(this).next()).slideUp(300);

        $(this).siblings().removeClass("active");
    });
});

$('.comCheck label').click(function () {
    $('.comCheck label span').css("color", "#253178");
    $(this).children('span').css("color", "#fff");
});



$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    }
    else {
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
    }
    else {
        $('#mySidenav').css('left', '-190px');
    }
});
$('.slick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,

            }
        }]
});
$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    }
    else {
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

$('.navigation li a').click(function () {
    $('.navigation li a').removeClass('active');
    $(this).addClass('active');
});

$(window).load(function() {
   $('.dnSlide-list li a img.item1').after('<div class="slider_para boxs"><p>Bastide de tourtour <span><i>150<img src="img/euros.png"></i><i>30<img src="img/time.png"></i></span></p></div>');
});
$(window).load(function() {
    $('.dnSlide-list li a img.item2').after('<div class="slider_para boxs"><p>Bastide de tourtour <span><i>150<img src="img/euros.png"></i><i>30<img src="img/time.png"></i></span></p></div>');
 });
 $(window).load(function() {
    $('.dnSlide-list li a img.item3').after('<div class="slider_para boxs"><p>Bastide de tourtour <span><i>150<img src="img/euros.png"></i><i>30<img src="img/time.png"></i></span></p></div>');
 });
 $(window).load(function() {
    $('.dnSlide-list li a img.item4').after('<div class="slider_para boxs"><p>Bastide de tourtour <span><i>150<img src="img/euros.png"></i><i>30<img src="img/time.png"></i></span></p></div>');
 });
 $(window).load(function() {
    $('.dnSlide-list li a img.item5').after('<div class="slider_para boxs"><p>Bastide de tourtour <span><i>150<img src="img/euros.png"></i><i>30<img src="img/time.png"></i></span></p></div>');
 });

$('.slider_anchor li a').click(function() {
    var tabId = $(this).attr('data-tag');
    $('.comm_tab').addClass('hide_tab');
    $('#'+tabId).removeClass('hide_tab');

   });

   $('.slider_anchor li a').click(function() {
    $('.slider_anchor li a').removeClass('active');
    $(this).addClass('active');  
   });

   $('.town li a').click(function() {
    $('.town li a').removeClass('active');
    $(this).addClass('active');
   });

   $(window).on('load',function() {
    $('.airBnb').addClass('hide_tab');
    $('.bed_break').addClass('hide_tab');
   });

   $('.movesA').hide();
   $('.movesa').show();
   $('.town ul li a').click(function () {
       var type = $(this).data('type');
       $('.movesA').hide();
       $('.moves' + type).fadeIn();
       $('.listing').removeClass('active');
       $(this).addClass('active');
   });



