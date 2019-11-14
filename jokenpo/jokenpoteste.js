/**
 * Desafio do JoKenPo
 * @author Danilo Boccomino
 */

let jogador

function jogar() {
    let computador = Math.floor(Math.random() * 3)
    switch (computador) {
        case 0:
            document.getElementById('pc').src = 'pcpedra.png'
            break;
        case 1:
            document.getElementById('pc').src = 'pcpapel.png'
            break;
        case 2:
            document.getElementById('pc').src = 'pctesoura.png'
            break;
    }

    if (document.getElementById('pedra').checked === true) {
        jogador = 'pedra'
    } else if (document.getElementById('papel').checked === true) {
        jogador = 'papel'
    } else {
        jogador = 'tesoura'
    }

    if (jogador === 'pedra' && computador === 0) {
        document.getElementById('resultado').innerText = 'Empate'
    } else if (jogador === 'pedra' && computador === 1) {
        document.getElementById('resultado').innerText = 'Computador venceu'
    } else if (jogador === 'pedra' && computador === 2) {
        document.getElementById('resultado').innerText = 'Jogador Venceu'
    } else if (jogador === 'papel' && computador === 0) {
        document.getElementById('resultado').innerText = 'Jogador Vence'
    } else if (jogador === 'papel' && computador === 1) {
        document.getElementById('resultado').innerText = 'Empate'
    } else if (jogador === 'papel' && computador === 2) {
        document.getElementById('resultado').innerText = 'Computador Venceu'
    } else if (jogador === 'tesoura' && computador === 0) {
        document.getElementById('resultado').innerText = 'Computador Venceu'
    } else if (jogador === 'tesoura' && computador === 1) {
        document.getElementById('resultado').innerText = 'Jogador venceu'
    } else {
        document.getElementById('resultado').innerText = 'Empate'
    }

}

function reset() {
    document.getElementById('pc').src = 'pc.png'
    document.getElementById('resultado').innerText = ''
}