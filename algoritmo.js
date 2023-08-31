const divTablero = document.querySelector("#tablero");


const matriz = []

function iniciar() {
    let inputFila = parseInt(document.querySelector("#fila").value);


    for (let fila = 0; fila < inputFila; fila++) {
        divTablero.innerHTML += `
    <div class="row">
        ${agregarColumna()}
        </div>`
    }



}
function agregarColumna() {


     let inputColumna = parseInt(document.querySelector("#columna").value);

    let columnas = "";

    for (let columna = 0; columna < inputColumna; columna++) {

        columnas += `<div class="col casilla">
        </div>`

    }
    return columnas; 
}