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
