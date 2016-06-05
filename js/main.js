<<<<<<< HEAD
function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }
   },intervalo);
};

var texto = "Programando con pasión y espíritu verde";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.

=======
>>>>>>> 44b9cd13e14d1c2e894f58979ebef998d6520565

 $(function(){
  	$('.portfolio_item').mixItUp();
  	maquina("maquina",texto,150);
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

   