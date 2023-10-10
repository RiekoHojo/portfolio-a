$(function() {
  var state = false;
  var scrollpos;
  $(".menu").on("click", function () {
    if (state == false) {
      scrollpos = S(window).scrollTop();
      $("body").addClass("fixed").css({ top: -scrollpos });
      $(".menu").addClass("on");
      $(".menu-box").stop().slideToggle(300).addClass("on");
      state = true;
    } else {
      $("body").removeClass("fixed").css({ top: 0 });
      window.scrollTo(0, scrollpos);
      $(".menu").removeClass("on");
      $(".menu-box").stop().slideToggle(300).removeClass("on");
      state = false;
    }
  })
});

$("#w-nav ul li:has(ul)").hover(
  function () {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(this).find(".down-box").addClass("show");
    }
  },
  function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find(".downBox").removeClass("show");
    }
  }
);

$(".menu-box .w-nav .button").click(function () {
  $(this).toggleClass("on");
  $(this).next().stop().slideToggle(300);
  return false;
});

if ($(" .com-slide .com-list ").length) {
  $(".com-slide .com-list").slick({
    infinite: true,
    centerMode: false,
    variableWidth: true,
    centerPadding: "0",
    autoplay: true,
    fade: false,
    dots: false,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
  });
}

$("#w-header .hBox .icon-nav li").each(function () {
  if ($(this).find(".search").length) {
    var $this = $(this);
    $(this)
      .find("a")
      .click(function () {
        $this.find(".search").fadeToggle();
        return false;
      });
  }
});

$(window).on("load", function () {
var localLink = window.location + "";
if (localLink.indexOf("#") != -1 && localLink.slice(-1) != "#") {
  localLink = localLink.slice(localLink.indexOf("#") + 1);
  $("html,body").animate({ scrollTop: $("#" + localLink).offset().top }, 500);
}
});