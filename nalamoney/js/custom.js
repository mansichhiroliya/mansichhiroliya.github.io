$('.adddesc label').click(function(){
    $(this).toggleClass('labelup');
});
$('#fileupload').on('change', function(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    var path = $(this).val().split('\\').pop();
    var flname = $(this).val();
    var valid_extensions = /(\.jpg|\.jpeg|\.gif|\.png|\.pdf)$/i;
    var elmwdth = $('.progress-bar').css('width');
    $('#path').text(path);
    if ($(this).val() != '') {
        $('.uplaodfile').fadeIn();
        $('.uploadadd').slideUp()
    } else {
        $('.uplaodfile').fadeOut();
        $('.uploadadd').fadeIn()
    }

    if (valid_extensions.test(flname)) {
        $('#imgpath').attr('src', 'img/image_big.svg');
    }

    if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(flname)) {
        $('#imgpath').attr('src', 'img/pdf.svg');
    }

    setTimeout(function() {
        $('.progress-bar').css('width', '100%');
    }, 600);

    setTimeout(function() {
        $('.progress').hide();
        $('.file_rht').css('display', 'flex');
    }, 1500);
});



// dark mode function
$('.switch input').click(function() {
    if ($('.switch input').is(':checked')) {
        $('.back_color').addClass('darkmode');
        $('.header').css('background-color', '#2b2e43');
        $('.changetextcolor').css('color', '#fff');
        $('.head_logo a img').attr('src', 'img/logowhite.png');
        $('.rightBx_inr button img').attr('src', 'img/arrowdownwhite.svg');
        $('.download a').css('background-color', '#224562');
        $('.paymentby').css('background-color', '#224562');
        $('.attach').css({ 'background-color': '#3f435d', 'border-color': '#3f435d' });
        $('.pending').css('background-color', '#413c3c');
        $('.modal-content').addClass('darkmode');
        $('.break_tab li a.active').addClass('activechange');
        $('.remove').css('background-color', '#3b2e41');
        $('.fixtures li a img').attr('src', 'img/viewwhite.svg');
        $('.upload a img').attr('src', 'img/plus.svg');
        $('.foryellow').addClass('foryellow1');
        $('.forblue').addClass('forblue1');
        $('.forpurple').addClass('forpurple1');
        $('.forred').addClass('forred1');
        $('.fororange').addClass('fororange1');
        $('.forindigo').addClass('forindigo1');
        $('.forpink').addClass('forpink1');
        $('.chooseone').removeClass('choosetwo').addClass('choosethree');
        $('.break_tab li a').removeClass('active');
        $('.cont2').addClass('contdark');
        $('.cont3').addClass('contdark');
        $('.addpayment').addClass('contdark');
        $('.chooseone label.customadd span').css('color','#fff');
        $('.forborder').css('border-color','#3F435D');
        
    } else {
        $('.back_color').removeClass('darkmode');
        $('.header').css('background-color', '#fff');
        $('.changetextcolor').css('color', '#031019');
        $('.head_logo a img').attr('src', 'img/logoblue.svg');
        $('.rightBx_inr button img').attr('src', 'img/arrowdown.svg');
        $('.download a').css('background-color', '#e5f8ff');
        $('.paymentby').css('background-color', '#e5f8ff');
        $('.attach').css({ 'background-color': '#ecf1f4', 'border-color': '#ecf1f4' });
        $('.pending').css('background-color', '#fef8e9');
        $('.modal-content').removeClass('darkmode');
        $('.break_tab li a.active').css('color', '#031019');
        $('.remove').css('background-color', '#ffe8e8');
        $('.fixtures li a img').attr('src', 'img/view.svg');
        $('.upload a img').attr('src', 'img/plusblack.svg');
        $('.foryellow').removeClass('foryellow1');
        $('.forblue').removeClass('forblue1');
        $('.forpurple').removeClass('forpurple1');
        $('.forred').removeClass('forred1');
        $('.fororange').removeClass('fororange1');
        $('.forindigo').removeClass('forindigo1');
        $('.forpink').removeClass('forpink1');
        $('.chooseone').removeClass('choosethree').addClass('choosetwo');
        $('.cont2').removeClass('contdark enabled2');
        $('.cont3').removeClass('contdark')
        $('.chooseone label.customadd span').css('color','#031019');
        $('.forborder').css('border-color','#D8DDE4');
    }

    if($('.switch input').is(':checked') && $('.chooseone input').is(':checked')) {
        $('.cont2').addClass('contdark enabled2');
    }
});


$('.category .chooseone input').click(function() {
    if ($(this).is(':checked') && $('.back_color').hasClass('darkmode')) {
        $('.chooseone label span').addClass('spanclr');
    }

});

// dark mode function ends
/*------------------------*/
// dropdown function
$('.rightBx_inr button').click(function() {
    $('.rightBx_inr button').parents('.rightBx_inr').children('button').find('img').removeClass('rotate');
    $(this).parents('.rightBx_inr').children('button').find('img').addClass('rotate');
    if ($(this).hasClass('active')) {
        $('.lang_wrp').slideUp();
        $('.rightBx_inr button').removeClass('active');
    } else {
        $('.lang_wrp').slideUp();
        $('.rightBx_inr button').removeClass('active');
        $(this).addClass('active');
        $(this).next('.lang_wrp').slideDown();
    }

});


$('.rightBx_inr ul li').click(function() {
    var txt = $(this).text();
    $(this).parents('.rightBx_inr').children('button').find('span').text(txt);
    $(this).parents('.lang_wrp').slideUp();
    $(this).parents('.lang_wrp').prev('button').find('img').removeClass('rotate');
    $(this).parent('.lang_wrp').prev('button').removeClass('active');
});

$(document).on("click", function(event) {
    var $trigger = $(".rightBx_inr button");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".lang_wrp").slideUp("fast");
    }

    $(".rightBx_inr button").removeClass('active');
    $('.rightBx_inr button img').removeClass('rotate');
});

$(".rightBx_inr button").click(function(e) {
    e.stopPropagation();
});
/*---file uploader---*/
// dropdown function ends

// login page functionality
$('.login a').click(function() {
    $('.content').hide();
    $('.animated_tick').show();
    setTimeout(function() {
        $('.spalsh').slideUp('slow').css('margin-top', '-100%');
    }, 1000);
    setTimeout(function() {
        $('.welcome').fadeIn().css('display', 'flex');
    }, 2000);

    setTimeout(function() {
        window.open('home.html', '_self');
    }, 3000);
});

// login page functionality ends
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

$(".paymentto a").click(function(e){
    $(this).parents('ul').next('.trans_detail').removeClass('trans_detaillll');
 });

$(".trans_historyacr ul").click(function(){
    $(this).next('.trans_detaillll').slideToggle();
    $(this).next('.trans_detail').addClass('trans_detaillll');
 });

// tabs script
$(".diffA").hide();
$(".diffa").show();
$(".break_tab li a").click(function() {
    var type = $(this).data("type");
    $(".diffA").hide();
    $(".diff" + type).fadeIn();
    if($('.modal-content').hasClass('darkmode')){
    $(".break_tab li a").removeClass("activechange");
    $(this).addClass("activechange");
    }
    else{
        $(".break_tab li a").removeClass("active");
    $(this).addClass("active");
    }
});
// tabs script


// disable button
$('.chooseone input').click(function() {
    if ($('.chooseone input').is(':checked')) {
        $('.continue').attr("disabled", false);
        $('.continue').addClass('enabled').removeClass('contdark');
    } else {
        $('.continue').attr("disabled", true);
    }

    if($('body').hasClass('darkmode')) {
        $('.continue').addClass('enabled2');
       
    }
});
$('.continue').click(function() {
    $('.continue').hide();
    $('.descrip').fadeIn();
})
$(".addlabel").keyup(function() {
    var $this = $(this);
    if ($this.val().length >= 1) {
        $this.parent().removeClass("error");
        $this.parent().addClass("active");
        $('.Continue2').attr("disabled", false);
        $('.Continue2').addClass('enabled');
    } else {
        $this.parent().removeClass("active");
        $this.parent().addClass("error");
        $('.Continue2').attr("disabled", true);
        $('.Continue2').removeClass('enabled');
       
    }

    if( $('body').hasClass('darkmode')) {
        $('.Continue2 ').addClass('enabled2').removeClass('contdark');
    }else {
        $('.Continue2 ').removeClass('enabled2');
    }
});
$('.Continue2').click(function() {
    $('.Continue2').hide();
    $('.descrip2').fadeIn();
})
$(".addlabel2").keyup(function() {
    var $this1 = $(this);
    if ($this1.val().length >= 1) {
        $this1.parent().removeClass("error");
        $this1.parent().addClass("active");
        $('.addpayment').attr("disabled", false);
        $('.addpayment').addClass('enabl');
    } else {
        $this1.parent().removeClass("active");
        $this1.parent().addClass("error");
        $('.addpayment').attr("disabled", true);
        $('.addpayment').removeClass('enabl');
    }

    if($('body').hasClass('darkmode')) {
        $('.addpayment').removeClass('contdark')
    }
});

window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        // theme: "dark2",
        animationEnabled: true,
        dataPointWidth: 34,
        responsive: true,
        backgroundColor: "transparent",
        // title: {
        //     text: "Spendings and Earnings"
        // },
        axisY: {
            interval: 25000,
            gridColor: "#D8DDE4",
            titleFontColor: "#7e90a6",
            lineColor: "#D8DDE4",
            labelFontColor: "#7e90a6",
            tickColor: "#D8DDE4",
            suffix: " THS",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        axisX: {
            gridColor: "#D8DDE4",
            titleFontColor: "#7e90a6",
            lineColor: "#D8DDE4",
            labelFontColor: "#7e90a6",
            tickColor: "#D8DDE4",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        toolTip: {
            shared: true,
            content: "{y} THS"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            // type: "column",
            // name: "Earnigns",
            // legendText: "Earnigns",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "02/07",
                color: "#00a2db",
                y: 30000
            }, {
                label: "03/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "04/07",
                color: "#00a2db",
                y: 52000
            }, {
                label: "05/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "06/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "07/07",
                color: "#00a2db",
                y: 30000
            }, ]
        }, {
            // type: "column",
            // name: "Spendings",
            // legendText: "Spendings",
            // axisYType: "secondary",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#e9eef2",
                y: 30000
            }, {
                label: "02/07",
                color: "#e9eef2",
                y: 18000
            }, {
                label: "03/07",
                color: "#e9eef2",
                y: 28000
            }, {
                label: "04/07",
                color: "#e9eef2",
                y: 5000
            }, {
                label: "05/07",
                color: "#e9eef2",
                y: 40000
            }, {
                label: "06/07",
                color: "#e9eef2",
                y: 45000
            }, {
                label: "07/07",
                color: "#e9eef2",
                y: 18000
            }]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}
$('.switch input').click(function(){
    if ($('.switch input').is(':checked')) {
    var chart = new CanvasJS.Chart("chartContainer", {
        // theme: "dark2",
        animationEnabled: true,
        dataPointWidth: 34,
        responsive: true,
        backgroundColor: "transparent",
        // title: {
        //     text: "Spendings and Earnings"
        // },
        axisY: {
            gridColor: "#3F435D",
            titleFontColor: "#7e90a6",
            lineColor: "#3F435D",
            labelFontColor: "#7e90a6",
            tickColor: "#3F435D",
            suffix: " THS",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        axisX: {
            gridColor: "#3F435D",
            titleFontColor: "#7e90a6",
            lineColor: "#3F435D",
            labelFontColor: "#7e90a6",
            tickColor: "#3F435D",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        toolTip: {
            shared: true,
            content: "{y} THS"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            // type: "column",
            // name: "Earnigns",
            // legendText: "Earnigns",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "02/07",
                color: "#00a2db",
                y: 30000
            }, {
                label: "03/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "04/07",
                color: "#00a2db",
                y: 52000
            }, {
                label: "05/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "06/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "07/07",
                color: "#00a2db",
                y: 30000
            }, ]
        }, {
            // type: "column",
            // name: "Spendings",
            // legendText: "Spendings",
            // axisYType: "secondary",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#e9eef2",
                y: 30000
            }, {
                label: "02/07",
                color: "#e9eef2",
                y: 18000
            }, {
                label: "03/07",
                color: "#e9eef2",
                y: 28000
            }, {
                label: "04/07",
                color: "#e9eef2",
                y: 5000
            }, {
                label: "05/07",
                color: "#e9eef2",
                y: 40000
            }, {
                label: "06/07",
                color: "#e9eef2",
                y: 45000
            }, {
                label: "07/07",
                color: "#e9eef2",
                y: 18000
            }]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
}
else{
      var chart = new CanvasJS.Chart("chartContainer", {
        // theme: "dark2",
        animationEnabled: true,
        dataPointWidth: 34,
        responsive: true,
        backgroundColor: "transparent",
        // title: {
        //     text: "Spendings and Earnings"
        // },
        axisY: {
            gridColor: "#D8DDE4",
            titleFontColor: "#7e90a6",
            lineColor: "#D8DDE4",
            labelFontColor: "#7e90a6",
            tickColor: "#D8DDE4",
            suffix: " THS",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        axisX: {
            gridColor: "#D8DDE4",
            titleFontColor: "#7e90a6",
            lineColor: "#D8DDE4",
            labelFontColor: "#7e90a6",
            tickColor: "#D8DDE4",
            labelFontSize: "14",
            labelFontFamily: "GoogleSansMedium"
        },
        toolTip: {
            shared: true,
            content: "{y} THS"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            // type: "column",
            // name: "Earnigns",
            // legendText: "Earnigns",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "02/07",
                color: "#00a2db",
                y: 30000
            }, {
                label: "03/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "04/07",
                color: "#00a2db",
                y: 52000
            }, {
                label: "05/07",
                color: "#00a2db",
                y: 1000
            }, {
                label: "06/07",
                color: "#00a2db",
                y: 20000
            }, {
                label: "07/07",
                color: "#00a2db",
                y: 30000
            }, ]
        }, {
            // type: "column",
            // name: "Spendings",
            // legendText: "Spendings",
            // axisYType: "secondary",
            // showInLegend: true,
            dataPoints: [{
                label: "01/07",
                color: "#e9eef2",
                y: 30000
            }, {
                label: "02/07",
                color: "#e9eef2",
                y: 18000
            }, {
                label: "03/07",
                color: "#e9eef2",
                y: 28000
            }, {
                label: "04/07",
                color: "#e9eef2",
                y: 5000
            }, {
                label: "05/07",
                color: "#e9eef2",
                y: 40000
            }, {
                label: "06/07",
                color: "#e9eef2",
                y: 45000
            }, {
                label: "07/07",
                color: "#e9eef2",
                y: 18000
            }]
        }]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
}
});
var ctx = document.getElementById('piechart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Airtime', 'Bills', 'Gifts', 'Food', 'Shopping', 'Travel', 'Office'],
        datasets: [{
            label: '# of Votes',
            data: [60, 13, 6, 3, 2, 5, 13],
            backgroundColor: [
                '#fdda44',
                '#46c0e2',
                '#404cf5',
                '#fa7167',
                '#ffb563',
                '#be85cf',
                '#fa74a3'
            ]
        }]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: false
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                angleLines: {
                    display: false
                }
            }]
        },
        elements: {
            arc: {
                borderWidth: 0
            },
            center: {
                text: '20 098TSH EXPENSES',
                color: '#a0abb4', //Default black
                fontStyle: 'GoogleSansBold', //Default Arial
                fontSize: 37 //Default 20 (as a percentage)
            }
        },

        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },

        legend: {
            display: false,
            position: 'right',
            labels: {
                fontFamily: 'GoogleSansMedium',
                fontColor: '#a0abb4',
                fontSize: 18,
                usePointStyle: true,
            }
        }

    }
});

var ctx = document.getElementById('piechartgreen').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Airtime'],
        datasets: [{
            label: '# of Votes',
            data: [100],
            backgroundColor: [
                '#00cd69'
            ]
        }]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    display: false
                },
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                angleLines: {
                    display: false
                }
            }]
        },
        elements: {
            arc: {
                borderWidth: 0
            },
            center: {
                text: '52 220TSH EARNINGS',
                color: '#a0abb4', //Default black
                fontStyle: 'GoogleSansBold', //Default Arial
                fontSize: 37 //Default 20 (as a percentage)
            }
        },

        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        },

        legend: {
            display: false,
            position: 'right',
            labels: {
                fontFamily: 'GoogleSansMedium',
                fontColor: '#a0abb4',
                fontSize: 18,
                usePointStyle: true,
            }
        }

    }
});
Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }

    
});

