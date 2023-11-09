window.addEventListener("load", inicio);
function inicio(){
    let boton=document.querySelector("botonadd");
    boton.addEventListener("click", insertarUsuario);
    tabla=document.querySelector("tabla");
    cargarTabla();
}
