$(window).scroll(function() {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('top', '55px');
    } else {
        $('#mySidenav').css('top', '-200px');
    }
});
$('.slick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,

            }
        }
    ]
});
$('.tab').click(function() {
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
$(".diffA").hide();
$(".diffa").show();
$(".tab_btn li a").click(function() {
    var type = $(this).data("type");
    $(".diffA").hide();
    $(".diff" + type).fadeIn();
    $(".tab_btn li a").removeClass("active");
    $(this).addClass("active");
});

var i = 1;

function rotation() {
    var elmdiv = $('.quotes_top .quotedetail').length;
    if (i < elmdiv) {
        i++;
        $('.quotes_top .quotedetail').hide();
        $('.quotes_top .quotedetail:nth-child(' + i + ')').fadeIn(3000);
    } else {
        i = 0;
    }
};

setInterval(rotation, 6000);

$('.circle_row  a').click(function() {
    $(this).parents('div.circle_row').hide();
    $('.servicetab').fadeIn(500);
})

$(".movesB").hide();
$(".movesa").show();
$(".click_tabs2 a").click(function() {
    var type = $(this).data("type");
    $(".movesB").hide();
    $(".moves" + type).fadeIn();
    $(".click_tabs2 a").removeClass("active");
    $(this).addClass("active");
    $(this).parents('.circle_row').next('.servicetab').find(".moves" + type).addClass('active');
});


$(".click_tabs2 a").click(function() {
    var ids = $(this).data("id");
    $(".showz").removeClass('active');
    $(".show" + ids).addClass('active');
});

$('.nav_head li a').click(function() {
    $('.nav_head li a').removeClass('active');
    $(this).addClass('active');
})
$('.diff').click(function() {
    $('html,body').animate({
        scrollTop: $('.differnce ').offset().top - 75
    }, 1000)
});
$('.os').click(function() {
    $('html,body').animate({
        scrollTop: $('.services ').offset().top - 75
    }, 1000)
});

$('.oc').click(function() {
    $('html,body').animate({
        scrollTop: $('.client ').offset().top - 75
    }, 1000)
});
$('.cu').click(function() {
    $('html,body').animate({
        scrollTop: $('.contact ').offset().top - 75
    }, 1000)
});
$('.sidenav li a').click(function() {
    $('.sidenav li a').removeClass('active');
    $(this).addClass('active');
    $('#mySidenav').css('top', '-200px');
    $('.hamburger').removeClass('is-active');

});

$('.click_tabs a').click(function() {
    $(this).addClass('active');

    // if ($(this).hasClass('active'))

    // $('.click_tabs2 a').find('.tab_inn').css('background', "#000");
});

// $('.circle_row a').click(function() {
//     var elmtt = $(this).attr('data-type');
//     $(this).parents('div.circle_row').next('div.servicetab').children('div.forscroll').find('.click_tabs').children('a').attr('data-type').addClass('active');
// });


// $('.circle_row a').click(function() {
//     var elmTabV = $(this).attr('data-type');
//     var dkdl = $('.click_tabs a').attr('data-type');
//     if (dkdl === elmTabV) {
//         dkdl.addClass('active');
//     }
// });
// var elmwdth = $('.click_tabs a').width();
// $('#rht').click(function() {
//     elmwdth++;
//     elmwdth1 = elmwdth * 135;
//     var rht = 100;
//     var pelm = $('.forscroll').width();
//     $('.click_tabs a').css("transform", "translateX(" + (-elmwdth1) + "px)");
//     // $('.rht_btn').attr('disabled', true);
//     if ((pelm - elmwdth) <= 617) {
//         $('.rht_btn').attr('disabled', true);
//     }
// });

// $('#lft').click(function() {
//     elmwdth++;
//     elmwdth1 = elmwdth + 135;
//     var pelm = $('.forscroll').width();
//     if ((pelm - elmwdth) < 617) {
//         $('.click_tabs a').css("transform", "translateX(" + elmwdth1 + "px)");
//     }
// });


// var incWidth = 0,
//     divWidth = 0,
//     OlWidth = 0,
//     marginWidth = 50;
// (function($) {
//     $.fn.showScrollIcons = function() {
//         OlWidth = $('.checkOL').width();
//         divWidth = this.width();
//         if (divWidth >= OlWidth) {
//             $('.arrow').hide();
//             if (incWidth) {
//                 //                        $('.arrow.leftArrow').show();
//                 $('.arrow.leftArrow').hide();
//                 $('.checkOL a').removeClass('active');
//                 $('.checkOL a:first-child').addClass('active');
//                 $('.checkOL').animate({ 'marginLeft': "+=" + incWidth });
//                 incWidth = 0;
//             }
//         } else {
//             $('.arrow').show();
//             if (!incWidth) {
//                 $('.arrow.leftArrow').hide();
//             }
//             if (divWidth + incWidth >= (OlWidth - 12)) {
//                 $('.arrow.rightArrow').hide();
//             }
//         }
//     };
// })(jQuery);
// $(document).ready(function() {
//     $('.rightArrow').click(function() {
//         var outerWidth = 0;
//         var currentTab = $('.active');
//         if (currentTab.next().length) {
//             currentTab.next().addClass('active');
//             currentTab.removeClass('active');
//             outerWidth = currentTab.outerWidth();
//         }
//         incWidth += outerWidth;
//         $('.checkOL').animate({ 'marginLeft': "-=" + outerWidth });
//         checkArrowHide();
//     });
//     $('.leftArrow').click(function() {
//         var outerWidth = 0;
//         var currentTab = $('.active');
//         if (currentTab.prev().length) {
//             currentTab.prev().addClass('active');
//             currentTab.removeClass('active');
//             outerWidth = $('.active').outerWidth();
//         }
//         incWidth -= outerWidth;
//         $('.checkOL').animate({ 'marginLeft': "+=" + outerWidth });
//         checkArrowHide();
//     });
//     $('.tabBtn').showScrollIcons();
//     $(window).resize(function() {
//         $('.tabBtn').showScrollIcons();
//     });

//     function checkArrowHide() {
//         if (!incWidth) {
//             $('.arrow.leftArrow').hide();
//         } else {
//             $('.arrow.leftArrow').show();
//         }
//         if (divWidth + incWidth >= (OlWidth - 12)) {
//             $('.arrow.rightArrow').hide();
//         } else {
//             $('.arrow.rightArrow').show();
//         }
//     }
// })