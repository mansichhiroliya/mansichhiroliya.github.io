// $(window).resize(function() {
//     if ($(window).width() <= 991) {
//         $('.sidebar').addClass('sidehover');
//     }
// });
$('.sidebar').mouseenter(function() {
    $('.sidebar').addClass('sidehover');
    $('.homemain').addClass('homehover');
    $('.home_fixed').addClass('home_fixedhover');
    $('.logohome a img').attr('src', 'img/logohalf.svg');
    $('.stick_fixed').addClass('home_fixedhover');
});
$('.sidebar').mouseleave(function() {
    $('.sidebar').removeClass('sidehover');
    $('.homemain').removeClass('homehover');
    $('.home_fixed').removeClass('home_fixedhover');
    $('.logohome a img').attr('src', 'img/welcome.png');
    $('.stick_fixed').removeClass('home_fixedhover');
});

setTimeout(function() {
    $('.hidebody2 .nowrap tbody').show();
    $('.nodata_div2').hide();
}, 3000);


var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};
// ip managment start
$('.ipswitch input[type="checkbox"]').on('change', function(e) {
    if (e.target.checked) {
        $('.whitelist_con h6').text('IP Management (turned on)');
        $('.ipnodata').hide();
        $('.iptable .nowrap tbody ').show();
    } else {
        $('.whitelist_con h6').text('IP Management (turned off)');
        $('.iptable .nowrap tbody ').hide();
        $('.ipnodata').show();

    }
});
// ip managment end

$('.welA').hide();
$('.wela').show();
$('.welpage a').click(function() {
    var type = $(this).data('type');
    $('.welA').hide();
    $('.wel' + type).fadeIn();
    // $('.page_bx a').removeClass('active');
    // $(this).addClass('active');
});

$(document).ready(function() {
    $('.all').hide();
    $('.all1').show();
    $('.clickme').click(function() {
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.clickme').removeClass('active');
        $(this).addClass('active');
    });
});

$(".movesA").hide();
$(".movesa").show();
$(".info_bx ul li  a").click(function() {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".info_bx ul li  a").removeClass("active");
    $(this).addClass("active");
});
$(document).ready(function() {
    $('input').keyup(function() {
        if ($(this).val().length == $(this).attr("maxlength")) {
            $(this).next().focus();
        }
    });
});
// usd serch drop_down start
$(document).ready(function() {

    $('.enter_usd').keyup(function() {
        event.stopPropagation();
        $('.drop_down2').slideDown();

        if ($('.enter_usd').val().length > 0) {
            $('.drop_down2').slideDown();
        } else {
            $('.drop_down2').slideUp();
        }
    });

    $(document).click(function() {
        $('.drop_down2').slideUp();
    });

});

$('.drop_menu2 li a').click(function() {
    var menu1 = $(this).find('.bit_para').text();
    $('.coin_inpt').val(menu1);

});
// usd serch drop_down end

// usd serch drop_down start
$(document).ready(function() {

    $('.enter_usd1').keyup(function() {
        event.stopPropagation();
        $('.drop_down2').slideDown();

        if ($('.enter_usd1').val().length > 0) {
            $('.drop_down2').slideDown();
        } else {
            $('.drop_down2').slideUp();
        }
    });

    $(document).click(function() {
        $('.drop_down2').slideUp();
    });

});

$('.drop_menu2 li a').click(function() {
    var menu2 = $(this).find('.bit_para').text();
    $('.coin_inpt').val(menu2);
});
// usd serch drop_down end
// notification dropdown start
$(document).ready(function() {

    $('.bell').click(function(event) {
        event.stopPropagation();
        $('.drop_down3').slideToggle();
    });

    $(document).click(function() {
        $('.drop_down3').slideUp();
    });
});
// notification dropdown end
$(document).ready(function() {

    $('.arrow_down').click(function(event) {
        event.stopPropagation();
        $('.drop_down_hd').slideToggle();
    });

    $(document).click(function() {
        $('.drop_down_hd').slideUp();
    });
});
// disabled button start
$(".obs_btn").prop('disabled', true);

var toValidate = $('#uname, #email,#psword, #prefix, #pnumber,#psword1,#len1,#len2,#len3,#len4,#len4,#len5,#len6,#lname,#day,#mon,#year,#coin,#addr,#dest,#labl,#recpt,#BTC,#desti');
valid = false;
toValidate.keyup(function() {
    if ($(this).val().length > 0) {
        $(this).data('valid', true);
        $('.obs_btn').css('opacity')
    } else {
        $(this).data('valid', false);
    }
    toValidate.each(function() {
        if ($(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        $(".obs_btn").prop('disabled', false);
    } else {
        $(".obs_btn").prop('disabled', true);
    }
});

$("input[type='text'], input[type='number'], textarea").on("input", function() {
    canChangeColor();
});

function canChangeColor() {
    var can = true;
    $(".req_sec").each(function() {
        if ($(this).val() == '') {
            can = false;
        }
    });

    if (can) {
        $('.obs_btn').css({ opacity: '1' });
    } else {
        $('.obs_btn').css({ opacity: '0.6' });
    }
}
// disabled button end
// disabled button popup start
$(".obs_btn1").prop('disabled', true);

var toValidate1 = $('#len11,#len21,#len31,#len41,#len51,#len61,#psword,#psword1,#psword11');
valid = false;
toValidate1.keyup(function() {
    if ($(this).val().length > 0) {
        $(this).data('valid', true);
        $('.obs_btn1').css('opacity')
    } else {
        $(this).data('valid', false);
    }
    toValidate1.each(function() {
        if ($(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        $(".obs_btn1").prop('disabled', false);
    } else {
        $(".obs_btn1").prop('disabled', true);
    }
});

$(" input[type='number'], input[type='text'],input[type='password']").on("input", function() {
    canChangeColor1();
});

function canChangeColor1() {
    var can1 = true;
    $(".req_sec1").each(function() {
        if ($(this).val() == '') {
            can1 = false;
        }
    });

    if (can1) {
        $('.obs_btn1').css({ opacity: '1' });
    } else {
        $('.obs_btn1').css({ opacity: '0.6' });
    }
}
// disabled button popup end

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}


$(window).scroll(function() {
    if ($(window).scrollTop() >= 5) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});


$('.hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    } else {
        $('#mySidenav').css('left', '-250px');
    }
});
$('.homehead .hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('.sidebar').css('left', '0px');
    } else {
        $('.sidebar').css('left', '-250px');
    }
});


$('.with_recip input[type="checkbox"]').on('change', function(e) {
    if (e.target.checked) {
        $('#amount').modal();
    }
});
$('.addressswitch input[type="checkbox"]').on('change', function(e) {
    if (e.target.checked) {
        $('#ver_cd').modal();
        $('.whitelist_con h6').text('Withdrawal whitelist (turned on)')
    } else {
        $('.whitelist_con h6').text('Withdrawal whitelist (turned off)')
    }
});



$(document).ready(function() {

    $('.fa_dwn').click(function(event) {
        event.stopPropagation();
        $(this).parent('span').next('.drop_down').slideToggle();
    });
    $('.fa_dwn').click(function(event) {
        event.stopPropagation();
        $(this).next('.drop_down').slideToggle();
    });
    $(document).click(function() {
        $('.drop_down').slideUp();
    });
});
$('.drop_menu li a').click(function() {
    var menu = $(this).find('.bit_para').text();
    $(this).parents('.drop_down').parent('.whit_b').find('.coin_inptt').val(menu);
});
$('.drop_menu li a').click(function() {
    var menu = $(this).find('.bit_para').text();
    $(this).parents('.drop_down').parents('span').prev('.coin_inptt').val(menu);
});
$('.riple_p').click(function() {
    $('.destina_hide').show();
});


$(document).ready(function() {

    $('.enter_usddd').keyup(function() {
        event.stopPropagation();
        $(this).next('button').find('.drop_down').slideDown();

        if ($('.enter_usddd').val().length > 0) {
            $('.drop_down').slideDown();
        } else {
            $('.drop_down').slideUp();
        }
    });

    $(document).click(function() {
        $('.drop_down').slideUp();
    });

});
// popup7 quick transfer start
$(document).ready(function() {

    $('.enter_usddd1').keyup(function() {
        event.stopPropagation();
        $(this).parent('.whit_bb1').find('.drop_down').slideDown();

        if ($('.enter_usddd1').val().length > 0) {
            $(this).parent('.whit_bb1').find('.drop_down').slideDown();
        } else {
            $(this).parent('.whit_bb1').find('.drop_down').slideUp();
        }
    });

    $(document).click(function() {
        $(this).parent('.whit_bb1').find('.drop_down').slideUp();
    });

});
// popup7 quick transfer end



$(document).ready(function() {
    var table = $('#example').DataTable({
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        // responsive: true,
        ordering: false
    });
});



// counter timer 60second
$('.send_btn').click(function(event) {
    var counter = 60;
    var interval = setInterval(function() {

        $('.send_btn').html('<span>' + (counter--) + 'second' + '</span>')
        $('.sagain').hide();
        $('.send_btn').addClass('chngbg');
        if (counter <= 0) {
            clearTimeout(interval);
            // window.open('confirm.html', '_self');
            $('.send_btn').text('Send again');
            $('.send_btn').removeClass('chngbg');

        }
    }, 1000);
});
// counter timer 60second end


$('.first_nm').keyup(function() {
    if ($(this).val().length >= 1) {
        $(this).siblings('.infostyle img.tich_i').show();
    } else {
        $(this).siblings('.infostyle img.tich_i').hide();
    }
});
$('.firstwel').click(function() {
    $('.welcome1').hide();
    $('.welcome2').css('display', 'block');
});
$('.secondwel').click(function() {
    $('.welcome2').hide();
    $('.welcome3').css('display', 'block');
});
$('.updatepass').click(function() {
    window.open('confirm.html', '_self')
});
$('.sendmail').click(function() {
    window.open('confirm.html', '_self')
});
$('.ind_sign').click(function() {
    window.open('success.html', '_self')
});
$('.upd_psd').click(function() {
    window.open('success2.html', '_self')
});

$('.selectBx select').click(function() {
    $(this).siblings('.selectBx i').toggleClass('rotate');
});
$('.switch input').click(function() {
    if ($('.switch input').is(':checked')) {
        $('.bgcolor').addClass('nightmode');
        $('.header').addClass('fixedblack');
        $('.whiteback').css('background-color', 'transparent');
        $('.textcolor').addClass('whitetext');
        $('.switch i').text('Night');
        $('.formstyle .select_region').addClass('darkselect');
        $('.selectBx i').css('color', '#fff');
        $('.code_div .form-control').css('color', '#fff');
        $('.modal-content').css('background-color', '#000');
        $('.home_fixed').addClass('homefixedmode');
        $('.gradient-box').addClass('homefixedmode');
        $('.sidebar').addClass('homefixedmode');
        $('.getverfiy').addClass('homefixedmode');
        $('.bellicon img').attr('src', 'img/bellwhite.svg')
        $('.searchicon img').attr('src', 'img/searchwhite.svg')
        $('.homemid').addClass('homemidmode');
        $('.stick_fixed').addClass('homemidmode');
        $('.bitcoin_sec').addClass('homemidmode');
        $('.drop_down').addClass('dropdownmode');
        $('.drop_down_hd').addClass('drop_down_hdmode');
        $('.drop_down2').addClass('drop_down_hdmode');
        $('.drop_down3').addClass('drop_down_hdmode');
        $('.fran').addClass('homemidmode');
        $('.whitebackmodal').css('background-color', '#000');
        $('.partially').css('border-color', '#fff');
        $('.sendcoin').css('background-color', '#97a3b4');
        $('.btngran span').css('background', '#16252e');
        $('.dulpliimg img').attr('src', 'img/whiteduplicate.svg');
    } else {
        $('.bgcolor').removeClass('nightmode');
        $('.header').removeClass('fixedblack');
        $('.whiteback').css('background-color', '#fff');
        $('.textcolor').removeClass('whitetext');
        $('.switch i').text('Day');
        $('.formstyle .select_region').removeClass('darkselect');
        $('.selectBx i').css('color', '#000');
        $('.code_div .form-control').css('color', '#98a9bc');
        $('.modal-content').css('background-color', '#fff');
        $('.home_fixed').removeClass('homefixedmode');
        $('.gradient-box').removeClass('homefixedmode');
        $('.sidebar').removeClass('homefixedmode');
        $('.getverfiy').addClass('homefixedmode');
        $('.bellicon img').attr('src', 'img/bell.svg')
        $('.searchicon img').attr('src', 'img/serch.svg');
        $('.homemid').removeClass('homemidmode');
        $('.stick_fixed').removeClass('homemidmode');
        $('.bitcoin_sec').removeClass('homemidmode');
        $('.drop_down').removeClass('dropdownmode');
        $('.drop_down_hd').removeClass('drop_down_hdmode');
        $('.drop_down2').removeClass('drop_down_hdmode');
        $('.drop_down3').removeClass('drop_down_hdmode');
        $('.fran').removeClass('homemidmode');
        $('.whitebackmodal').css('background-color', '#fff');
        $('.partially').css('border-color', '#0c133e');
        $('.sendcoin').css('background-color', 'rgba(12, 19, 62, 0.6)');
        $('.btngran span').css('background', '#fff');
        $('.dulpliimg img').attr('src', 'img/duplicatebig.svg');
    }
});

$(document).on('click', '.switch input', function() {
    if ($('.switch input').is(':checked')) {
        $('.textcolor').addClass('whitetext');

    } else {
        $('.textcolor').removeClass('whitetext');
    }
});

$('.slick').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    adaptiveHeight: false,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }]
});







$('#fileselect1').change(function() {
    if ($(this).val() != "") {
        $('.pro_bx2').show();
        $('.Uploadimg222').hide();
    }
    setTimeout(function() {
        $('.main_drag4').hide();
        $('.main_drag5').show();
    }, 2500)
})

// pagination start
var pagination = $(".pagination");

pagination.on("click", function() {
    console.log(pagination);
    $(this).find(".circle").toggleClass("active");
})

// pagination end










// loader
var ldelm = document.getElementById('fileselect');
ldelm.addEventListener('change', function() {

    var can = document.getElementById('canvas'),
        spanProcent = document.getElementById('procent'),
        c = can.getContext('2d');

    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * 100;

    c.lineCap = 'round';
    arcMove();

    function arcMove() {
        var deegres = 0;
        var acrInterval = setInterval(function() {
            deegres += 1;
            c.clearRect(0, 0, can.width, can.height);
            procent = deegres / oneProcent;

            spanProcent.innerHTML = procent.toFixed();

            c.beginPath();
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c.strokeStyle = '#fff';
            c.lineWidth = '10';
            c.stroke();

            c.beginPath();
            c.strokeStyle = '#ffd012';
            c.lineWidth = '10';
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c.stroke();
            if (deegres >= result) clearInterval(acrInterval);
        }, fps);

    }


});

// loader
var ldelm1 = document.getElementById('fileselect1');
ldelm1.addEventListener('change', function() {

    var can = document.getElementById('canvas1'),
        spanProcent = document.getElementById('procent1'),
        c = can.getContext('2d');

    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * 100;

    c.lineCap = 'round';
    arcMove();

    function arcMove() {
        var deegres = 0;
        var acrInterval = setInterval(function() {
            deegres += 1;
            c.clearRect(0, 0, can.width, can.height);
            procent = deegres / oneProcent;

            spanProcent.innerHTML = procent.toFixed();

            c.beginPath();
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            c.strokeStyle = '#fff';
            c.lineWidth = '10';
            c.stroke();

            c.beginPath();
            c.strokeStyle = '#ffd012';
            c.lineWidth = '10';
            c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            c.stroke();
            if (deegres >= result) clearInterval(acrInterval);
        }, fps);

    }


});