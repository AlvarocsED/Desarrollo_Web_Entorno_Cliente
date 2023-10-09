window.onload=inicio;

function inicio(){
    
    let enlaces = document.querySelectorAll("a");
    console.log(enlaces); 

    var doe = 0;
    var dompt = 0;
    
    enlaces.forEach(accion);

    function accion(item,indice){
        if(item.href.includes("doe")){
            doe++;
        }

        if(item.href.includes("pt")){
            dompt++;
            console.log(item);
            setInterval(lanzar, 3000);
            function lanzar(){
                
            }
        }
    }
    console.log("Numero de apariciones de doe: " + doe);
    console.log("Numero de apariciones de dominios portugueses: " + dompt);

    
}