const divTablero = document.querySelector("#tablero");


const matriz = []
let cantCasillas = 0;

function iniciar() {
    let inputFila = parseInt(document.querySelector("#fila").value);
    cantCasillas = 0;
    divTablero.innerHTML = ""

    for (let fila = 0; fila < inputFila; fila++) {
        divTablero.innerHTML += `
    <div class="row">
        ${agregarColumna(fila)}
        </div>`
    }


}
function agregarColumna(fila) {


    let inputColumna = parseInt(document.querySelector("#columna").value);

    let columnas = "";

    for (let columna = 0; columna < inputColumna; columna++) {

        if (cantCasillas % 2 == 0) {
            columnas += `
                <div id="${fila}-${columna}" onclick="detectar(this)" class="col casilla casilla-1">
                </div>
            `;
        } else {
            columnas += `
                <div id="${fila}-${columna}" onclick="detectar(this)" class="col casilla casilla-0">
                </div>
            `;
        }
        cantCasillas++;
    }
    cantCasillas++;
    return columnas; 
   
}

function detectar(elemento) {
    alert(elemento.id);
    console.log(elemento.id);
 
}


/* casilla.addEventListener('click', () => {
    console.log("Clickeaste la casilla en la posición" + matriz + fila + columna);
} */