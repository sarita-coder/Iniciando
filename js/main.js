
 $(function(){
  	$('.portfolio_item').mixItUp();
});

var desde=0,i=0,maximocaracteres=61,mensaje='Front-end, apasionada por el código y amante de la naturaleza. ';
function mostrar() { 
    var descr=document.getElementById('maquina').innerHTML; 
    if(descr.length>maximocaracteres)desde++; 
    if(i>=maximocaracteres)i=maximocaracteres; 
    if(desde>=mensaje.length-maximocaracteres) { 
        desde=0; 
        i=0; 
    }else{ 
            i++; 
    } 
    document.getElementById('maquina').innerHTML =mensaje.substr(desde, i); 
    if(mensaje.length<=maximocaracteres) 
        document.getElementById('maquina').innerHTML =mensaje; 
} 
function inicio(){ 
    setInterval('mostrar()',250); 
} 
window.onload=inicio; 

   