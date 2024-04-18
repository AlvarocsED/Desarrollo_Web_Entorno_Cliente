window.addEventListener("load", inicio);
function inicio(){
let btnMostrar=document.getElementById("mostrar");
btnMostrar.onclick=mostrar;
function mostrar(){
    fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
            .then(response => response.json())
            .then(data => {
                // Obtenemos la tabla
                const tabla = document.getElementById('cajacard');

                // Limpiamos cualquier contenido previo en la tabla
                tabla.innerHTML = '';

                // Creamos las filas de la tabla con los datos obtenidos
                data.forEach(imagen => {
                    const fila = document.createElement('tr');
                    
                    const idColumna = document.createElement('td');
                    idColumna.textContent = imagen.id;
                    fila.appendChild(idColumna);

                    const nombreColumna = document.createElement('td');
                    nombreColumna.textContent = imagen.nombre;
                    fila.appendChild(nombreColumna);

                    const urlColumna = document.createElement('td');        
                    urlColumna.textContent = imagen.url;
                    fila.appendChild(urlColumna);
                    

                    // Añadimos la fila a la tabla
                    tabla.appendChild(fila);
                });
            })
            .catch(error => {
                console.error('Hubo un problema al obtener los datos:', error);
            });
    };
}