//window.addEventListener("load",inicio);
//La función inicio es llamada por el objeto window, representa la ventana del navegador, cuando se termina de cargar la página. Contiene los métodos alert, prompt, confirm
window.onload = inicio;
// window.addEventListener('DOMContentLoaded', inicio);
// El evento DOMContentLoaded se dispara cuando el contenido del archivo HTML se ha cargado en el navegador, sin necesitar esperar imágenes, hojas de estilo etc.
let intentos=0;
function inicio(){
console.log("entro en js");
const vectorColores=['Yellow','Pink','Orange','Purple']

let nota1=Math.round(Math.random()*100);
console.log(nota1);
let nota2=Math.round(Math.random()*100);
console.log(nota2);

const dias=document.getElementsByTagName("li");
const lista=document.getElementsByTagName("ul")
for (let item of dias){
item.textContent=Math.round(Math.random()*1000);
item.style.color='Red'
}
document.getElementById("btn1").addEventListener("click",accion1);
document.getElementById("btn2").addEventListener("click",accion2);
document.getElementById("btn3").addEventListener("click",accion3);
let boton4=document.getElementById("btn4");
boton4.addEventListener("click",accion4);
// document.getElementById("btn1").onclick = function() {}
//document.getElementById("btn1").onClick=accion1();

function accion1(){
for (let item of dias){
item.textContent=Math.round(Math.random()*1000);
item.style.color='Red';
}
}
function accion2(){
for (let item of dias){
let num=Math.round(Math.random()*1000);
item.textContent=num;
if (num>500){
 item.style.color='Blue';

}else
{
 item.style.color='Green';

}
}
}
function accion3(){
for (let item of dias){
let colorX=Math.round(Math.random()*4);
item.style.color=vectorColores[colorX];
}
}
function accion4(){
intentos++;
let nota1=Math.round(Math.random()*10);
console.log(nota1);
let nota2=Math.round(Math.random()*10);
console.log(nota2);
document.getElementById("etiqueta1").innerText=nota1;
document.getElementById("etiqueta2").innerText=nota2;
if (nota1==nota2){
alert ("Iguales: "+intentos)
}

}
}   