/**
 * APP de validação eleitoral
 * @author Danilo Boccomino
 */

function validar() {
    let idade
    idade = Number(frmEleitor.txtIdade.value)

    if (idade < 16) {
        document.getElementById('resultado').innerText = 'PROIBIDO VOTAR'
    } else if (idade > 17 && idade < 71) {
        document.getElementById('resultado').innerText = 'VOTO OBRIGATÓRIO'
    } else {
        document.getElementById('resultado').innerText = 'VOTO OPCIONAL'
    }
}

function reset() {
    document.getElementById('resultado').innerText = ''
}