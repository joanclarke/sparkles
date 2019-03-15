//navbar scroll funnction

$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      var $navLink = $(".nav-link");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrollLink", $(this).scrollTop() > $navLink.height());
  });
});
