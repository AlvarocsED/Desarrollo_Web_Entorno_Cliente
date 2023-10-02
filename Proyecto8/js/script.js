console.log("entro en js");
//construir el vector de componentes
const componentes=[];
let botonX=document.getElementById("mover");
//identificar más parte del diseño. Body
const bodyP=document.querySelector("body");

//crear o diseñar la estructura html
const contenedorPrincipal=document.createElement("div");
//añadirle estilo
contenedorPrincipal.className="container";

//contenedores secundarios
const contenedorTodos=document.createElement("fieldset");
//añadir estilo
contenedorTodos.className="gallery";
//añadir leyenda
let leyendaTodos=document.createElement("legend");
leyendaTodos.textContent="Total";
contenedorTodos.appendChild(leyendaTodos);

//azul
//contenedores secundarios
const contenedorAzul=document.createElement("fieldset");
//añadir estilo
contenedorAzul.className="gallery";
//añadir leyenda
let leyendaAzul=document.createElement("legend");
leyendaAzul.textContent="AZUL";
contenedorAzul.appendChild(leyendaAzul);

//rojo
//contenedores secundarios
const contenedorRojo=document.createElement("fieldset");
//añadir estilo
contenedorRojo.className="gallery";
//añadir leyenda
let leyendaRojo=document.createElement("legend");
leyendaRojo.textContent="ROJO";
contenedorRojo.appendChild(leyendaRojo);

//naranja
//contenedores secundarios
const contenedorNaranja=document.createElement("fieldset");
//añadir estilo
contenedorNaranja.className="gallery";
//añadir leyenda
let leyendaNaranja=document.createElement("legend");
leyendaNaranja.textContent="NARANJA";
contenedorNaranja.appendChild(leyendaNaranja);

//verde
//contenedores secundarios
const contenedorVerde=document.createElement("fieldset");
//añadir estilo
contenedorVerde.className="gallery";
//añadir leyenda
let leyendaVerde=document.createElement("legend");
leyendaVerde.textContent="VERDE";
contenedorVerde.appendChild(leyendaVerde);
//llenar de contenido el contenedor Total
for (let i=0;i<20;i++){
    let numAl=Math.floor(Math.random()*4);
    let elemento=document.createElement("div");
    elemento.className="gallery div";
    elemento.style.width="100px";
    elemento.style.height="50px";
    switch (numAl){
        case 0:elemento.style.backgroundColor="blue";
               elemento.textContent="AZUL";
               break;
        case 1:elemento.style.backgroundColor="green";
        elemento.textContent="VERDE";
        break;
        case 2:elemento.style.backgroundColor="red";
        elemento.textContent="ROJO";
        break;
        case 3:elemento.style.backgroundColor="orange";
        elemento.textContent="Naranja";
        break;

        
        
        
    }
    contenedorTodos.appendChild(elemento);
    componentes.push(elemento);
    
    }

botonX.onclick=mover;
function mover(){
    componentes.forEach(accion);
    function accion(item,indice){
       
        //let color=window.getComputedStyle(item).getPropertyValue('background-color');
        let color=item.style.backgroundColor;
        switch(color){
            case "red":contenedorRojo.appendChild(item);break;
            case "green":contenedorVerde.appendChild(item);break;
            case "blue":contenedorAzul.appendChild(item);break;
            case "orange":contenedorNaranja.appendChild(item);break;
           
        }
       
       
    }
}
//añadir los secundarios al principal
contenedorPrincipal.appendChild(contenedorTodos);
contenedorPrincipal.appendChild(contenedorAzul);
contenedorPrincipal.appendChild(contenedorRojo);
contenedorPrincipal.appendChild(contenedorNaranja);
contenedorPrincipal.appendChild(contenedorVerde);
//
//añadir el contenedor principal al body
bodyP.appendChild(contenedorPrincipal);