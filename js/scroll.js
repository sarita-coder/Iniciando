$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 100) {
        $("#menu").addClass("header");
        $(".icon-bar").addClass("bar");
        $(".icon-bar").removeClass("bar-inv");
        $(".logo").addClass("logo-inver1");
        $(".logo").removeClass("logo-inver");                
        $(".link-header").addClass("inver");
        $(".link-header").removeClass("inver1");

    } else { 
        $("#menu").removeClass("header");
        $(".icon-bar").removeClass("bar");
        $(".icon-bar").addClass("bar-inv");
        $(".link-header").removeClass("inver");
        $(".link-header").addClass("inver1");
        $(".logo").removeClass("logo-inver1");
        $(".logo").addClass("logo-inver");

    }


});

$(".navbar-toggle").click(function(){
  $(this).toggleClass("open");
});
