window.addEventListener("scroll", function () {
  var yScroll = window.scrollY;
  if (yScroll > 0) {
    $(".header__top").addClass("header__top--blue");
    $(".header").addClass("header--scroll");
  } else {
    $(".header__top").removeClass("header__top--blue");
    $(".header").removeClass("header--scroll");
  }
});

var config = {
  animation: {
    enable: false,
  },
};

$(document).ready(function () {
  $(".blog__slider").slick({
    arrows: false,
    dots: true,
  });

  $(".menu__btn").on("click", function () {
    $(".header__top").toggleClass("header__top--active");
  });

  $(".header a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top - 150;
    $("body, html").animate({ scrollTop: top }, 1500);
  });
});

var mixer = mixitup(".gallery__catalog", config);
