/**
 * Created by admin on 2018/1/31.
 */
//tab页切换
$(function(){
    $(".tablea").find(".box:first").show();
    $("#oranger a").on("click",function(){
        var index=$(this).index();
        $(this).parent().next().find(".box").hide().eq(index).show();
        $(this).addClass("hover").siblings().removeClass("hover");
        $(".tablea .box").find(".box").eq(index).show();
    })
});
//锚点跳转
$(function(){
//        获取url
    var url=window.location.href;
    var num=url.indexOf('#');
    console.log(num);
    if(num!=-1){
        var div_class=url.substr(num+1);
        console.log(div_class)
        $(".centera >.container a."+div_class).addClass("hover").siblings().removeClass("hover");

        $("#tablea ."+div_class).show().siblings().hide();
        $("#tablea ."+div_class).animate({"left":0},1000);
    }else{
        $(".tablea").find(".box:first").show();
        $(".tablea").find(".box:first").animate({"left":0},1000);
    }
});
