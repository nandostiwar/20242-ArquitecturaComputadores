
/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} C
 * @param {Number} d 
 * @param {Number} e 
 * @param {Number} f 
 * @returns Array
 */
function ordenarNumeros(a, b, c, d, e, f) {
    // Convertimos los valores a enteros
    let numeros = [parseInt(a), parseInt(b), parseInt(c), parseInt(d), parseInt(e), parseInt(f)];
    
    // Ordenamos el array de manera ascendente
    numeros.sort((x, y) => x - y);
    
    return numeros;
}

function ordenarNumerosDescendente(a, b, c, d, e, f) {
    // Convertimos los valores a enteros
    let numeros = [parseInt(a), parseInt(b), parseInt(c), parseInt(d), parseInt(e), parseInt(f)];
    
    // Ordenamos el array de manera descendente
    numeros.sort((x, y) => y - x);
    
    return numeros;
}

module.exports = {
    ordenarNumeros,
    ordenarNumerosDescendente
}