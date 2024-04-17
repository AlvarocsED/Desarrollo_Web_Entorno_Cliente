window.onload=inicio;

function inicio(){
    let btnCargar=document.getElementById("btnMostrar");
    btnCargar.onclick=cargar;
}
function cargar(){
    console.log("hola");            
    let tabla=document.getElementById("tabla");
    const url="http://camacho.atwebpages.com/webcam/getWebcam.php";
    var headers = {}
    
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    .then(data =>{ 
        data.json();
        console.table(data);
    })
    .then(data2 =>{
        console.table(data2);
        crearTabla(data2,tabla)
    })
    .catch(error=> alert (error))
    .finally(alert (()=>"fin de programa"));
}
function crearTabla(datos,tabla){
    console.log(datos,tabla);       
   
    for (let valor of datos){
      tabla.innerHTML+=`
      <tr>
       <th>
       ${valor.id}
      </th>
      <th>
       ${valor.lugar}
      </th>
     <th>
      <video src='${valor.url}' autoplay loop width="100px" height="80px">
     </th></tr>
      `
    }
}