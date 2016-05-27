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
