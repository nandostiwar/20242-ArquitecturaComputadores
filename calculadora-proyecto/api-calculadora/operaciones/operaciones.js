/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function add(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2;
}

function subtract(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 - number2;
}

function multiply(a, b) {
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 * number2;
}

// Nueva función para calcular el promedio de dos números
function promedio(a, b, c, d){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    let number3 = parseInt(c);
    let number4 = parseInt(d);
    return (number1 + number2 + number3 + number4) / 4;
}

module.exports = {
    add,
    subtract,
    multiply,
    promedio // Exportamos la función promedio
};
