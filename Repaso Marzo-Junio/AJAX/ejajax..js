window.onload=inicio;
function inicio(){
    console.log("hemnos llegado");
    let btnRadio=document.getElementsByName('ciclos');
    let mods=document.querySelectorAll('input[type="checkbox"]');
    let sel=document.getElementById("curso");
    let nombr=document.getElementById("nom");
    let boton=document.querySelector('#aceptar');
    var nombre;
    var vector=[];
    boton.onclick=function(){
        console.log("entro en eventno");
        for (var i=0; i<btnRadio.length; i++){
            console.log("entro en bucle");
            if (btnRadio[i].checked){
                console.log(btnRadio[i].value)
                nombre=btnRadio[i].value;
            }
        }
        for (var i=0;i<mods.length;i++){
            console.log("entre en bucle check");
            if (mods[i].checked){
                console.log(mods[i].value);
                vector.push(mods[i].value);

            }
           
        }
         console.log(sel.value);
         console.log(nombr);
         alert("Nombre: "+nombr.value+" Curso: "+sel+" Modulo: "+vector+" Ciclo: "+nombre);

    
    }
    
}