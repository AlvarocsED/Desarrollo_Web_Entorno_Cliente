window.onload = inicio;
let cajaFrutas = document.querySelector("#cajaFrutas");
cajaFrutas.innerHTML = "";
let bloqueHtml = document.createElement("div");
let bloqueCesta = document.createElement("div");
var objeto;
let contenedorCesta = document.querySelector("#cestaCompra");
let btnPagar=document.getElementById("btnPagar");
btnPagar.onclick=realizarCompra;
var total = 0;
var calculoPrecio = 0;
let precioTotal = document.getElementById("precio");

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
let btnPDF = document.getElementById("imprimirPDF");
btnPDF.onclick = mostrarPDF;
let btnEnviarM = document.getElementById("enviarMail");
btnEnviarM.onclick = enviarMail;
btnGestionAl.onclick = login;

let vectorGlobal = [];

function inicio() {
  cargarContenido();
  console.log(objeto);
}

function mostrarPDF() {

    actualizarAlmacen();

    let ticket1 = document.getElementById("cestaCompra").innerHTML;
    console.log(ticket1);

    let estilo = "<style>"+
    "table {width: 100%;font: 17px Calibri;}"+
    "table, th, td {border: solid 1px #DDD; border-collapse: collapse;"+
    "padding: 2px 3px;text-align: center;}"+
    "</style>";

    let win = window.open("ticket.pdf", "Fruteria", "height=700,width=700");
    win.document.write('<html><head>');
    win.document.write('<title>Ticket</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<table>");
    win.document.write(ticket1);
    win.document.write("</table>");
    win.document.write("Total: "+precio.textContent) ; // contenidos dentro del body
    win.document.write('</body></html>');
    win.print();
}

function actualizarAlmacen(){

}

function cargarFrutas() {
  bloqueHtml.className = "row";
  for (let i = 0; i < objeto.length; i++) {
    let vector = [];
    vector.push(objeto[i].id, objeto[i].name, objeto[i].photo, objeto[i].price);
    bloqueHtml.innerHTML +=
      '<div class="col-lg-4">' +
      '<img class="card-img-top" onclick=anadirCesta("' +
      vector +
      '") src=' +
      objeto[i].photo +
      ' width="90" height="90" alt=' +
      objeto[i].id +
      ">" +
      '<div class="card-body" onclick=anadirCesta("' +
      vector +
      '")>' +
      '<h4 class="card-title">' +
      objeto[i].name +
      "</h4>" +
      '<p class="card-text">' +
      objeto[i].price +
      "</p></div></div>";
  }

  cajaFrutas.appendChild(bloqueHtml);
}
function cargarContenido() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      objeto = JSON.parse(this.responseText);
      cargarFrutas();
    }
  };
  xhr.open(
    "GET",
    "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",
    true
  );
  xhr.send();
}
function anadirCesta(vector) {
  let cajaTr = document.createElement("tr");
  console.log(vector);
  let vectorX = vector.split(",");
  let kgs = prompt("Teclea los kgs de " + vectorX[1]);
  calculoPrecio = kgs * parseFloat(vectorX[3]);
  let id = vectorX[0];

  total = total + calculoPrecio;
  precioTotal.textContent = total;

  if (kgs && !isNaN(kgs)) {
    
    $.ajax({
        url:"http://moralo.atwebpages.com/menuAjax/productos3/actualizarAlmacen.php",
        type:"POST",
        data:{
            id:id,
            kgs:kgs
        },
        dataType:"JSON"
      });

    cajaTr.innerHTML =
      "<td>" +
      vectorX[1] +
      "</td><td>" +
      kgs +
      "</td><td>" +
      vectorX[3] +
      "</td><td>" +
      calculoPrecio +
      "</td>" +
      "<td>" + //simular botón con a href añado clase btn btn-danger (color rojo)
      "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
      //anulo el href, no hay link , pero sí hay evento onclick con
      //parámetro incluido: dni de esa tupla
      " href='javascript:void(0)' onclick=eliminar(this,'" + id +
      calculoPrecio + kgs +
      "')>" +
      //texto del botón e icono
      "ELIMINAR<i class='bi-trash'></i></a></div> " +
      "</td>";

 0
  }
  contenedorCesta.appendChild(cajaTr);
}

function eliminar(fila, id, calculo, peso) {
  //Subir de nivel hasta llegar a elmento padre tabla
  let filaTabla = fila.parentNode.parentNode;
  //Subir un nivel más para coseguir el elemento tr de esa tabla y pasamos la tabla por parametro
  filaTabla.parentNode.remove(filaTabla);
  total = total - calculo;
  precioTotal.textContent = total;

  $.ajax({
    url: "http://moralo.atwebpages.com/menuAjax/productos3/retornarAlmacen.php",
    type: "POST",
    data: {
        id:id,
        kgs:peso
    },
    dataType:"JSON"
  });

}
function realizarPago() {

    let nombreCliente = document.getElementById("nombre").value;



    let precioTotal = parseFloat(precioTotal.textContent);


    let nombresProductos = obtenerNombresProductos();


    enviarFacturaAlServidor(nombreCliente, precioTotal, nombresProductos);
}

function obtenerNombresProductos() {



    let nombres = [];
    let filasCesta = document.querySelectorAll("#cestaCompra tr");
    filasCesta.forEach(function (fila) {
        let nombreProducto = fila.children[0].textContent;
        nombres.push(nombreProducto);
    });
    return nombres.join(", ");
}

function enviarFacturaAlServidor(nombreCliente, precioTotal, nombresProductos) {

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarFacturacion.php",
        type: "POST",
        data: {
            nombreCliente: nombreCliente,
            precioTotal: precioTotal,
            nombresProductos: nombresProductos

        },
        dataType: "JSON",
        success: function (response) {

            alert("¡La factura se ha enviado con éxito!");
        },
        error: function (error) {

            console.error("Error al enviar la factura:", error);
            alert("Hubo un error al enviar la factura. Por favor, inténtalo de nuevo.");
        }
    });
}

