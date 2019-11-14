/**
 * Cálculo da Média
 * @author Danilo Boccomino
 */

// Variáveis Globais
let nota1, nota2, media

function calcular() {
    nota1 = Number(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtNota2.value.replace(",", "."))
    media = (nota1 + nota2) / 2
    frmMedia.txtResultado.value = media.toFixed(1)
    if (media < 6) {
        frmMedia.txtStatus.value = 'Reprovado'
    } else {
        frmMedia.txtStatus.value = 'Aprovado'
    }
}