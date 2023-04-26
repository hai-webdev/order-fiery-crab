
import "../common/header";
import "../common/banner";
import "../common/footer";
// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";
import "./index.less";



import swiper from "swiper";
const bannerSwiper = new swiper(".banner-swiper", {
    
})

const testimonialsSwiper = new swiper(".testimonials-box", {
    pagination: {
        el: '.swiper-pagination',
        clickable:true
      },
})