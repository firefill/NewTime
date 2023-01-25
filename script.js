$(".element").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("active");
    $(".stage").children(".element").not(".active").addClass("inactive");
  });
  $(this).mouseleave(function () {
    $(this).removeClass("active");
    $(".stage").children(".element").not(".active").removeClass("inactive");
  });
});
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });
});

window.onload = function() {

  setTimeout(function() {

      document.getElementById("fire").style.opacity = 0;
      document.getElementById("windowdark").style.opacity = 0
  }, 1200);

};
function boobs() {
  document.getElementById("windowdark").style.width = 0
  document.getElementById("fire").style.width = 0;
  document.getElementById("windowdark").style.height = 0
  document.getElementById("fire").style.height = 0;
}
setTimeout(boobs , 3800)
