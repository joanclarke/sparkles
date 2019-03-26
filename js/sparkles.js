//navbar scroll funnction
//the navbar scroll function will change the background-color of the navbar when the page is being scrolled
$(function () {
  $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      var $navLink = $(".nav-link");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $navLink.toggleClass("scrollLink", $(this).scrollTop() > $navLink.height());
  });
});

//The toggle() function hides/shows a div when the 'More Images' button is clicked
function toggle(divClass, buttonClass) {
  var hideShowDivs = document.getElementsByClassName(divClass);
  changeBtnText(buttonClass); // Invoke changeBtnText function
  for(var i = 0; i < hideShowDivs.length; i++){
    if (hideShowDivs[i].style.display === "block") {
      hideShowDivs[i].style.display = "none";
    } else {
      hideShowDivs[i].style.display = "block";
    }
  }
}

//The changeBtnText() function changes the value of a button when invoked
function changeBtnText(buttonClass) {
  var hideShowImgBtn = document.getElementsByClassName(buttonClass);
  for(var i = 0; i < hideShowImgBtn.length; i++)
    // Use innerHTML to change value of button
    if(hideShowImgBtn[i].innerHTML === "Hide Images") {
      hideShowImgBtn[i].innerHTML= "More Images";
    }else {
      hideShowImgBtn[i].innerHTML = "Hide Images";
    }
  }

