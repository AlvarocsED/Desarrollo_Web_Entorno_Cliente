window.onload=inicio;
function inicio(){
    const vectorComponentes=[];
    let btnMover=document.getElementById("mover");
    btnMover.onclick=mover;
    let cuerpo=document.getElementById("total");
    cuerpo.className="container";
    let principal=document.createElement("div");
    cuerpo.appendChild(principal);

    principal.className="gallery";
   
    let divRojo=document.createElement("div");
    divRojo.className="gallery";
    let divVerde=document.createElement("div");
    divVerde.className="gallery";
    let divAzul=document.createElement("div");
    divAzul.className="gallery";
    let divNaranja=document.createElement("div");
    divNaranja.className="gallery";
    cuerpo.appendChild(divRojo);
    cuerpo.appendChild(divVerde);
    cuerpo.appendChild(divAzul);
    cuerpo.appendChild(divNaranja);
    for (let i = 0; i < 20; i++) {
        let caja=document.createElement("div");
        caja.className="gallery div";
        caja.textContent="xxx";
        vectorComponentes.push(caja);
        principal.appendChild(caja);
        let nRandom=Math.round(Math.random()*3);
        switch (nRandom) {
            case 0:caja.textContent="Azul";
                caja.style.backgroundColor="blue"
                break;
            case 1:caja.textContent="Verde";
                caja.style.backgroundColor="green"
                break;
            case 2:caja.textContent="Rojo";
                caja.style.backgroundColor="red"
                break;
            case 3:caja.textContent="Naranja";
                caja.style.backgroundColor="orange"
                break;
        
            default:
                break;
        }
    }
    function mover(){
        console.log(btnMover);
        vectorComponentes.forEach(accion)      ;
        function accion (item,indice){
            console.log("posicion:"+indice+"contenido: "+item.style.backgroundColor);
            switch(item.style.backgroundColor){
                case "blue": divAzul.appendChild(item);
                break;
                case "orange":divNaranja.appendChild(item);
                break;
                case "green": divVerde.appendChild(item);
                break;
                case "red": divRojo.appendChild(item);
                break;
            }
        }

        }
    
}