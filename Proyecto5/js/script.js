//DeclaraciÃ³n de arrays
const imagenes = ['img/0.JPG','img/1.JPG','img/2.JPG','img/3.JPG','img/4.JPG','img/5.JPG','img/6.JPG','img/7.JPG','img/8.JPG','img/9.JPG','img/10.JPG','img/11.JPG','img/12.JPG'];
let resultados=[-1,-1,-1,-1,-1];

//DeclaraciÃ³n de elementos del DOM
let btnJugar = document.getElementById("jugar");

let spanPtos = document.getElementById("sppuntos");
let spanPtos2 = document.getElementById("sppuntos2");


btnJugar.onclick = function(){

    //Inicializo la caja padre
    let cajaPadre = document.querySelector("#cajaPadre");

    //Manera rÃ¡pida de limpiar la caja padre
    //cajaPadre.innerHTML = "";

    //Otra manera de limpiar la caja padre
    let cajasHijas = document.querySelectorAll(".cajas");

    cajasHijas.forEach(function(item, posicion){
        cajaPadre.removeChild(item);
    });
    


    //Limpio el array y creo una bandera de control para que se cambie su valor cuando haya una imagen repetida
    resultados = [99,99,99,99,99];

    let banderaRepetidas = false;

    //Entro en el bucle
    for(let i = 0; i < 5; i++){

        //Genero nÃºmero aleatorio
        let numR = Math.floor(Math.random()*imagenes.length);


        //Si el nÃºmero generado ya estÃ¡ en el array, cambio la bandera
        if(resultados.includes(numR)){
            banderaRepetidas = true;
        }

        //Meto el nÃºmero en el array de las imÃ¡genes elegidas
        resultados[i] = numR;


        //Creo el div que va a contener la imagen 
        let caja = document.createElement("div");
        caja.className = "cajas";

        //Creo la imagen
        let imagen = document.createElement("img");
        imagen.setAttribute("src", "./"+imagenes[resultados[i]]);

        //AÃ±ado la imagen al div y el div al padre/contenedor
        caja.appendChild(imagen);
        cajaPadre.appendChild(caja);

    }

    console.log(resultados[0] + ", " + resultados[1] + ", " + resultados[2] + ", " + resultados[3] + ", " + resultados[4]);
    
    //Una vez fuera del bucle compruebo si hay imÃ¡genes repetidas gracias a la bandera
    if(banderaRepetidas){
        spanPtos.textContent = "HAY REPETIDAS";
    }else{
        spanPtos.textContent = "NO HAY REPETIDAS";
    }


}