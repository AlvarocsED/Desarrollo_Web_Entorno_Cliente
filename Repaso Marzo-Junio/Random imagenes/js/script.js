window.onload=inicio;
function inicio(){
    let btnJugar=document.getElementById("jugar");
    let principal=document.getElementById("cajaPadre");
    btnJugar.onclick=imagen;
    function imagen(){
        let randomImg=Math.round(Math.random()*15);
        let foto=document.createElement("img");
        foto.setAttribute("src", "./img/"+randomImg+".JPG");
        principal.appendChild(foto);
    }
}