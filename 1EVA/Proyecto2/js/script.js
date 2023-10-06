document.getElementById("btn1").addEventListener("click",funcion1);
document.getElementById("btn2").addEventListener("click",funcion2);
document.getElementById("btn3").addEventListener("click",funcion3);
document.getElementById("btn4").addEventListener("click",funcion4);
document.getElementById("btn5").addEventListener("click",funcion5);
document.getElementById("btn6").addEventListener("click",funcion6);
function funcion1(){
    document.getElementById("c1").style.backgroundColor="green";
}
function funcion2(){
    let aleatorio=Math.round(Math.random()*100);
    with (document.getElementById("c2")){
      innerText=aleatorio;
      style.backgroundColor="yellow";
      style.fontSize="45px";
    }
}
function funcion3(){
    let numero1=prompt("Teclea número 1");
    let numero2=prompt("teclea número 2");
    let suma=parseInt(numero1)+parseInt(numero2);
    with (document.getElementById("c3")){
        innerText=suma;
        style.backgroundColor="lightblue";
        style.fontSize="25px";
    }
}

function funcion4(){
    let numeroX=Math.round(Math.random()*10);
   console.log("entro f4");
    let intentos=0;
    let fin=false;
    while(!fin){
        let numeroMio=prompt("¿Cuál es el número X?");
        intentos++;
        if (parseInt(numeroX)==parseInt(numeroMio)){
            fin=true;
            alert("Aciertas!!!!!")
            with (document.getElementById("c4")){
                innerHTML="Intentos:<br>"+intentos;
                style.backgroundColor="orange";
                style.fontSize="15px";
            }
      
        }
    }
    }
    function funcion5(){
    const fecha=new Date();
   
    document.getElementById("c5").innerText=fecha.getFullYear();
}
function funcion6(){
    const fecha=new Date();

    const anio = fecha.getFullYear(); // return años
const mes = fecha.getMonth() + 1; // return meses(0 - 11)
const dia = fecha.getDate(); // return días (1 - 31)
const hora = fecha.getHours(); // return horas (0 - 23)
const minuto = fecha.getMinutes(); // return minutos (0 -59)
document.getElementById("c6").innerText=hora+":"+minuto+"\n"+dia+"/"+mes+"/"+anio;
}
   