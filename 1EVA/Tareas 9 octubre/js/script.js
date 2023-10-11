window.onload=inicio;

function inicio(){
    let navegacion=document.querySelectorAll("nav ul li a");
    console.log(navegacion);

    let logo=document.querySelector("[href='#myPage']");
    let image=document.createElement("img");
    logo.textContent="";
    logo.appendChild(image);

    image.src="./img/apple-touch-icon.png";

    let nombre=document.querySelector("h1");
    nombre.textContent="2ºDAW";

    let subtitulo=document.querySelector("div p");
    subtitulo.textContent="Los pitbull del Javascript";

let teamDaw=["Manuel", "Mario", "Mauro", "Alvaro", "Raúl"];
let enlaceDaw=["http://practicasmanuelbote.atwebpages.com", "http://raulblazquez.mywebcommunity.org",
"http://mariojuarez.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", 
"http://practicasmanuelbote.atwebpages.com"];

navegacion.forEach(accion);

function accion(item, indice){
    item.textContent=teamDaw[indice];
    item.setAttribute("target", "_blank");
    item.href=enlaceDaw[indice];
}
}