
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




function mayor (a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    return Math.max(number1, number2) 

}


function menor (a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    return Math.min(number1, number2) 

}

function prom(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);

    return (number1 + number2) / 2

}







module.exports = {
    add,
    subtract,
    multiply,
    mayor,
    menor,
    prom
}

