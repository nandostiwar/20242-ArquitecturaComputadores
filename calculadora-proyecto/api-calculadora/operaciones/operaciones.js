
/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function add(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 + number2;
}

function subtract(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 - number2;
}

function multiply(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 * number2;
}
function numMax(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1>number2;
}
function less(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 < number2;
}

function prom(a, b){
    let number1 = parseFloat(a);
    let number2 = parseFloat(b);
    return (number1 + number2)/2;
}


module.exports = {
    add,
    subtract,
    multiply,
    numMax,
    less,
    prom
}