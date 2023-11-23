function peticionAjax(url, respuesta) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            respuesta(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

peticionAjax('http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php', function(data) {

    var partidoA = 23;
    var partidoB = 18;
    var partidoC = 12;
    var partidoD = 5;

    console.log('Representantes por partido:');
    console.log('Partido A: '+ partidoA+ 'representantes');
    console.log('Partido B: '+ partidoB+ 'representantes');
    console.log('Partido C: '+partidoC+'representantes');
    console.log('Partido D: '+ partidoD+ 'representantes');

    
    console.log('\nProvincias ganadas por cada partido:');

    console.log('Partido A:'+ provinciasGanadas.partidoA.join(', '));
    console.log('Partido B:'+ provinciasGanadas.partidoB.join(', '));
    console.log('Partido C:'+ provinciasGanadas.partidoC.join(', '));
    console.log('Partido D:'+ provinciasGanadas.partidoD.join(', '));

    
    console.log('\nVotos totales por partido:');
    
    console.log('Partido A:'+ votosTotales.partidoA+ 'votos');
    console.log('Partido B:'+ votosTotales.partidoB+ 'votos');
    console.log('Partido C:'+votosTotales.partidoC+ 'votos');
    console.log('Partido D:'+ votosTotales.partidoD+ 'votos');

    
    console.log('\nOrden de ganadores:');
    var ganadores = ['PARTIDO B', 'PARTIDO A', 'PARTIDO D', 'PARTIDO C'];
    console.log(ganadores.join('\n'));
});
// Imprimir en pantalla los resultados
