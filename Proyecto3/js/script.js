console.log("entro ej js")
document.getElementById("btn1").onclick=funcion1;
document.getElementById("btn2").onclick=funcion2;
document.getElementById("btn3").onclick=funcion3;
document.getElementById("btn4").onclick=funcion4;
document.getElementById("btn5").onclick=funcion5;
document.getElementById("btn6").onclick=funcion6;



function funcion1(){
    console.log("entro");
    const listaComponentes=document.getElementsByClassName("caja");
    
    
    for (let item of listaComponentes){
        console.log("entro");
     item.innerHTML=Math.round(Math.random()*100);
}
}
function funcion2(){
   
    const listaComponentes=document.getElementsByClassName("caja");
    for (let item of listaComponentes){
        let valor=prompt("teclea un número");
        item.innerHTML=valor;
    }
}
function funcion3(){
    const listaComponentes=document.getElementsByClassName("caja");

    setInterval(cambio,3000);
    function cambio(){
        for (let item of listaComponentes){
            console.log("entro");
         item.innerHTML=Math.round(Math.random()*100);
    }
}

}
function funcion4(){
    let vector=[ "#00a8d1", "#9200d1", "#92ffd1", "#ff6a80"]
    const listaComponentes = document.getElementsByClassName("caja");
  
    for (let i = 0; i < listaComponentes.length; i++) {
        let posicion=Math.floor(Math.random()*vector.length);
        console.log(posicion);
        listaComponentes[i].style.backgroundColor = vector[posicion];
       
    }
}
function funcion5(){
    let puntos=0;
    const   vector=[ "red", "green", "blue", "orange"]
    let posicion=Math.floor(Math.random()*vector.length);
    btn5.style.backgroundColor=vector[posicion]
    setInterval(cambio,3000);
    function cambio(){
   
    const listaComponentes = document.getElementsByClassName("caja");
    Array.from(listaComponentes).forEach(function(elemento) {
        let posicion=Math.floor(Math.random()*vector.length);
        elemento.style.backgroundColor=vector[posicion];
        elemento.onclick()=accion1;
        elemento.addEventListener('click', function(){
           if ( elemento.style.backgroundColor==btn5.style.backgroundColor)
           puntos++;
           else puntos--;
           
        });
      });
    }
   
}
function funcion6(){
    let segundos=10;
    repeticion=setInterval(cambio,1000);
    function cambio(){
        c1.innerHTML=segundos;
        segundos--;
        if (segundos==-1){
            alert("fin de partida");
            if (confirm("¿otra partida?"))
            {
                segundos=10;
            }
            else{
                clearInterval(repeticion);
            }
        }
    }
}