window.onload=inicio;
function inicio(){
    let btn1=document.getElementById("avanzar");
    let btn2=document.getElementById("avanzar2");
    let btn3=document.getElementById("avanzar3");
    let principal=document.querySelector("body");
    const componentes=[];
    var i=0;
    crearDivs();
    btn1.onclick=todorojo;
    btn2.onclick=rojoTemp;
    btn3.onclick=rojoAlterno;
    function crearDivs(){
        cajaP=document.createElement("div");
        cajaP.className="container";
        principal.appendChild(cajaP);
        let kroos=document.createElement("div");
        cajaP.appendChild(kroos);
        kroos.className="gallery";
        for (let i = 0; i < 30; i++) {
            let cajaV=document.createElement("div");
            cajaV.className="fondo";
            componentes.push(cajaV);
            kroos.appendChild(cajaV);
            
        }
    }
    function todorojo(){
        componentes.forEach(element => {
            element.style.backgroundColor="red";
            console.log("dentro");
        });
    }
    function rojoTemp(){
        console.log("hola");
        let intervalo=setInterval(cambio, 500);
        function cambio(){
            console.log("en cambio");
            componentes[i].style.backgroundColor="red";
            i++;
            if (i==componentes.length){
                clearInterval(intervalo);
            }
        }
    }
    function rojoAlterno(){
        console.log("hola");
        let intervalo=setInterval(cambio, 500);
        function cambio(){
            console.log("en cambio");
            if (i<componentes.length) {
               componentes[i].style.backgroundColor="red"; 
            }
            
            if (i>0) {
                componentes[i-1].style.backgroundColor="green";
                if (i==componentes.length){
                    componentes[componentes.length-1].style.backgroundColor="green";
                    i=-1;
            }
        }
            i++;
        
            
                
                
            }
    }
}
