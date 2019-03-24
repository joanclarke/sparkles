//navbar scroll funnction

$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      var $navLink = $(".nav-link");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrollLink", $(this).scrollTop() > $navLink.height());
  });
});



// function toggleImgs() {
//   var hideShowImages = document.getElementsByClassName("hide-show-images");
//   changeBtnText(); // Invoking changeBtnText added
//   for(var i = 0; i < hideShowImages.length; i++){
//     if (hideShowImages[i].style.display === "none") {
//       hideShowImages[i].style.display = "block";
//       changeBtnText();
//     } else {
//       hideShowImages[i].style.display = "none";
//     }
//   }
// }

// function changeBtnText() {
//   var hideShowImgBtn = document.getElementsByClassName("hide-show-img-btn");
//   for(var i = 0; i < hideShowImgBtn.length; i++)
//     if(hideShowImgBtn[i].innerText =="More Images") {
//       hideShowImgBtn[i].innerText = "Less Images";
//     }else {
//       hideShowImgBtn[i].innerText = "More Images";
//     }
//   }


  function toggleImgs() {
    var hideShowImages = document.getElementsByClassName("hide-show-images");
    changeBtnText(); // Invoking changeBtnText added
    for(var i = 0; i < hideShowImages.length; i++){
      if (hideShowImages[i].style.display === "none") {
        hideShowImages[i].style.display = "block";
        changeBtnText();
      } else {
        hideShowImages[i].style.display = "none";
      }
    }
  }
  
  function changeBtnText() {
    var hideShowImgBtn = document.getElementsByClassName("hide-show-img-btn");
    for(var i = 0; i < hideShowImgBtn.length; i++)
      // Using innerText instead of value
      if(hideShowImgBtn[i].innerText =="More Images") {
        hideShowImgBtn[i].innerText = "Less Images";
      }else {
        hideShowImgBtn[i].innerText = "More Images";
      }
    }



