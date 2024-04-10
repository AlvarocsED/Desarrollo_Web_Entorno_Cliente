window.onload=inicio;
function inicio()    {
    let num1=document.querySelector("#n1");
    let num2=document.getElementById("n2");
   let pts=document.getElementById("puntos");
    let time=document.getElementById("tiempo");
    let btnJugar=document.getElementById("jugar");
    btnJugar.onclick=jugar;
    let n1random=Math.round(Math.random()*50)+1;
    let n2random=Math.round(Math.random()*50)+1;
    let suma=n1random+n2random;

    console.log(n1random);
    console.log(num1);
     num1.setAttribute("value",n1random);
     num2.setAttribute("value",n2random);
let ptos=0;
     num2.textContent=n2random;
     let segundos=10;
     function contarSegundos(){
        segundos--;
        time.setAttribute("value",segundos);
        if (segundos==0){
            clearInterval(temporizador)
            document.getElementById("res").disabled=true;
        }
     }
     temporizador=setInterval(contarSegundos,1000);
        function jugar(){
            let result=document.getElementById("res").value;
            console.log("suma programa"+suma);
            console.log("resultado del jugador"+result);
          if (suma==parseInt(result)){
         
                  ptos++;
                 
          }else
          {
            ptos--;
          }
          pts.setAttribute("value",ptos);

           n1random=Math.round(Math.random()*50)+1;
           n2random=Math.round(Math.random()*50)+1;
           suma=n1random+n2random;
           num1.setAttribute("value",n1random);
           num2.setAttribute("value",n2random);
           document.getElementById("res").value=null;
           document.getElementById("res").focus();
           puntos();
           function puntos(){

           }
       
        
      
    }

}                        