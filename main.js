let tarjetaDespatadas = 0;
let tarjeta1= null;
let tarjeta2= null;
let primerResultado = null;
let segundoResultado = null;
let movimientos= 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial=30;
let tiempoRegresivoId =null;

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante')



let numero=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numero = numero.sort(()=>{return Math.random()-0.5});
console.log(numero);

function contartiempo(){
tiempoRegresivoId = setInterval(()=>{
   timer--;
   mostrarTiempo.innerHTML =`Tiempo: ${timer}segundos`;
   if(timer==0){
      (tiempoRegresivoId);
      bloquearTarjetas();
   }
},1000);

}

function bloquearTarjetas(){
   for(let i = 0; i<=15; i++){
      let tarjetaBloqueada = document.getElementById(i);
      tarjetaBloqueada.innerHTML =`<img src="./images/${numero[i]}.png alt="">`;
      tarjetaBloqueada.disabled = true;
   }
}

function destapar(id){

if(temporizador == false){
   contartiempo();
   temporizador= true;
}


tarjetaDespatadas++;
console.log(tarjetaDespatadas);


if(tarjetaDespatadas == 1){

    tarjeta1 =document.getElementById(id);
    primerResultado =numero[id]
    tarjeta1.innerHTML = `<img src="./images/${primerResultado}.png alt="">`;
    
    tarjeta1.disabled = true;
 }else if(tarjetaDespatadas ==2){

    tarjeta2 =document.getElementById(id);
    segundoResultado = numero[id]
    tarjeta2.innerHTML= `<img src="./images/${segundoResultado}.png alt="">`;;
    
    tarjeta2.disabled = true;

    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;


      if(primerResultado == segundoResultado){
      tarjetaDespatadas = 0;
      
      aciertos++;
      mostrarAciertos.innerHTML= `Aciertos:${aciertos}`;

      if(aciertos == 8){
      clearInterval(tiempoRegresivoId);
      mostrarAciertos.innerHTML= `Aciertos:${aciertos}😮` 
      mostrarTiempo.innerHTML =`Fantastico Solo te demoraste ${timerInicial - timer }segundos`
      mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}💡` 
      }
   }else{
      setTimeout(()=>{
         tarjeta1.innerHTML = ' ';
         tarjeta2.innerHTML = ' ';
         tarjeta1.disabled  = false;
         tarjeta2.disabled = false;
         tarjetaDespatadas = 0;
      },800);
   }
    
   
   }
}