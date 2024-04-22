window.addEventListener("load", inicio);
var idCajaTabla=document.querySelector("#cajaTabla");
function inicio(){
  fetch('http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php')
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log('Contenido JSON:', data);
      data.forEach(provincia => {
        idCajaTabla.innerHTML+=provincia.nombreProvincia+"-"+
        provincia.votosPA+"<br>";
      });
  })
  .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
  });


}