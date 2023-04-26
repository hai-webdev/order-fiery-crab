
import "../common/header";
import "../common/banner";
import "../common/footer";
// 引入公共css
import "../common/reset.css";
import "@/assets/global.less";
import "./index.less";

$(".menu-tab-item").on("click", function(){
    $(this).addClass("on").siblings().removeClass("on");
    const index = $(this).index();
    $(".menu-item").eq(index).show().siblings().hide();
})