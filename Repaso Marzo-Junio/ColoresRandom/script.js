window.onload=inicio;
function inicio(){
    let nombres=["Rosa", "Amarillo", "Rojo", "Verde"];
    let colores=["pink", "yellow", "red", "green"];
    let fondo=document.getElementById("colors");
    let btnJugar=document.getElementById("play");
    let puntos=document.getElementById("pts");
    let tiempo=document.getElementById("tie");
    btnJugar.onclick=empezar;
    let ptso=0;    
    let segundos=30;
    function empezar(){
      btnJugar.setAttribute("disabled",true)
        time=setInterval(jugar, 1000);
        function jugar(){
            segundos--;
            if (segundos==0){
                clearInterval(time);
                btnJugar.setAttribute("disabled",false);
            }
            tiempo.innerHTML=segundos;
            let nNombresRandom=Math.round(Math.random() *3);
            let nColoresRandom=Math.round(Math.random()*3);
            fondo.textContent=nombres[nNombresRandom];
            fondo.style.backgroundColor=colores[nColoresRandom];
            fondo.onclick=function(){
                if (nNombresRandom==nColoresRandom){
                    ptso++;
                   
            }else{
                ptso--;
                
            }
            puntos.textContent=ptso;
        }
        
        
    }
   
    }
}