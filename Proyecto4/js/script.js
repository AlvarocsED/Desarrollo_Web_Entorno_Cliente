AnimationEffectconst colores = ['#FF0000','#00FF00','#0000FF','#FFFF00','#FF69B4','#FFA500'];
const nombres=["Red","Green","Blue","Yellow","Pink","Orange"];

let btnJugar = document.getElementById("jugar").onclick = llamar;
let btnParar = document.getElementById("parar").onclick = parar;
let caja = document.getElementById("fondo1");
let spanTiempo = document.getElementById("sptiempo");
let spanPtos = document.getElementById("sppuntos");

let tiempo;
let num1 = 0;
let num2 = 0;
let puntos = 0;
let contadorTiempo = 1;

function llamar(){
    puntos = 0;
    contadorTiempo = 1;

    document.getElementById("jugar").disabled = true;

    spanPtos.textContent = "Puntuación: " + puntos;
    spanTiempo.textContent = "Segundos: " + contadorTiempo + "/30";
    tiempo = setInterval(jugar, 1000);
}

function jugar(){

    contadorTiempo++;
    spanTiempo.textContent = "Segundos: " + contadorTiempo + "/30";

    caja.onclick = function(){};

    num1 = Math.floor(Math.random()*5);
    num2 = Math.floor(Math.random()*5);

    caja.style.background = "" + colores[num1];
    caja.textContent = "" + nombres[num2];

    if(num1 == num2){
        caja.onclick = function(){
            puntos++;
            spanPtos.textContent = "Puntuación: " + puntos;
        };
    }

    if(contadorTiempo == 30){
        parar();
        document.getElementById("jugar").disabled = false;
        caja.onclick = function(){};
    }

}

function parar(){

    document.getElementById("jugar").disabled = false;
    clearInterval(tiempo);

}