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
    var widthW;
    var tablet = 992;
    var movil = 768;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        widthW =  $(window).width();
        if(scroll > 200 && widthW > tablet){
            if(!flag){
                $(".nav-1").css({"margin-top": "0%","margin-left": "5%"});
                $("#logo").css({"height":"50px"});
                $(".name").css({"font-size":"2rem"});

                //$("nav-1").css({"background-color": "#3C3C3C"});
                flag = true;
            }
        } else if(scroll > 120 && widthW < tablet && widthW >= movil){
            if(!flag){
                $(".nav-1").css({"margin-top": "0%","margin-left": "5%"});
                $("#logo").css({"height":"50px"});
                $(".name").css({"font-size":"2rem"});

                //$("nav-1").css({"background-color": "#3C3C3C"});
                flag = true;
            }
        }else if(scroll > 80 &&  widthW < movil){
            if(!flag){
                $(".nav-1").css({"margin-top": "0%","margin-left": "5%"});
                $("#logo").css({"height":"50px"});
                $(".name").css({"font-size":"2rem"});

                //$("nav-1").css({"background-color": "#3C3C3C"});
                flag = true;

            }
        }else  if(scroll < 200 && widthW > tablet){
            if(flag){
                $(".nav-1").css({"margin-top": "17%","margin-left": "25%"});
                $("#logo").css({"height":"200px"});
                $(".name").css({"font-size":"10rem"});
                //$("nav-1").css({"background-color": "transparent"});
                flag = false;
            }
        }
        else  if(scroll < 120 && widthW < tablet && widthW >= movil){
            if(flag){
                $(".nav-1").css({"margin-top": "20%","margin-left": "25%"});
                $("#logo").css({"height":"150px"});
                $(".name").css({"font-size":"6rem"});
                //$("nav-1").css({"background-color": "transparent"});
                flag = false;
            }
        }else  if(scroll < 80 && widthW < movil){
            if(flag){
                $(".nav-1").css({"margin-top": "50%","margin-left": "25%"});
                $("#logo").css({"height":"80px"});
                $(".name").css({"font-size":"3rem"});
                //$("nav-1").css({"background-color": "transparent"});
                flag = false;
            }
        }


    });

});

 /*   function sizeWindow(){
        var widthW =  $(window).width();
        var tablet = 992;
        var movil = 768;
        if(widthW < tablet && widthW > movil){
        $('#dispositivo').removeClass();
        $('#dispositivo').addClass('tablet');
        
        }else if(widthW > tablet){
        $('#dispositivo').removeClass();
        $('#dispositivo').addClass('desktop');
        }else if(widthW < movil){
        $('#dispositivo').removeClass();
        $('#dispositivo').addClass('movil');
        }
    }

    $(document).ready(function() {
        sizeWindow()
    }); 

    $(window).resize(function() {
        sizeWindow()
    }); */