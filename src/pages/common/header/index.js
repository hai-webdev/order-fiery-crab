// 头部的js代码
import "swiper/css/swiper.min.css";
import "./index.less";

$(window).scroll(function(){
    if($(window).scrollTop() > 20){
      $(".pc-header").addClass("hover");  
    } else {
        $(".pc-header").removeClass("hover");  
    }
})

$(".menu-btn").on("click",function(){
  $(this).toggleClass("on");
  $('.nav-container').slideToggle();
})