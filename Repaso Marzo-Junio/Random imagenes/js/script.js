window.onload=inicio;
function inicio(){
    let btnJugar=document.getElementById("jugar");
    let principal=document.getElementById("cajaPadre");
    let btnReinicio=document.getElementById("reset");
    let imgRep=document.getElementById("sppuntos2");
    let repe=0;
    btnJugar.onclick=imagen;
    function imagen(){
        let randomImg=Math.round(Math.random()*15);
        let foto=document.createElement("img");
        foto.setAttribute("src", "./img/"+randomImg+".JPG");
        principal.appendChild(foto);
        for (let i=0;i<randomImg;i++){
            if (i==randomImg) {
                repe++;
                imgRep.textContent=repe;
                principal.appendChild(imgRep);
            }
            else{

            }
            btnReinicio.onclick=resetear;
        }
    }
    function resetear(){

    }
}