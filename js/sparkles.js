//navbar scroll funnction

$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      var $navLink = $(".nav-link");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrollLink", $(this).scrollTop() > $navLink.height());
  });
});


// function toggle() {
//   var hideShowDivs = document.getElementsByClassName("hide-show-divs");
//   changeBtnText(); // Invoking changeBtnText added
//   for(var i = 0; i < hideShowDivs.length; i++){
//     if (hideShowDivs[i].style.display === "block") {
//       hideShowDivs[i].style.display = "none";
//       // changeBtnText();
//     } else {
//       hideShowDivs[i].style.display = "block";
//     }
//   }
// }


function toggle(divClass, divButton) {
  var hideShowDivs = document.getElementsByClassName(divClass);
  changeBtnText(divButton); // Invoking changeBtnText function
  for(var i = 0; i < hideShowDivs.length; i++){
    if (hideShowDivs[i].style.display === "block") {
      hideShowDivs[i].style.display = "none";
    } else {
      hideShowDivs[i].style.display = "block";
    }
  }
}



function changeBtnText(divButton) {
  var hideShowImgBtn = document.getElementsByClassName(divButton);
  for(var i = 0; i < hideShowImgBtn.length; i++)
    // Using innerText instead of value
    if(hideShowImgBtn[i].innerHTML =="Hide Images") {
      hideShowImgBtn[i].innerHTML= "More Images";
    }else {
      hideShowImgBtn[i].innerHTML = "Hide Images";
    }
  }

