//Declaramos los objetos del DOM
let btnEmpezar = document.getElementById("comenzar");
let btnFin = document.getElementById("fin");
let btnComprobar = document.getElementById("comprobar");

let spanNum1 = document.getElementById("numero1");
let spanNum2 = document.getElementById("numero2");
let spanOperador = document.getElementById("operadores");
let resultado = document.getElementById("result");
let caja = document.getElementById("caja");

//Declaramos variables
let tiempo;
let contadorTiempo = 0;
let cuenta = 0;
let aciertos = 0;
let fallos = 0;
let banderaComprobar = false;

btnComprobar.disabled = true;

//Creamos el div que tendrÃ¡ un mensaje u otro dependiendo del resultado
let congrats = document.createElement("div");
congrats.setAttribute("id", "mensajeResultado");


//Evento click del botÃ³n empezar
btnEmpezar.onclick = function(){

    //Limpiamos variables por si no fuera la primera ejecuciÃ³n
    cuenta = 0;
    aciertos = 0;
    fallos = 0;
    congrats.textContent = "";
    banderaComprobar = false;


    //Habilitamos botÃ³n "comprobar" y deshabilitamos botÃ³n "empezar"
    btnComprobar.disabled = false;
    btnEmpezar.disabled = true;

    //Ponemos el focus en el input de resultado
    resultado.focus();

    //Detectamos la pulsaciÃ³n del Enter para saltar a comprobar el resultado
    resultado.addEventListener("keydown", function(evento){
        if (evento.code == "Enter") {
            if(!banderaComprobar){
                comprobar();
                banderaComprobar = true;
            }
        }
    });

    //AÃ±adimos los aciertos a un marcador
    caja.textContent = "PuntuaciÃ³n: " + aciertos + ".  Fallos: " + fallos;

    //Primera ejecuciÃ³n
    jugar();

    //Ponemos en marcha el temporizador
    tiempo = setInterval(jugar, 10000);

};


//FunciÃ³n del juego
function jugar(){

    //Reseteamos la booleana
    banderaComprobar = false;

    //Generamos dos nÃºmero aleatorios
    let numRandom1 = Math.floor(Math.random() * 50);
    let numRandom2 = Math.floor(Math.random() * 50);

    //Mostramos los nÃºmeros aleatorios generados por pantalla
    spanNum1.textContent = "" + numRandom1;
    spanNum2.textContent = "" + numRandom2;


    //Generamos un nÃºmero entre 0 y 3 para determinar el operador de la operaciÃ³n
    let operator = Math.floor(Math.random()*3);

    //SegÃºn el nÃºmero que se genere se harÃ¡ una cuenta u otra
    switch(operator){

        case 0: cuenta = numRandom1 + numRandom2; spanOperador.textContent = "+";
            break;
        case 1: cuenta = numRandom1 - numRandom2; spanOperador.textContent = "-";
            break;
        case 2: cuenta = numRandom1 * numRandom2; spanOperador.textContent = "*";
            break;
        case 3: cuenta = numRandom1 / numRandom2; spanOperador.textContent = "/";
            break;

    }

    //Volvemos a habilitar el botÃ³n "comprobar"
    btnComprobar.disabled = false;

}


//Evento click del botÃ³n comprobar
btnComprobar.onclick = comprobar()

function comprobar(){

    //Comprobamos si el resultado estÃ¡ bien o mal y modificamos el marcador respectivo
    if("" + cuenta == "" + resultado.value){
        aciertos++;
    }else{
        fallos++;
    }

    //Actualizamos los aciertos y fallos en pantalla
    caja.textContent = "PuntuaciÃ³n: " + aciertos + ".  Fallos: " + fallos;

    //Deshabilitamos el botÃ³n "comprobar" para que sÃ³lo se pueda poner un resultado por operaciÃ³n y limpiamos el input
    btnComprobar.disabled = true;
    resultado.value = "";

    resultado.focus();

}


//Evento click del botÃ³n "Fin"
btnFin.onclick = function(){

    //Quitamos el temporizador
    clearInterval(tiempo);

    //Volvemos a deshabilitar el botÃ³n "comprobar", limpiamos etiquetas y activamos botÃ³n comenzar
    btnComprobar.disabled = false;
    btnEmpezar.disabled = false;

    spanNum1.textContent = "0";
    spanOperador.textContent = "?";
    spanNum2.textContent = "0";
    resultado.value = "";

    //Mostramos mensaje de fin de juego con los resultados
    if(aciertos > fallos){
        congrats.style = "margin:0 auto;color:green;text-align:center;font-size:30px;margin-top:40px;";
        congrats.textContent = "Felicidades, has obtenido " + aciertos + " aciertos y tan sÃ³lo " + fallos + " fallos.";

    }else if(aciertos < fallos){
        congrats.style = "margin:0 auto;color:red;text-align:center;font-size:30px;margin-top:40px;";
        congrats.textContent = "Has otenido " + fallos + " fallos y " + aciertos + " aciertos, prueba otra vez.";

    }else{
        congrats.style = "margin:0 auto;color:orange;text-align:center;font-size:30px;margin-top:40px;";
        congrats.textContent = "Has obtenido el mismo nÃºmero de aciertos que de fallos, puedes mejorar.";

    }

}

document.body.appendChild(congrats);