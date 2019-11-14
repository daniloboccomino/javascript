/**
 * Desafio do JoKenPo
 * @author Danilo Boccomino
 */

function jogar() {
  if ((document.getElementById('pedra').checked === false) && (document.getElementById('papel').checked === false) && (document.getElementById('tesoura').checked === false)) {
    alert('Selecione uma opção')
  } else {
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

    if ((document.getElementById('pedra').checked === true && computador === 0) || (document.getElementById('papel').checked === true && computador === 1) || (document.getElementById('tesoura').checked === true && computador === 2)) {
      document.getElementById('resultado').innerText = 'Empate'
    } else if ((document.getElementById('pedra').checked === true && computador === 2) || (document.getElementById('papel').checked === true && computador === 0) || (document.getElementById('tesoura').checked === true && computador === 1)) {
      document.getElementById('resultado').innerText = 'Jogador Venceu'
    } else {
      document.getElementById('resultado').innerText = 'Computador Venceu'
    }

  }

}

function reset() {
  document.getElementById('pc').src = 'pc.png'
  document.getElementById('resultado').innerText = ''
}
