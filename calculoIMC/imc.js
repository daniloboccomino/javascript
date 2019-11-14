/**
 * Cálculo de IMC
 * @author Danilo Boccomino
 */

let peso, altura, IMC

function calcular() {
	peso = Number(frmIMC.txtPeso.value.replace(",", "."))
	altura = Number(frmIMC.txtAltura.value.replace(",", "."))
	IMC = peso / (altura * altura)
	frmIMC.txtIMC.value = IMC.toFixed(2)

	if (IMC < 17) {
		document.getElementById('status').src = 'imc1.png'
	} else if (IMC > 16.99 && IMC < 18.5) {
		document.getElementById('status').src = 'imc2.png'
	} else if (IMC > 18.49 && IMC < 25) {
		document.getElementById('status').src = 'imc3.png'
	} else if (IMC > 24.99 && IMC < 30) {
		document.getElementById('status').src = 'imc4.png'
	} else if (IMC > 29.99 && IMC < 35) {
		document.getElementById('status').src = 'imc5.png'
	} else if (IMC > 34.99 && IMC < 40) {
		document.getElementById('status').src = 'imc6.png'
	} else {
		document.getElementById('status').src = 'imc7.png'
	}
}

function limpar() {
	document.getElementById('status').src = 'imc.png'
}