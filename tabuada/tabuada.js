/**
 * Laço de Repetição - FOR
 * @author Danilo Boccomino
 */

for (let i = 0; i < 11; i++) {
    document.write('<p>Tabuada do ' + i + '</p>')
    for (let j = 0; j < 11; j++) {
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>')
    }
}