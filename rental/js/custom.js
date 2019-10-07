$('.hearticon').click(function() {
    $(this).toggleClass('colorpurple')
});
document.addEventListener("mousedown", function(event) {
    if (event.target.closest(".acc_det, .clickacc"))
        return;
    $('.acc_det').slideUp();
});
$('.acc_det li').click(function() {
    $('.acc_det').slideUp();
});
$('.clickacc').click(function() {
    $('.acc_det').slideToggle();
});
document.addEventListener("mousedown", function(event) {
    if (event.target.closest(".location_drop, .openloc li a"))
        return;
    $('.location_drop').slideUp();
});
$('.openloc li a').click(function() {
    $('.location_drop').slideToggle();
});
$('.update_btn button').click(function() {
    $('.location_drop').slideUp();
});
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
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
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
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,

        }
    }]
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