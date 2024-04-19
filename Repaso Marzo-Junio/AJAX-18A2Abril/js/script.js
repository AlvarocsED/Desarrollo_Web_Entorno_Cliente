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

                    const imgColumna = document.createElement('td');
                    const Tagimg=document.createElement("img");
                    Tagimg.setAttribute("src",imagen.imagen);
                    Tagimg.className="card img";
                    imgColumna.appendChild(Tagimg);
                    fila.appendChild(imgColumna);
                    fila.appendChild(imgColumna);

                    const textoColumna = document.createElement('td');        
                    textoColumna.textContent = imagen.texto;
                    fila.appendChild(textoColumna);

                    const subtextoColumna = document.createElement('td');        
                    subtextoColumna.textContent = imagen.subtexto;
                    fila.appendChild(subtextoColumna);
                    


                    // Añadimos la fila a la tabla
                    tabla.appendChild(fila);
                });
            })
            .catch(error => {
                console.error('Hubo un problema al obtener los datos:', error);
            });
    };
}