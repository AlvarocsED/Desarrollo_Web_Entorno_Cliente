window.onload=inicio;
function inicio(){
    let imagenes=document.querySelectorAll("img");
    imagenes.forEach(accion);
    function accion(item, indice){
        let nRandom=Math.round(Math.random()*3);
        if (nRandom==0){
            item.className="borde1";
        }
        if (nRandom==1){
            item.className="borde2";
        }
        if (nRandom==2){
            item.className="borde3";
        }
        let imgRandom=Math.round(Math.random()*5);
        item.setAttribute("src","./img/img"+imgRandom+".jpg");
    }
} 