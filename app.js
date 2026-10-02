$(document).ready(function () {
  const tombolMenu = $(".tombol-menu");
  const menu = $("nav .menu ul");
  const nav = $("nav");

  // =========================
  // MOBILE MENU
  // =========================

  tombolMenu.on("click", function (e) {
    e.preventDefault();

    menu.stop(true, true).slideToggle(200);
  });

  menu.find("a").on("click", function () {
    if ($(window).width() <= 991.98) {
      menu.stop(true, true).slideUp(200);
    }
  });

  // =========================
  // RESPONSIVE MENU
  // =========================

  $(window).on("resize", function () {
    if ($(window).width() > 991.98) {
      menu.removeAttr("style");
    }
  });

  // =========================
  // NAVBAR SCROLL EFFECT
  // =========================

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      nav.addClass("putih");
    } else {
      nav.removeClass("putih");
    }
  });
});
