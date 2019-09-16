$("input.quan").keypress(function() {
  var inElm = $(this).val();
  if (inElm.length == 1) {
    $(".hide_div").show();
  }
});
$(".addlist").click(function() {
  $(".listafter").after(
    '<div class="create_head create_body boxs"><li>0000386692</li><li>20186802</li> <li>28 - 11- 2018</li><li><a href="javascript:void(0)"><img src="img/correct.svg"></a></li></div>'
  );
  // removeclass(listafter);
});
$(window).scroll(function() {
  if ($(window).scrollTop() >= 45) {
    $(".header").addClass("fixed_header");
  } else {
    $(".header").removeClass("fixed_header");
  }
});
var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener(
      "click",
      function() {
        this.classList.toggle("is-active");
      },
      false
    );
  });
}

$(".hamburger").click(function() {
  if ($(this).hasClass("is-active")) {
    $("#mySidenav").css("left", "0px");
  } else {
    $("#mySidenav").css("left", "-250px");
  }
});
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
$(".tab").click(function() {
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
$("select").niceSelect();

// accordion
$(function() {
  // Cache selectors
  var $accordion = $(".js-accordion");
  var $allPanels = $(" .accordion-panel").hide();
  var $allItems = $(".accordion-item");

  // Event listeners
  $accordion.on("click", ".accordion-toggle", function() {
    // Toggle the current accordion panel and close others
    $allPanels.slideUp();
    $allItems.removeClass("is-open");
    if (
      $(this)
        .next()
        .is(":visible")
    ) {
      $(".accordion-panel").slideUp();
    } else {
      $(this)
        .next()
        .slideDown()
        .closest(".accordion-item")
        .addClass("is-open");
    }
    return false;
  });
});
// accordion
