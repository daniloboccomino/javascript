/**
 * Exercício de PDV
 * @author Danilo Boccomino
 */

let receive, total

function calcular(receive) {
    if (receive === 1) {
        let valor, porcentagem, desconto
        valor = Number(frmPDV.txtValor.value.replace(',', '.'))
        porcentagem = Number(frmPDV.txtPorcentagem.value.replace(',', '.'))
        desconto = valor * porcentagem / 100
        total = valor - (valor * porcentagem / 100)
        frmPDV.txtDesconto.value = 'R$ ' +  desconto.toFixed(2)
        frmPDV.txtTotal.value = 'R$ ' + total.toFixed(2)
    } else {
        let pago, troco
        pago = Number(frmTroco.txtPago.value.replace(',', '.'))
        troco = pago - total
        frmTroco.txtTroco.value = 'R$ ' +  troco.toFixed(2)
    }
}

function limpar() {
    frmPDV.txtValor.value = ''
    frmPDV.txtPorcentagem.value = ''
    frmPDV.txtDesconto.value = ''
    frmPDV.txtTotal.value = ''
    frmTroco.txtPago.value = ''
    frmTroco.txtTroco.value = ''
}