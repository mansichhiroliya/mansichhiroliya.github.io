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
        $('.backcolor').addClass('active');
    } else {
        $('#mySidenav').css('left', '-228px');
        $('.backcolor').removeClass('active');
    }

});
$('.back').click(function () {
    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-228px');
    }
    $('.hamburger').removeClass('is-active');
    $('.backcolor').removeClass('active');

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

function showPops() {
    $('.popup').fadeIn("slow");
}

setInterval(showPops, 5000);

$('.backcolor').click(function () {
    $('.sidenav').css('left', '-228px');
    $(this).css("display", "none");
    $('button.hamburger').removeClass('is-active');
});
$('button.hamburger').click(function () {
    $('.backcolor').css("display", "block");
});

var img = ['img/oldbridge.jpg', 'img/london.jpg'];
var i = 0;
var imgBox = document.getElementById("moveImg");

function imgSlide() {
//     imgBox.src = img[i];
    imgBox.classList.add('fade');
    imgBox.classList.add('opacit');
    if (i < (img.length - 1)) {
        i++;
        imgBox.src = img[i];
    } else {
        i = 0;
        imgBox.classList.remove('fade');
    }
}
var killInterval = setTimeout(imgSlide, 2000);

//$(document).ready(function () { 
//    $('.home2').hide().fadeIn(1500).delay(3000);
//});
//$('.search').click(function () {
//    $(".home2").hide();
//    $(".home3").fadeIn(1000);
//});

//$('.search').click(function() {
//    $('.forbox').attr({
//        "id":"forbox2"
//    });
//});

$(document).ready(function () {
    $('.home2').hide().fadeIn(1500).delay(3000);
});
$('.search2').click(function () {
    $(".home_inner").hide();
    $(".home3").fadeIn(1000).delay(1000);
    $('#txtChange').text('Search');
    $('.forbox').addClass('forbox2');
});
