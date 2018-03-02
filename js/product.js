
//tab页切换
$(function(){
    $("#oranger a").on("click",function(){
        var index = $(this).index();
        $(this).parent().next().find(".box").hide().eq(index).show();
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".tablea .box").find(".box").eq(index).show();
        $(".tablea").find(".box").eq(index).animate({"left":0},1000);
    })
});

//锚点跳转
$(function(){
//        获取url
    var url=window.location.href;
    var num=url.indexOf('#');
    if(num!=-1){
        var div_class=url.substr(num+1);
        $(".centera >.container a."+div_class).addClass("hover").siblings().removeClass("hover");
        $("#tablea ."+div_class).show();
        $("#tablea ."+div_class).animate({"left":0},1000);
    }else{
        $(".tablea").find(".box:first").show();
        $(".tablea").find(".box:first").animate({"left":0},1000);
    }
});