//company setting
$('.comitem input').click(function() {
    var elmnpt = $(this).is(':checked');
     if(elmnpt) {
         $(this).parents('div.boxs').next('div.notifi').slideDown();
     }else {
        $(this).parents('div.boxs').next('div.notifi').slideUp(); 
     }
 });
//company setting end

//company conection 
 $('.comitem input').click(function() {
    var elmnpt = $(this).is(':checked');
     if(elmnpt) {
         $(this).parents('div.boxs').next('div.hidSectn').slideDown();
     }else {
        $(this).parents('div.boxs').next('div.hidSectn').slideUp(); 
     }
 });

//company conection end

//article gen
$('.item_bulk input').click(function() {
   var elmHd = $('.item_bulk input[type="checkbox"]:checked').val();
    if(elmHd) {
        $('.hidenFrmGrp').slideDown();
    }else {
        $('.hidenFrmGrp').slideUp();
    }
});
//article gen end

//compan price
$('.flowadd1').click(function () {
    $('.apprcBx').after('<div class="price_wrap apprcBx boxs"><div class="price_top art_headacc  boxs"><h5>15.08.2017 - 01.01.2018<img src="img/loactionangle.svg" alt="angle" class="img-responsive arrowacc"></h5></div><div class="pricescroll boxs"><div class="price_data art_dataacc boxs" style="display: none;"><div class="inputsection exdate boxs"><div class="boxs"><div class="Formgroup boxs width195"><label>Start date</label><input type="text" class="form-control datep" value="02-04-2018"><img src="img/calender.svg" class="calenderD" alt="calender"></div><div class="Formgroup boxs width195"><label>Expiration date</label><input type="text" class="form-control datep" value="03-04-2018"><img src="img/calender.svg" class="calenderD" alt="calender"></div></div><div class="boxs"><div class="Formgroup boxs width195"><label>Invoice frequency</label><select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="Formgroup boxs forinline"><label>Number of days free of charge cross-dock </label><div class="width195"> <input type="text" class="form-control" value="2"></div> </div></div></div><div class="defaultpricepallet boxs"><div class="boxs deafaultpricebox"><div class="defaultpriceleft"><div class="boxs"><h6>Price per colli</h6></div></div><div class="priceright"><div class="boxs"><div class="width110"><select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"><input type="text" class="form-control" value="€ 0.00"></div></div></div></div><div class="boxs deafaultpricebox"><div class="defaultpriceleft"><div class="boxs"><h6>Price per euro pallet</h6></div></div><div class="priceright"><div class="boxs"><div class="width110"><select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"><input type="text" class="form-control" value="€ 0.00"></div></div></div></div><div class="boxs deafaultpricebox"><div class="defaultpriceleft"><div class="boxs"><h6>Price per block pallet </h6></div></div><div class="priceright"><div class="boxs"><div <select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"><input type="text" class="form-control" value="€ 0.00"></div></div></div></div><div class="boxs deafaultpricebox"> <div class="defaultpriceleft"><div class="boxs"><h6>Price per square meter (bulk)</h6></div></div><div class="priceright"><div class="boxs"><div class="width110"><select class="form-control" style="display: none;"> <option>Per day</option><option>Per week</option> </select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"><input type="text" class="form-control" value="€ 0.00"></div></div></div></div><div class="boxs deafaultpricebox"> <div class="defaultpriceleft"><div class="boxs"><h6>Price per pick location</h6></div></div><div class="priceright"><div class="boxs"><div class="width110"><select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"> <input type="text" class="form-control" value="€ 0.00"></div></div></div></div><div class="boxs deafaultpricebox"><div class="defaultpriceleft"> <div class="boxs"><h6>Price per square meter (cross-dock)</h6></div></div><div class="priceright"><div class="boxs"><div class="width110"><select class="form-control" style="display: none;"><option>Per day</option><option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="width99"><input type="text" class="form-control" value="€ 0.00"></div></div> </div></div><div class="pricetext boxs"> <textarea class="form-control" placeholder="Comments"></textarea></div></div></div></div></div>');
    $('.apprcBx').prevAll('.apprcBx').removeClass('apprcBx');

});

$(document).on('click', 'div.art_headacc', function () {
    $(this).next('div.pricescroll').find('div.art_dataacc').slideToggle();
    $(this).next('div.compsetscroll').find('div.art_dataacc').slideToggle();
    $(this).find("img.arrowacc").toggleClass("rotate");
});

$('.flowadd2').click(function () {
    $('.apprcBox2').after('<div class="price_wrap apprcBox2 boxs"><div class="price_top art_headacc  boxs"><h5>15.08.2017 - 01.01.2018<img src="img/loactionangle.svg" alt="angle"class="img-responsive arrowacc"></h5></div> <div class="pricescroll boxs"><div class="price_data art_dataacc boxs" style="display: none;"><div class="inputsection exdate boxs"><div class="boxs"><div class="Formgroup boxs width195"><label>Start date</label><input type="text" class="form-control datep" value="02-04-2018"><img src="img/calender.svg" class="calenderD"alt="calender"></div><div class="Formgroup boxs width195"><label>Expiration date</label><input type="text" class="form-control datep"value="03-04-2018"><img src="img/calender.svg" class="calenderD" alt="calender"> </div></div><div class="boxs"><div class="Formgroup boxs width195"> <label>Invoice frequency</label><select class="form-control"><option>Per day</option><option>Per week</option></select></div></div></div> <div class="changepass boxs"><input type="checkbox" id="changepass3"><label for="changepass3">Default pallet price for all<span></span></label></div><div class="price_detail boxs"><div class="form-group boxs"> <label>RMA receipt start fee </label><input type="text" class="form-control" value="1.00"></div><div class="form-group boxs"> <label>RMA receipt per line fee </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt start fee</label><input type="text" class="form-control" value="1.00"></div><div class="form-group boxs"><label>Inbound per receipt lines </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt fee per package unit </label> <input type="text" class="form-control" value="0.00"> </div> <div class="form-group boxs"><label>Receipt fee per hour </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt fee per pallet</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Margin (width) </label><select class="form-control"><option>Euro pallet (80cm - 85cm)</option><option>Euro pallet (90cm - 95cm)</option></select></div><div class="form-group boxs"><label>Receipt fee price per picklocation</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt fee price per m2 </label><input type="text" class="form-control" value="0.00"></div> <div class="form-group boxs"><label>Receipt amended fee per customer </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt urgent fee per customer </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Receipt dossier fee per customer</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"> <label>Order start fee </label> <input type="text" class="form-control" value="1.00"></div><div class="form-group boxs"><label>Handling per hour</label> <input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"> <label>Outbound per pallet</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound per package unit</label><select class="form-control"><option>Euro pallet (80cm - 85cm)</option><option>Euro pallet (90cm - 95cm)</option></select></div><div class="form-group boxs"><label>Outbound per order line</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound per quantity </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound fee price per picklocation </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound fee price per m2</label><input type="text" class="form-control" value="0.00"></div> <div class="form-group boxs"><label>Outbound amended fee per customer </label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound urgent fee per customer</label><input type="text" class="form-control" value="0.00"></div><div class="form-group boxs"><label>Outbound dossier fee per customer</label><input type="text" class="form-control" value="0.00"></div></div><div class="boxs button_div addmove_button"><div class="col-sm-6 nopadding form_btn_ryt marginzero"><button type="submit" class="btn1 btncancel hvr-sweep-to-right" data-dismiss="modal">Cancel</button></div><div class="col-sm-6 nopadding form_btn_lft marginzero"><button type="submit"class="btn1 btnsubmit hvr-sweep-to-right">Save</button></div></div></div></div></div>');
    $('.apprcBox2').prevAll('div.apprcBox2').removeClass('apprcBox2');
});


$('.flowadd3').click(function () {
    $('.apprcBox3').after('<div class="price_wrap apprcBox3 boxs"> <div class="price_top art_headacc  boxs"><h5>15.08.2017 - 01.01.2018<img src="img/loactionangle.svg" alt="angle" class="img-responsive arrowacc"></h5></div> <div class="pricescroll boxs"><div class="price_data art_dataacc price_set boxs" style="display: none;"><div class="inputsection exdate boxs"><div class="boxs"><div class="Formgroup boxs width195"><label>Start date</label><input type="text" class="form-control datep" value="02-04-2018"><img src="img/calender.svg" class="calenderD" alt="calender"></div><div class="Formgroup boxs width195"><label>Expiration date</label><input type="text" class="form-control datep" value="03-04-2018"><img src="img/calender.svg" class="calenderD" alt="calender"></div></div> <div class="boxs"><div class="Formgroup boxs width195"><label>Invoice frequency</label><select class="form-control" style="display: none;"><option>Per day</option> <option>Per week</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div><div class="Formgroup boxs forinline"><label>Number of days free of charge cross-dock </label><div class="width195"> <input type="text" class="form-control" value="2"> </div></div></div></div> <div class="defaultpricepallet boxs"><div class="boxs deafaultpricebox"><div class="defaultpriceleft"> </div> <div class="boxs forminline"><div class="width140 margin_side boxs"> <select class="form-control" style="display: none;"><option>Discharge tax</option><option>Discharge tax2</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Discharge tax</span><ul class="list"><li data-value="Discharge tax" class="option selected">Discharge tax</li><li data-value="Discharge tax2" class="option">Discharge tax2</li></ul></div></div><div class="width110 margin_side boxs"><select class="form-control" style="display: none;"><option>Per day</option> <option>Per week</option> </select><div class="nice-select form-control" tabindex="0"><span class="current">Per day</span><ul class="list"><li data-value="Per day" class="option selected">Per day</li><li data-value="Per week" class="option">Per week</li></ul></div></div> <div class="width99 margin_side boxs"><input type="text" class="form-control" value="€ 0.00"> </div> <div class="width150 margin_side boxs"><textarea class="form-control" placeholder="comment"></textarea></div></div> <div class="boxs forminline"> <div class="width140 margin_side boxs"> <select class="form-control" style="display: none;"> <option>Select type</option> <option>Select type2</option></select><div class="nice-select form-control" tabindex="0"><span class="current">Select type</span><ul class="list"><li data-value="Select type" class="option selected">Select type</li><li data-value="Select type2" class="option">Select type2</li></ul></div></div></div> </div></div></div></div> </div>');
    $('.apprcBox3').prevAll('.apprcBox3').removeClass('apprcBox3');
});

//compan price end

//air details page
$(document).ready(function () {
    $('.airDetailBox input#actv').click(function () {
        var chk = $(this).is(':checked');
        if (chk) {
            $('.actiDeati').text('Activate');
            $('.tranInfohd .selDsbl').removeAttr("disabled");
            $('.tranInfohd div.nice-select').removeClass("disabled");
            $('.tranInfohd input[type="text"]').removeAttr("disabled");
            $('.formGrp .checkdiv').removeAttr('disabled');

        } else {
            $('.actiDeati').text('Deactivate');
            $('.selDsbl').attr('disabled', 'disabled');
            $('.tranInfohd div.nice-select').addClass("disabled");
            $('.tranInfohd input[type="text"]').attr("disabled", "disabled");
            $('.formGrp .checkdiv').attr('disabled', 'disabled');
        }
    });
});


$('.switch').click(function (e) {
    e.stopPropagation();
});

$(".delivAdd_btn").click(function () {
    $('.deliverBox').slideDown();
    if ($('.hideBox:hidden').length == 0) {
        $('.custmBox .hideBtn').fadeOut();
    }
});

$(".notyAdd_btn").click(function () {
    //    $('.deliverBox').slideUp();
    $('.notifyBox').slideDown();
    if ($('.hideBox:hidden').length == 0) {
        $('.custmBox .hideBtn').fadeOut();
    }
});

$('.deleIcn').click(function () {
    $('.notifyBox').slideUp();
});

//air details page end

//customs
$('.addSec_btn').click(function () {
    $('.sub_con').slideDown();
    $('.delBtn').show();
    $(this).hide();
});

$('.delBtn').click(function () {
    $(this).hide();
    $('.sub_con').slideUp();
    $('.addSec_btn').fadeIn();

});

var cnt = 1;
$('.insertSec_btn').click(function () {
    cnt++;
    $('.appSblng').after('<div class="custom_inner appSblng boxs"><label>Containers<span>' + cnt + '</span></label><input type="text" class="form-control"><a href="javascript:void(0)" class="sblnDel_btn"><img src="img/delete.svg"></a></div>');
    $('.appSblng').prevAll('.appSblng').removeClass('appSblng');
});

$(document).on('click', 'a.sblnDel_btn', function () {
    $(this).parent('div.custom_inner').hide();
});

var cnt2 = 1;
$('.insrtSec_btn').click(function () {
    cnt2++;
    $('.addSblns').after('<div class="custom_inner addSblns boxs"><label>Declaration<span>' + cnt2 + '</span></label><input type="text" class="form-control"><a href="javascript:void(0)" class="decDel_btn"><img src="img/delete.svg"></a></div>');
    $('.addSblns').prevAll('.addSblns').removeClass('addSblns');
});

$(document).on('click', 'a.decDel_btn', function () {
    $(this).parent('div.custom_inner').hide();
});

//customs end

//sales details page

$('.linkDoss_head input').click(function (e) {
    e.stopPropagation();
});

$('.purpadd_btn').click(function (e) {
    e.stopPropagation();
});
//sales details page end

$(".art_headacc h5").click(function (e) {
    $(this)
        .parents(".art_headacc")
        .next("div.compsetscroll")
        .css("display", 'block');
});

$(".art_headacc a img").click(function (e) {
    $(this)
        .parents(".art_headacc")
        .next("div.compsetscroll")
        .css("display", 'none');
});

$(".addstruct").on("change", function (event) {
    var inputval = $('.addstruct input[type="file"]')
        .val()
        .split("\\")
        .pop();
    var tmppath = URL.createObjectURL(event.target.files[0]);
    //    alert(inputval);
    $(".additems").append(
        '<h4><a href="javascript:void(0)" class="img_fld"><img src=' +
        tmppath +
        ' alt="gallery_img"></a><a href="javascript:void(0)" class="img_details"><img src="img/form_png.svg" alt="form_uploadcopy" class="img-responsive"><span>' +
        inputval +
        '</span></a><a href="javascript:void(0)" class="trash img_trash"><img src="img/formtrash.svg" alt="formtrash" class="img-responsive"></a></h4>'
    );
});

//$(".art_headacc").click(function () {
////    $(this)
////        .next().children(".art_dataacc")
////        .slideToggle();
//    $(this).children("h5").find('img.arrowacc').toggleClass("rotate");
//});

$(".pref_loc input").click(function () {
    $(".prefLoc_model").fadeIn();
});

$(".save_btns").click(function () {
    var elmV = $(".curr_amount_box input").val();
    if (elmV <= 10) {
        $(".amt_popup").fadeIn();
    }
});
$(".toolxls").mouseover(function () {
    $(".toolxlshover").show();
});
$(".toolxls").mouseleave(function () {
    $(".toolxlshover").hide();
});
$(".toolzip").mouseover(function () {
    $(".toolziphover").show();
});
$(".toolzip").mouseleave(function () {
    $(".toolziphover").hide();
});
$(".pref_loc input").click(function () {
    $(".prefLoc_model").fadeIn();
});

$(".save_btns").click(function () {
    var elmV = $(".curr_amount_box input").val();
    if (elmV <= 10) {
        $(".amt_popup").fadeIn();
    }
});

//$('currAmount')

//13-04-19
window.onclick = function () {
    closeMods(event);
};
var elmOvr = document.getElementById("close_md");

function closeMods(event) {
    if (event.target == elmOvr) {
        document.getElementById("pallet_rw").style.display = "none";
        alert("click");
    }
}

$(".dele_pall1 ").click(function () {
    $(".ovelPop").fadeIn();
});

$(".add_paller_ar").click(function () {
    $(".ovelPop2").fadeIn();
});

//13-04-19 end

/*12-4-19*/
$(".moreAdd input.addItem").keypress(function () {
    if ($(this).val() <= 1 && $(this).hasClass("addItem")) {
        $(".moreAdd").after(
            '<div class="article_items article_items2 moreAdd boxs"><ul><li><input type="text" class="form-control addItem" placeholder="Add one more"></li><li></li><li class="inputwidth"><select class="form-control"><option>3847568874</option><option>3847568875</option></select><!-- <a href="javascript:void(0)"><img src="img/small plus.svg"></a> --></li><li class="inputwidth2"><input type="text" class="form-control"><!-- <img src="img/deletelocation.svg"> --></li></ul></div>'
        );
        $("select").niceSelect();
        $(this).removeClass("addItem");
    }
});

/*-------*/
$(document).on("keypress", "input.addItem", function () {
    if ($(this).val() <= 1 && $(this).hasClass("addItem")) {
        $(this)
            .parents("div.moreAdd")
            .after(
                '<div class="article_items article_items2 moreAdd boxs"><ul><li><input type="text" class="form-control addItem" placeholder="Add one more"></li><li></li><li class="inputwidth"><select class="form-control"><option>3847568874</option><option>3847568875</option></select><!-- <a href="javascript:void(0)"><img src="img/small plus.svg"></a> --></li><li class="inputwidth2"><input type="text" class="form-control"><!-- <img src="img/deletelocation.svg"> --></li></ul></div>'
            );
        $("select").niceSelect();
        $(this).removeClass("addItem");
    }
});

var slot = 2;
$(".addMslot").keypress(function () {
    var slotElm = $(".slot_loc");
    if ($(this).val() <= 1 && slotElm.hasClass("slot_loc")) {
        slot++;
        $(".slot_loc").after(
            '<div class="recipt_edit manage_slot content_slot slot_loc boxs"><ul><li class="recipt_edit_12 artiEdit"><span>01P.GA06C0' +
            slot +
            '</span></li><li class="recipt_edit_8 pallet_edit"><input type="text"> </li><li class="recipt_edit_12 amnt_edit"><input type="text"></li><li class="recipt_edit_12 amnt_edit amnt_edit2"><img src="img/checkmark.svg" class="img-responsive stop_ic" alt="stop"><img src="img/delete.svg" class="img-responsive" alt="stop"></li></ul></div>'
        );
        slotElm.removeClass("slot_loc");
    }
});

var itemI = 1;
var idcount = 1;
$(".addInput_txt").keypress(function () {
    var addslt = $(".addNewSlot");
    idcount++;
    if ($(this).val() <= 1 && addslt.hasClass("addNewSlot")) {
        itemI++;
        $(".addNewSlot").after(
            '<div class="underlinebox boxs"><div class="underline under_line"></div><input type="text"><label>cm</label></div><div class="recipt_edit manage_slot content_slot addNewSlot boxs"><ul><li class="recipt_edit_12 artiEdit"><span>' +
            itemI +
            '</span></li><li class="recipt_edit_8 pallet_edit"><input type="text"></li><li class="recipt_edit_12 amnt_edit woodBoard"><div class="book book_wood"><input type="checkbox" name="tick" class="checkdiv" id="one' +
            idcount +
            '"><label for="one' +
            idcount +
            '"><span class="bookbox"></span></label></div><input type="text" class="width66"><img src="img/delete.svg" class="img-responsive" alt="stop"></li></ul></div>'
        );
        addslt.removeClass("addNewSlot");
    }
    $(".remNum span").css("color", "#fff");
});

/*12-4-19*/

$(".locationTable_head ul li.tempWidth img").mouseenter(function () {
    $(".lock_hover").show();
});

$(".locationTable_head ul li.tempWidth img").mouseleave(function () {
    $(".lock_hover").hide();
});

$(".rht_cseg img").click(function () {
    $(".overlay_md").fadeIn();
});

$(document).on("click", ".rht_cseg img", function () {
    $(".overlay_md").fadeIn();
});

var index = 66;
$("input.add_more").keypress(function () {
    var remElm = $(".creat_segment");
    if ($(this).val() <= 1 && remElm.hasClass("creat_segment")) {
        var char = String.fromCharCode(index++);
        $(".creat_segment").after(
            '<div class="create_seghead creat_segment boxs"><li>Level <span>' +
            char +
            '</span></li><li><input type="text" class="form-control add_more" placeholder=""></li><li><input type="text" class="form-control"><a href="javascript:void(0)"><img src="img/delete.svg"></a></li></div>'
        );
        remElm.removeClass("creat_segment");
    }
});

$(".ware_house input").click(function () {
    var elmWar = $('.ware_house input[type="radio"]:checked').val();
    if (elmWar) {
        $(".ware_h").hide();
        $(".cross_d").show();
    }
});
$(".cross_dock input").click(function () {
    var elmWar = $('.cross_dock input[type="radio"]:checked').val();
    if (elmWar) {
        $(".ware_h").show();
        $(".cross_d").hide();
    }
});

$(".next_btn_w").click(function () {
    var inElm = $('.ware_h input[type="radio"]:checked').val();
    if (inElm) {
        $(".warehouse_radio").show();
    }
});

$(".addNewLine").keypress(function () {
    if ($(this).val() <= 1) {
        $(".addNewstr").after(
            '<div class="article_items article_items2 boxs"><ul><li><input type="text" class="form-control" value="012568874"></li><li>Door caps 20 mm black</li><li class="inputwidth"><input type="text" class="form-control"><!-- <select class="form-control"><option>3847568874</option><option>3847568875</option></select> --></li><li class="inputwidth2"><input type="text" class="form-control" value="3"><img src="img/deletelocation.svg"></li></ul></div>'
        );
    }
});

$(".addLine").keypress(function () {
    var elmrmC = $(".appendCh");
    if ($(this).val() <= 1 && elmrmC.hasClass("appendCh")) {
        $(".appendCh").after(
            '<div class="recipt_edit appendCh recipt_edt boxs"><ul><li class="recipt_edit_12"><input type="text" class="form-control" value="pallet1"></li><li class="recipt_edit_8"><input type="text" class="form-control" value="DHL"></li><li class="recipt_edit_12"><select class="form-control" style="display: none;"><option>Collo STD </option>.<option>Collo1 STD </option></select><div class="nice-select form-control" tabindex="0"><span class="current">Collo STD </span><ul class="list"><li data-value="Collo STD" class="option selected">Collo STD </li><li data-value="Collo1 STD" class="option">Collo1 STD </li></ul></div></li><li class="recipt_edit_10"><input type="text" class="form-control" value="17.00"></li><li class="recipt_edit_8"><input type="text" class="form-control" value="16.00"></li><li class="recipt_edit_8"><input type="text" class="form-control" value="17.00"></li><li class="recipt_edit_8"><input type="text" class="form-control" value="14.00"></li><li class="recipt_edit_12"><input type="text" class="form-control" value=""></li><li class="recipt_edit_8"><input type="text" class="form-control" value="03A.OAO1AA"></li><li class="recipt_edit_6 actions thumb_img"><a href="javascript:void(0)"><span><img src="img/packaging.svg" class="h_img"></span></a><a href="javascript:void(0)"><img src="img/delete.svg"></a><div class="pack_hover pack_hover2"><p>’t Parkethuus - 13151<span>1x</span></p></div></li></ul></div>'
        );
        elmrmC.removeClass("appendCh");
    }
});

$(document).on("mouseenter", "img.h_img", function () {
    $(this)
        .parents("li.thumb_img")
        .children("div.pack_hover")
        .show();
});

$(document).on("mouseleave", "img.h_img", function () {
    $(this)
        .parents("li.thumb_img")
        .children("div.pack_hover")
        .hide();
});

window.onclick = function () {
    closeModel(event);
};
var elmMod = document.getElementById("pack_modal_cl");

function closeModel(event) {
    if (event.target == elmMod || event.target == elmMod2) {
        document.getElementById("pack_modal_cl").style.display = "none";
    }
}

$(".close_b,.cancel_btn").click(function () {
    $(".packegingModel").fadeOut();
    $(".amount_moel").fadeOut();
    $(".overlay_md").fadeOut();
    $(".ovelPop").fadeOut();
    $(".ovelPop2").fadeOut();
});

$(".h_img").click(function () {
    $(".packegingModel").fadeIn();
});

$(".thumb_img a img.h_img").mouseenter(function () {
    $(this)
        .parents("li.thumb_img")
        .children("div.pack_hover")
        .show();
});

$(".thumb_img a img.h_img").mouseleave(function () {
    $(this)
        .parents("li.thumb_img")
        .children("div.pack_hover")
        .hide();
});

$(".next_btn_to").click(function () {
    var crossCh = $('.crossDockCh input[type="radio"]:checked').val();
    var wareCh = $('.wareHouseCh input[type="radio"]:checked').val();
    if (wareCh) {
        $(".rhide_btn").hide();
        $(".warehouse_radio").show();
    }
    if (crossCh) {
        $(".rhide_btn").hide();
        $(".crossDock_radio").show();
    }
});

$(".ware_House input").click(function () {
    var warElm = $('.ware_House input[type="radio"]:checked').val();
    if (warElm) {
        $(".warehouse_radio").show();
        $(".crossDock_radio").hide();
    }
});

$(".cross_Dock input").click(function () {
    var warElm = $('.cross_Dock input[type="radio"]:checked').val();
    if (warElm) {
        $(".warehouse_radio").hide();
        $(".crossDock_radio").show();
    }
});
$("button.btn1").click(function () {
    $(".caro_inner").css("display", "block");
    $(".cargobutton").css("display", "none");
});
$(".edit_head input.addElm").keypress(function () {
    if ($(this).val() <= 1 && $(this).hasClass("addElm")) {
        $(".append_head").after(
            '<div class="edit_head edit_head2 boxs"><ul><li><div class="boxs"><input type="text" class="form-control addElm" placeholder="Add one more"></div></li><li><div class="boxs"><select class="form-control"><option>3847568874</option><option>101.00</option><option>102.00</option></select></div></li><li><i><div class="book"><input type="checkbox" name="tick" class="checkdiv" id="two"><label for="two"><span class="bookbox"></span></label></div><a href="javascript:void(0)"><img src="img/delete.svg"></a></i></li></ul></div>'
        );
        $("select").niceSelect();
        $(this).removeClass("addElm");
    }
});

/*-------*/
var count = 1;
$(document).on("keypress", "input.addElm", function () {
    count++;
    if ($(this).val() <= 1 && $(this).hasClass("addElm")) {
        $(this)
            .parents("div.edit_head")
            .after(
                '<div class="edit_head edit_head2 boxs"><ul><li><div class="boxs"><input type="text" class="form-control addElm" placeholder="Add one more"></div></li><li><div class="boxs"><select class="form-control nice-select"><option>3847568874</option><option>101.00</option><option>102.00</option></select></div></li><li><i><div class="book"><input type="checkbox" name="tick" class="checkdiv" id="two' +
                count +
                '"><label for="two' +
                count +
                '"><span class="bookbox"></span></label></div><a href="javascript:void(0)"><img src="img/delete.svg"></a></i></li></ul></div>'
            );
        $("select").niceSelect();
        $(this).removeClass("addElm");
    }
});

/*------*/

//multi selection
$(".dropdown dt a").on("click", function () {
    $(".dropdown dd ul").slideToggle("fast");
});

$(".dropdown dd ul li a").on("click", function () {
    $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id)
        .find("dt a span.value")
        .html();
}

$(document).bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on("click", function () {
    var title = $(this)
        .closest(".mutliSelect")
        .find('input[type="checkbox"]')
        .val(),
        title = $(this).val() + ",";

    if ($(this).is(":checked")) {
        var html = '<span title="' + title + '">' + title + "</span>";
        $(".multiSel").append(html);
        $(".hida").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $(".dropdown dt a").append(ret);
    }
});

//multi selection
$(".dropdown2 dt a").on("click", function () {
    $(".dropdown2 dd ul").slideToggle("fast");
});

$(".dropdown2 dd ul li a").on("click", function () {
    $(".dropdown2 dd ul").hide();
});

function getSelectedValue2(id) {
    return $("#" + id)
        .find("dt a span.value")
        .html();
}

$(document).bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown2")) $(".dropdown2 dd ul").hide();
});

$('.mutliSelect2 input[type="checkbox"]').on("click", function () {
    var title = $(this)
        .closest(".mutliSelect2")
        .find('input[type="checkbox"]')
        .val(),
        title = $(this).val() + ",";

    if ($(this).is(":checked")) {
        var html = '<span title="' + title + '">' + title + "</span>";
        $(".multiSel2").append(html);
        $(".hida2").hide();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret2 = $(".hida2");
        $(".dropdown2 dt a").append(ret2);
    }
});

$('.Tableboxinner input[type="checkbox"]').click(function () {
    var checkElm = $('.Tableboxinner input[type="checkbox"]:checked').length;
    $(".Numbering span").text(checkElm);
});

$(".liblockshow").mouseover(function () {
    $(this)
        .children("div.hoverblock")
        .show();
});

$(".liblockshow").mouseleave(function () {
    $(this)
        .children("div.hoverblock")
        .hide();
});

$(".forimg img").mouseover(function () {
    $(this)
        .nextAll(".hoverinfo")
        .show();
});

$(".forimg img").mouseleave(function () {
    $(this)
        .nextAll(".hoverinfo")
        .hide();
});

$(".opensidenav").click(function () {
    if ($(window).width() <= 767) {
        $(".pushcheck ").css({
            "margin-left": "0px",
            width: "100%",
            transition: "all 0.35s ease"
        });
    } else {
        $(".pushcheck ").css({
            "margin-left": "180px",
            width: "86%",
            transition: "all 0.35s ease"
        });
    }
});

$(".closesidenav ").click(function () {
    $(".pushcheck ").css({
        "margin-left": "0px",
        width: "100%",
        transition: "all 0.35s ease"
    });
});

// custom slider gallery
var datanum = 0;
var $popimg = $("#popimg");
var imgclone = $(".light-img").clone();
$("document").ready(function () {
    $(".light-img").click(function () {
        datanum = $(this).data("num");
        var imgsrc = $(this).attr("src");
        $("#popup").fadeIn(800);
        $popimg.attr("src", imgsrc);
        $("#popup").css("display", "block");
        $("body").css("overflow", "hidden");
    });
});

$("#prev").click(function () {
    --datanum;
    if (datanum < 0) {
        datanum = imgclone.length - 1;
    }
    // $popimg.slideDown(3000);
    $popimg.attr("src", imgclone[datanum].src);
});
$("#next").click(function () {
    ++datanum;
    if (datanum > 9) {
        datanum = imgclone.length - 10;
    }
    $popimg.attr("src", imgclone[datanum].src);

    // if($('.popup_inner img.pop_img').hasClass('fade-in')){
    //     $('.popup_inner img.pop_img').removeClass('fade-in');
    // }
    // $(this).prevAll('.pop_img').addClass('fade-in');
});

$("#close").click(function () {
    $("#popup").css("display", "none");
    $("body").css("overflow", "scroll");
});

$(".preimg2").click(function () {
    if ($(this)) {
        $(this)
            .prevAll(".pop_img")
            .addClass("fade-in");
        // alert('ddd');
    }
    setInterval(function () {
        $(".preimg2")
            .prevAll(".pop_img")
            .removeClass("fade-in");
    }, 1000);
});

$(".preimg1").click(function () {
    if ($(this)) {
        $(this)
            .prevAll(".pop_img")
            .addClass("fade-in");
        // alert('ddd');
    }
    setInterval(function () {
        $(".preimg1")
            .prevAll(".pop_img")
            .removeClass("fade-in");
    }, 5000);
});

// custom slider gallery
$(function () {
    $('input[type="radio"]').click(function () {
        if ($(this).is(":checked")) {
            $('input[type="radio"]')
                .nextAll(".amount")
                .hide();
            $(this)
                .nextAll(".amount")
                .show();
        }
    });
});
$(".serachlocation").click(function () {
    $(".location_inner").fadeIn();
});
$(".hideAshow input").keypress(function () {
    var inElm = $(this).val();
    if (inElm.length == 10) {
        $(".addformhide").fadeIn();
    }
});

$(".batch_anchor").click(function () {
    $(".movetwo").hide();
    $(".movethree").show();
});

$("#colorselector").change(function () {
    $(".colors").hide();
    $(".moveone").hide();
    $("#" + $(this).val()).show();
});
$(".preferr_accord").click(function () {
    $(this)
        .next(".preferr_accordbottom")
        .slideToggle();
});

$(function () {
    $('.book input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            $(".tableshipment ").css("margin-bottom", "230px");
        }
    });
});
$(function () {
    $('.book input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            $(".tablemove ").css("margin-bottom", "164px");
        }
    });
});
$(".hide_nav").click(function () {
    $(".show_nav").toggle();
});
$(".shipment_show").click(function () {
    $(this)
        .parents()
        .children(".shipment_detail")
        .slideToggle(1000);
    $(this)
        .children(".fa")
        .toggleClass("rotate");
});
$(".movesA").hide();
$(".movesa").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
// new
$(".addonemoreitem").click(function () {
    $(".aticleoutbondappend").append(
        "<div class='modaltabledata boxs'><ul class='modalflexo boxs'><li class='additemliwidth1'><input type='text' class='form-control amountinput' placeholder='3847568874'></li><li class='additemliwidth2'><textarea class='normalplaceholder' placeholder='Closet xxl Grey'></textarea></li> <li class='additemliwidth3'><select class='modalselect'><option value='3847568875'>3847568874</option><option value='3847568875'>3847568875</option></select><span class='modalincrease'><a href='javascript:void(0)' class='inputincrease' onclick='increaseValue()'><span><img src='img/plus.svg' alt='plus'></span></a></span></li><li class='additemliwidth4'><input type='text' class='form-control amountinput' id='number1' value='1'></li><a href='javascript:void(0)' class='otbndmdldelete'><img src='img/delete.svg' alt='delete'></a></ul></div>"
    );
    $("select").niceSelect();
    $(".otbndmdldelete").click(function () {
        $(this)
            .parent()
            .remove();
    });
});
$(".addnewline").click(function () {
    $(".adjustmentoubondappend").append(
        "<div class='modaltabledata boxs'><ul class='modalflexo boxs'><li class='adjoverviewliwidth1'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='8387'></li><li class='adjoverviewliwidth2'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='Watermattress Mesamoll 180/210 - 1392005152'></li><li class='adjoverviewliwidth3'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></li><li class='adjoverviewliwidth4'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='01P.EA17CA'></li><li class='adjoverviewliwidth5'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='2'></li><li class='adjoverviewliwidth6'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='4'></li><li class='adjoverviewliwidth7'><textarea  class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></textarea></li><li class='adjoverviewliwidth8'> <select class='modalselect inputwidth100'><option>Order cancelled</option><option>Order cancelled2</option></select></li><a href='javascript:void(0)' class='otbndmdldelete'><img src='img/delete.svg' alt='delete' class=''></a></ul></div>"
    );
    $("select").niceSelect();
    $(".otbndmdldelete").click(function () {
        $(this)
            .parent()
            .remove();
    });
});
$(".addnewline2").click(function () {
    $(".adjustmentoubondappend2").append(
        "<div class='modaltabledata boxs'><ul class='modalflexo boxs'><li class='adjoverview2liwidth1'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='8387'></li><li class='adjoverview2liwidth2'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='Watermattress Mesamoll 180/210 - 1392005152'></li><li class='adjoverview2liwidth3'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></li><li class='adjoverview2liwidth4'><textarea  class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></textarea></li><li class='adjoverview2liwidth5'> <select class='modalselect inputwidth100'><option>Order cancelled</option><option>Order cancelled2</option></select></li><a href='javascript:void(0)' class='otbndmdldelete'><img src='img/delete.svg' alt='delete' class=''></a></ul></div>"
    );
    $("select").niceSelect();
    $(".otbndmdldelete").click(function () {
        $(this)
            .parent()
            .remove();
    });
});
$(".addnewlinepacklist").click(function () {
    $(".editpacklistappend").append(
        "<div class='outbonddetaildata boxs'><ul><li class='editpacklistw1'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='8387'></li><li class='editpacklistw2'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='1796861'></li><li class='editpacklistw3'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='03A.OAO1AA'></li><li class='editpacklistw4'><span class='msghover'> <img src='img/msgicon.svg' alt='message'><div class='modalmsgdetails boxs modalmsgeditpackdetails'><div class='details boxs'><div class='editpacklisthover boxs'><p>Watermattress Mesamoll Softside Dual Left Type 1 180/210</p></div></div></div></span></li><li class='editpacklistw5'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></li><li class='editpacklistw6'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='100'></li><li class='editpacklistw7'><span class='msghover'> <img src='img/msgicon.svg' alt='message'><div class='modalmsgdetails boxs modalmsgeditpackdetails'><div class='details boxs'><div class='editpacklisthover boxs'><p>Watermattress Mesamoll Softside Dual Left Type 1 180/210</p></div></div></div></span></li><li class='editpacklistw8'> <select class='modalselect inputwidth100'><option>Order cancelled</option><option>Order cancelled2</option></select></li><a href='javascript:void(0)' class='otbndmdldelete'><img src='img/delete.svg' alt='delete' class=''></a></ul></div>"
    );
    $("select").niceSelect();
    $(".otbndmdldelete").click(function () {
        $(this)
            .parent()
            .remove();
    });
});
$(".addnewlinepacklistpallet").click(function () {
    $(".editpackpalletappend").append(
        "<div class='outbonddetaildata boxs'><ul><li class='editpalletw1'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='8387'></li><li class='editpalletw2'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='1796861'></li><li class='editpalletw3'> <select class='modalselect inputwidth100'><option>Collo STD (0-0x0x0)</option><option>Collo STD2 (0-0x0x0)</option></select></li><li class='editpalletw4'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='03A.OAO1AA'></li><li class='editpalletw5'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='16.00'></li><li class='editpalletw6'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='31A100'></li><li class='editpalletw7'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='100'></li><li class='editpalletw8'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder'></li><li class='editpalletw9'><input type='text' class='inputwidth100 amountinput form-control normalplaceholder' placeholder='03A.OAO1AA'></li><li class='editpalletw10 Action editdisable'><a href='javascript:void(0)'> <span><img src='img/packaging.svg' alt='edit' class='img-responsive'></span></a></li><a href='javascript:void(0)' class='otbndmdldelete'><img src='img/delete.svg' alt='delete' class=''></a></ul></div>"
    );
    $("select").niceSelect();
    $(".otbndmdldelete").click(function () {
        $(this)
            .parent()
            .remove();
    });
});
$(".otbndmdldelete").click(function () {
    $(this)
        .parent()
        .remove();
});
$("#selectall,#selectallpacklist").click(function () {
    $(".checkdiv").prop("checked", $(this).prop("checked"));
});
$("#reset").click(function () {
    $("#number").val(0);
});
$("#reset1").click(function () {
    $("#number1").val(0);
});
$(".closeimglink").click(function () {
    $(".checkboxonclickbox").removeClass("active");
});
$("select").niceSelect();
$('[data-toggle="tooltip"]').tooltip();
$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
        $(".header").addClass("fixed_header");
    } else {
        $(".header").removeClass("fixed_header");
    }
});
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener(
            "click",
            function () {
                //            this.classList.toggle("is-active");
            },
            false
        );
    });
}

$(".slick").slick({
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
                slidesToShow: 2
            }
        }
    ]
});
$(".tab").click(function () {
    if ($(this).hasClass("active")) {
        $(".tab")
            .find("span")
            .removeClass("color");
        $(".tab")
            .find(".fa")
            .removeClass("fa-chevron-up")
            .addClass("fa-chevron-down");
        $(".tab").removeClass("active");
        $(".tabs").slideUp();
    } else {
        var id = $(this).data("id");
        $(".tab")
            .find("span")
            .removeClass("color");
        $(this)
            .find("span")
            .addClass("color");
        $(".tab")
            .find(".fa")
            .removeClass("fa-chevron-up")
            .addClass("fa-chevron-down");
        $(this)
            .find(".fa")
            .addClass("fa-chevron-up")
            .removeClass("fa-chevron-down");
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $(".tabs").slideUp();
        $("#tab" + id).slideDown();
    }
});
$(".clicklink").click(function () {
    $(".clicklink").removeClass("active");
    $(this).addClass("active");
});

$(".opentext").hide();
$(".opensidenav").click(function () {
    $(".sidenav").css("width", "244");
    $(".opensidenav").hide();
    $(".opentext").show();
    $(".sidenav").addClass("bigsidenav");
    $(".bodyrightcontent").addClass("bodyrightcontentslide");
    $(".bodyform").addClass("feedbackscroll");
});
$(".closesidenav").click(function () {
    $(".sidenav").css("width", "50");
    $(this).hide();
    $(".opentext").hide();
    $(".opensidenav").show();
    $(".hamburger").hide();
    $(".bodyrightcontent").removeClass("bodyrightcontentslide");
    $(".sidenav").removeClass("bigsidenav");
    $(".bodyform").removeClass("feedbackscroll");
});
if ($(window).width() < 768) {
    $(".opensidenav").click(function () {
        $(".sidenav").addClass("sidenavresponsive");
        $(this).show();
    });
    $(".closesidenav").click(function () {
        $(".sidenav").removeClass("sidenavresponsive");
        $(".hamburger").show();
    });
}

$(".typeA").hide();
$(".typesc").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".typeA").hide();
    $(".types" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
$(".typeCA").hide();
$(".typescb").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".typeCA").hide();
    $(".typesc" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
$(".typeSA").hide();
$(".typessb").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".typeSA").hide();
    $(".typess" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
$(".typeOA").hide();
$(".typesoa").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".typeOA").hide();
    $(".typeso" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
$(".outbondDetailbox .top").click(function () {
    var id = $(this).data("id");
    $(".outbondDetailbox .bottom" + id).slideToggle();
    $(this).addClass("active");
});
$.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
        window.location.href
    );
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
};

if ($.urlParam("type") === "c" || $.urlParam("type") === "d") {
    $(".typeSA").hide();
    $(".typeOA").hide();
    $(".typess" + $.urlParam("type")).show();
    $(".typeso" + $.urlParam("type")).show();
    $(".bodytabs ul li a").each(function () {
        if ($(this).data("type") == $.urlParam("type")) {
            $(".bodytabs ul li a").removeClass("active");
            $(this).addClass("active");
            return false;
        }
    });
}

// priyank start
$(".typeRA").hide();
$(".typesra").show();
$(".clickme").click(function () {
    var type = $(this).data("type");
    $(".typeRA").hide();
    $(".typesr" + type).fadeIn();
    $(".clickme").removeClass("active");
    $(this).addClass("active");
});
$(".get_repttttp").click(function () {
    $(".report_dwnld_inner1").show();
    $(".report_dwnld_inner2").hide();
    $(".report_dwnld_inner3").hide();
});
$(".get_repttttp2").click(function () {
    $(".report_dwnld_inner2").show();
    $(".report_dwnld_inner1").hide();
    $(".report_dwnld_inner3").hide();
});
$(".warehouse_report1").click(function () {
    $(".warehouse_report11").show();
});
$(".warehouse_report2").click(function () {
    $(".warehouse_report21").show();
});
$(".warehouse_report3").click(function () {
    $(".warehouse_report31").show();
});
$(".warehouse_report4").click(function () {
    $(".warehouse_report41").show();
});
$(".warehouse_report5").click(function () {
    $(".warehouse_report51").show();
});
$(".warehouse_report6").click(function () {
    $(".warehouse_report61").show();
});
$(".warehouse_report7").click(function () {
    $(".warehouse_report71").show();
});
$(".warehouse_report8").click(function () {
    $(".warehouse_report81").show();
});
$(".warehouse_report9").click(function () {
    $(".warehouse_report91").show();
});
$(".warehouse_report10").click(function () {
    $(".warehouse_report101").show();
});
$(".warehouse_report11").click(function () {
    $(".warehouse_report111").show();
});
$(".dossier_report1").click(function () {
    $(".dossier_report11").show();
});
$(".dossier_report2").click(function () {
    $(".dossier_report21").show();
});
$(".cargo_report1").click(function () {
    $(".cargo_report11").show();
});
$(".cargo_report2").click(function () {
    $(".cargo_report21").show();
});
$(".cargo_report3").click(function () {
    $(".cargo_report31").show();
});
$(".cargo_report4").click(function () {
    $(".cargo_report41").show();
});
$(".cargo_report5").click(function () {
    $(".cargo_report51").show();
});
$(function () {
    $("#colorselector").change(function () {
        $(".tabcontent_product").hide();
        $("#" + $(this).val()).fadeIn();
        // alert($(this).val())
    });
});
$(function () {
    $("#colorselector2").change(function () {
        $(".tabcontent_product").hide();
        $("#" + $(this).val()).fadeIn();
    });
});
$(function () {
    $("#colorselector3").change(function () {
        $(".tabcontent_product").hide();
        $("#" + $(this).val()).fadeIn();
    });
});
$(".form-control").change(function () {
    if ($(this).val() == "") {
        $(this)
            .next()
            .children(".current")
            .removeClass("active");
    } else {
        $(this)
            .next()
            .children(".current")
            .addClass("active");
    }
});
// priyank end

$(".tabledrop").click(function () {
    $(this).toggleClass("active");
});
$(".Searchclick").click(function () {
    $(".inputhideshow").toggleClass("inputshow");
    $(this).toggleClass("searchhideshow");
    $(".searchHide").toggleClass("searchbtnHideshow");
    $(".inputhideshow").slideToggle();
});
$(".datep").datetimepicker({
    format: "DD-MM-YYYY"
    // inline: true,
});
var countChecked = function () {
    var n = $(".checkdiv:checked").length;
    var m = $(".checkdivpicklist:checked").length;
    var o = $(".checkdivpicklist2:checked").length;
    if (n >= 1) {
        $(".checkboxonclickbox").addClass("active");
        $(".checkboxonclickboxpicklist").removeClass("active");
        $(".checkboxonclickbox2").removeClass("active");
    } else if (m >= 1) {
        $(".checkboxonclickboxpicklist").addClass("active");
        $(".checkboxonclickbox").removeClass("active");
    } else if (o >= 1) {
        $(".checkboxonclickbox2").addClass("active");
        $(".checkboxonclickbox").removeClass("active");
        $(".checkboxonclickboxpicklist").removeClass("active");
    } else {
        $(".checkboxonclickbox").removeClass("active");
        $(".checkboxonclickboxpicklist").removeClass("active");
    }
};
countChecked();
$("input[type=checkbox]").on("click", countChecked);
// $(".book_2>input[type=checkbox]").on("click", countChecked);

$(".uncheckDiv").click(function () {
    var items = document.getElementsByName("tick");
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox") items[i].checked = false;
    }
    $(".checkboxonclickbox").removeClass("active");
    $(".checkboxonclickbox2").removeClass("active");
});

var input = document.getElementById("file-upload");
var infoArea = document.getElementById("file-upload-filename");
input.addEventListener("change", showFileName);

function showFileName(event) {
    // the change event gives us the input it occurred in
    var input = event.srcElement;
    // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
    var fileName = input.files[0].name;
    $("#file-upload-filename").append(
        "<p><img src='img/form_uploadcopy.svg' alt='form_uploadcopy' class='uploadimgs'><span class='uploaddatename'> 30-11-2018   Wendy Jansen </span><span class='FileNameupload'>" +
        fileName +
        "</span><a href='javascript:void(0)'><img src='img/formtrash.svg' alt='formtrash' class='img-responsive trashimgD'></a></p>"
    );
    // use fileName however fits your app best, i.e. add it into a div
    //  infoArea.textContent = ;
}

function increaseValue() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
}

function increaseValue() {
    var value = parseInt(document.getElementById("number1").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number1").value = value;

}

// $('.tableshipment ').css("margin-bottom","230px")

//recipt_edit
$(".img_fld img").click(function () {
    var elmImg = $(this).attr("src");
    $(".popupInn img.pop_img").attr("src", elmImg);
    $(".popup").fadeIn();
});

$(document).on("click", ".img_fld img", function () {
    var elmImg = $(this).attr("src");
    $(".popupInn img.pop_img").attr("src", elmImg);
    $(".popup").fadeIn();
});
