$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("header");
        $(".icon-bar").addClass("bar");
        $(".icon-bar").removeClass("bar-inv");
        //$(".logo").addClass("logo-inver1");
       // $(".logo").removeClass("logo-inver");                
        $(".link-header").removeClass("inver1");
        $(".navbar-fixed-top").removeClass("nav-transp");
    } else { 
        $("#menu").removeClass("header");
        $(".icon-bar").removeClass("bar");
        $(".icon-bar").addClass("bar-inv");
       // $(".logo").removeClass("logo-inver1");
       // $(".logo").addClass("logo-inver");
        $(".navbar-fixed-top").addClass("nav-transp");

    }
});

$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});
$(document).ready(function() {
    $(".link4").click(function() {
        $("html, body").animate({scrollTop: $("#contacto").offset().top}, 2000);
    });
    $(".link1").click(function() {
        $("html, body").animate({scrollTop: $("#Sobremi").offset().top}, 2000);
    });
    $(".link2").click(function() {
        $("html, body").animate({scrollTop: $("#portafolio").offset().top}, 2000);
    });
    $(".link3").click(function() {
        $("html, body").animate({scrollTop: $("#habilidades").offset().top}, 2000);
    });
    $(".navbar-brand").click(function() {
        $("html, body").animate({scrollTop: $("#hero").offset().top}, 2000);
    });
});
  




$(document).ready(function(){

    //$("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200){
            if(!flag){
                $(".nav-1").css({"margin-top": "0%","margin-left": "5%"});
                $("#logo").css({"height":"50px"});
                $(".name").css({"font-size":"2em"});
                //$("nav-1").css({"background-color": "#3C3C3C"});
                flag = true;
            }
        }else{
            if(flag){
                $(".nav-1").css({"margin-top": "17%","margin-left": "25%"});
                $("#logo").css({"height":"200px"});
                $(".name").css({"font-size":"10em"});
                //$("nav-1").css({"background-color": "transparent"});
                flag = false;
            }
        }


    });

});