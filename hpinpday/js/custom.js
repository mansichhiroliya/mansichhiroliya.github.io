window.onscroll = function() {stickyHeader()};
function stickyHeader() {
    var head = document.getElementById('sticky_header');
    if(document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        head.classList.add('fixed_header');
    }
    else {
       $('.header').removeClass('fixed_header'); 
    }
}

$('.header .menu li a').click(function() {
    $('.header .menu li a').removeClass('active');
    $(this).addClass('active');
});


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
        $('#mySidenav').css('left', '-250px');
    }
});



