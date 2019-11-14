/**
 * Exercício de Operadores Lógicos - NOT
 * @author Danilo Boccomino
 */

let receive
let sw1 = false
let broken = false

function sw(receive) {
    if (receive == 1 && sw1 == false) {
        document.getElementById('sw1').src = 'swon.png'
        sw1 = true
    } else if (receive == 1 && sw1 == true) {
        document.getElementById('sw1').src = 'swoff.png'
        sw1 = false
    }

    if (receive == 2) {
        document.getElementById('lamp').src = 'broken.jpg'
        broken = true
    }

    if (broken == false) {
        if (!sw1) {
            document.getElementById('lamp').src = 'on.jpg'
        } else {
            document.getElementById('lamp').src = 'off.jpg'
        }
    }
}