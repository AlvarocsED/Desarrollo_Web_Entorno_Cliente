window.addEventListener("load", inicio);
function inicio(){

 function obtenerDatos() {
    try {
      const response =  fetch("http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php");
      const datos =  response.json();
      return datos;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      return [];
    }
  }
  

   function determinarGanadores() {
    const datos =  obtenerDatos();
  
    datos.forEach(provincia => {
      const partidoGanador = provincia.partido_ganador;
      if (partidoGanador) {
        datosPartidos[partidoGanador].provinciasGanadas.push(provincia.nombre);
      }
    });
  
    
    mostrarResultadosEnHTML();
  }
  
  
  function mostrarResultadosEnHTML() {
    const representantesDiv = document.getElementById("representantes");
    const provinciasDiv = document.getElementById("provincias");
    const votosDiv = document.getElementById("votos");
    const ordenDiv = document.getElementById("orden");
  
    representantesDiv.innerHTML = "";
    provinciasDiv.innerHTML = "";
    votosDiv.innerHTML = "";
    ordenDiv.innerHTML = "";
  
    for (const partido in datosPartidos) {
      representantesDiv.innerHTML += `<p>${partido}: ${datosPartidos[partido].provinciasGanadas.length} representantes</p>`;
      provinciasDiv.innerHTML += `<p>${partido}: ${datosPartidos[partido].provinciasGanadas.join(', ')}</p>`;
      votosDiv.innerHTML += `<p>${partido}: ${datosPartidos[partido].votos} votos</p>`;
    }
  
    const partidosOrdenados = Object.keys(datosPartidos).sort((a, b) => datosPartidos[b].votos - datosPartidos[a].votos);
    partidosOrdenados.forEach((partido, index) => {
      ordenDiv.innerHTML += `<p>${index + 1}. ${partido}</p>`;
    });
  }
  
  
  determinarGanadores();
  
}