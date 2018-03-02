var arr=location.href.split("/");
var a=arr[arr.length-1];
$("#menu li>a").each(function () {
    if($(this).attr("href")==a){
    $(this).parent().addClass("active");
    }
});
