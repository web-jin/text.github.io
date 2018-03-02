$(function(){
    //导航条
    $(".navbar-collapse .navbar-nav>li>a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
});
// 轮播图
$(document).ready(function(){
    $('#circleContent').carousel({interval:5000});//每隔5秒自动轮播
});
// 第二部分左侧：公告动态
$(function () {
        var oUl = $("#news ul")[0];
        var speed = -1;//初始化速度
        oUl.innerHTML += oUl.innerHTML;//图片内容*2
        var oLi = oUl.children;
        oUl.style.height = oLi.length * 50 + 'px';//设置ul的宽度使图片可以放下
        function move() {
            if (oUl.offsetTop < -(oUl.offsetHeight / 2)) {
                oUl.style.top = 0;
            }
            if (oUl.offsetTop > 0) {
                oUl.style.top = -(oUl.offsetHeight / 2) + 'px';
            }
            oUl.style.top = oUl.offsetTop + speed + 'px';
        }
        var timer = setInterval(move, 100);//全局变量 ，保存返回的定时器
        $("#news").on('mouseout', function () {
            timer = setInterval(move, 100);
        });
        $("#news").on('mousemove', function () {
            clearInterval(timer);//鼠标移入清除定时器
        });
    }
);
//第三部分：向右箭头
$(function(){
    $(".btn>a").mouseenter(function(){
        $(this).find(".arrow_right").attr("src","../img/write.png");
    });
    $(".btn>a").mouseleave(function(){
        $(this).find(".arrow_right").attr("src","../img/yellow.png");
    });
});


