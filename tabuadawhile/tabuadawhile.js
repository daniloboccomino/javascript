/**
 * Laço de Repetição - WHILE
 * @author Danilo Boccomino
 */

let i = 0, j = 0

while (i < 11) {
    document.write('<p>Tabuada do ' + i + '</p>')
    while (j < 11) {
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>')
        j++
    }
    // Ao sair do segundo laço, o valor de j passa a ser 11
    // Necessário voltar o valor de j para 0
    j = 0
    i++
}