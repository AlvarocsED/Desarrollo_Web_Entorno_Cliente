window.onload=inicio;
function inicio(){
    let bŧnMostrar=document.getElementById("btnMostrar");
    btnMostrar.onclick=mostrar;
    function mostrar(){
        let contFoto=document.getElementById("contenedor");
        fetch("https://randomuser.me/api").then(res=>res.json()).then(data=>{console.log(data.results[0].name.first);
        contFoto.innerHTML=`<span>'${data.results[0].name.first} </span>'
        <img src="${data.results[0].picture.large}" width="200px"/> 
        <span>'${data.results[0].name.last} </span>
        <span>'${data.results[0].name.first} </span>'
        
      
    })
    }
}