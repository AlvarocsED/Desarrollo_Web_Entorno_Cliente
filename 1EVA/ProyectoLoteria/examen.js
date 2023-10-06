window.onload = inicio;
const contenedorColumnas=[];
con0st NUM_COLUMNAS = 6;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let vectorCajas = [];
let v_numeros = [];
let contAciertos = 0;
let columnaActual = 0;


function inicio() {
    cuerpo = document.querySelector("body");
    contenedorP = document.createElement("div");
    contenedorP.className = "container";
    cuerpo.appendChild(contenedorP);
  
    let btnJugar = document.createElement("button");
    btnJugar.textContent = "SORTEO";
    cuerpo.appendChild(btnJugar);
    btnJugar.onclick = jugar;
  
    let btnReset = document.createElement("button");
    btnReset.textContent = "RESETEAR";
    cuerpo.appendChild(btnReset);
    btnReset.onclick = reset;

    
    for (let i = 0; i < NUM_COLUMNAS; i++) {
        const columna = document.createElement('div');
        columna.className = 'gallery.div';
        if (i === 0) {
            columna.style.backgroundColor="green";
        } else {
            columna.style.backgroundColor="red";
        }

        for (let x = 0; x < NUM_CAJAS; x++) {
            const caja = document.createElement('div');
            caja.className = 'gallery div';
            caja.textContent = x + 1;
            caja.addEventListener('click', () => marcarCaja(caja));

            columna.appendChild(caja);
        }

        contenedorColumnas.appendChild(columna);
    }

    
    contenedorColumnas.addEventListener('click', () => {
        const columnasCompletas = document.querySelector('body').length === NUM_CAJAS;
        btnJugar.disabled = !columnasCompletas;
    });
    caja.onclick=marcarCaja;
}

function marcarCaja(caja) {
    if (!v_numeros.includes(caja.textContent)) {
        vectorCajas.push(caja);
        v_numeros.push(caja.textContent);
        caja.style.backgroundColor = 'red';
    }
}

function jugar() {
    

    
    btnReset.disabled = false;
}

function resetear() {
    
    

    
    btnJugar.disabled = true;
    btnReset.disabled = true;
}
