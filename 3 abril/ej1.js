window.onload=inicio;
function inicio(){
    let boton=document.getElementById("btnJ");
    console.log(boton)
    boton.onclick=jugar;
    let bool=true;
    let vectorNum=[];
     function jugar(){
       let numero1=document.querySelector("#num1").value;
       let numero2=document.querySelector("#num2").value;
       let numero3=document.querySelector("#num3").value;
       let numero4=document.querySelector("#num4").value;
       let numero5=document.querySelector("#num5").value;
       let numero6=document.querySelector("#num6").value;
       let small1=document.querySelector("#idsmall1");
       let small2=document.querySelector("#idsmall2");
       let small3=document.querySelector("#idsmall3");
       let small4=document.querySelector("#idsmall4");
       let small5=document.querySelector("#idsmall5");
       let small6=document.querySelector("#idsmall6");
       let small7=document.querySelector("#idnumRep");
       validar(numero1,small1);
       validar(numero2,small2);
       validar(numero3,small3);
       validar(numero4,small4);
       validar(numero5,small5);
       validar(numero6,small6);
       let arrayNumeros=[numero1, numero2, numero3, numero4, numero5, numero6];
       let bool2=false;
       for (let i=0;i<arrayNumeros.length; i++){
        for (let j=0;j<arrayNumeros.length;j++){
            if (i!=j && arrayNumeros[i]==arrayNumeros[j]){
                bool2=false;
                small7.innerHTML="* no pueden estar repetidos"
            }
        }
       }
     }

     function validar(numero, sm){
      
        if (numero==""){
            bool=false;
            console.log("small: "+sm);
            sm.textContent="* campo obligatorio";
        }else if (isNaN(numero)){
            bool=false;
            sm.textContent="* obligatorio número entero";
        }else if (numero >50 || numero<1){
            bool=false;
            sm.textContent=" * entre 1-50";
        }else if (!Number.isInteger(Number(numero))){
            bool=false;
            sm.textContent="* no valen decimales";
        }
     }
       
    }
