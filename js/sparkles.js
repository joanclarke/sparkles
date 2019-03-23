//navbar scroll funnction

$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      var $navLink = $(".nav-link");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrollLink", $(this).scrollTop() > $navLink.height());
  });
});



function toggleImgs() {
  var hideShowImages = document.getElementsByClassName("hide-show-images");
  for(var i = 0; i < hideShowImages.length; i++){
    if (hideShowImages[i].style.display === "none") {
      hideShowImages[i].style.display = "block";
    } else {
      hideShowImages[i].style.display = "none";
    }
  }
}



