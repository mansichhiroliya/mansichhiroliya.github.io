import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".movesA").hide();
    $(".movesa").show();
    $(".year_anchor a").click(function() {
      var type = $(this).data("type");
      $(".movesA").hide();
      $(".moves" + type).fadeIn();
      $(".year_anchor a").removeClass("active");
      $(this).addClass("active");
  });

  $(function () {
    $(".point_table").slice(0, 4).show();
    $("#load").on('click', function (e) {
        e.preventDefault();
        $(".point_table:hidden").slice(0, 1).slideDown();
        if ($(".point_table:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 100
        }, 1500);
    });
});
function initSlider(){
    $('.slick').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 1000,
      slidesToScroll: 1,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
}
$(document).on('ready', function () {
    initSlider();
});
}
}