$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("header");
        $(".icon-bar").addClass("bar");
        $(".icon-bar").removeClass("bar-inv");
        $(".logo").addClass("logo-inver1");
        $(".logo").removeClass("logo-inver");                
;
        $(".link-header").removeClass("inver1");
        $(".navbar-fixed-top").removeClass("nav-transp");
    } else { 
        $("#menu").removeClass("header");
        $(".icon-bar").removeClass("bar");
        $(".icon-bar").addClass("bar-inv");
        $(".logo").removeClass("logo-inver1");
        $(".logo").addClass("logo-inver");
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
  




