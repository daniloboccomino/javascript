/**
 * DOM
 * Exercício de Orientação a objetos com passagem de parâmetros
 * @author Danilo Boccomino
 */

/*
// Sem passagem de parâmetros

function ligar() {
   document.getElementById('lampada').src = 'on.jpg'
}

function desligar() {
   document.getElementById('lampada').src = 'off.jpg'
}

*/



// Com passagem de parâmetros

let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lampada').src = 'on.jpg'
    } else {
        document.getElementById('lampada').src = 'off.jpg'
    }
}