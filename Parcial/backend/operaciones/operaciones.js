
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
function numax(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    if (number1 > number2) {
        return number1
    }else{
        return number2
    }
}
function numen(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    if (number1 < number2) {
        return number1
    }else{
        return number2
    }
}
function prom(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return (number1 + number2)/2
}

function asen(a, b,c,d,e,f){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    let number3 = parseInt(c);
    let number4 = parseInt(d);
    let number5 = parseInt(e);
    let number6 = parseInt (f);
    let numeros=[];
    numeros.push(number1, number2 , number3, number4, number5, number6)
    numeros.sort((a, b) => b - a);

    return (numeros)
}
function desen(a, b, c,d,e,f){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    let number3 = parseInt(c);
    let number4 = parseInt(d);
    let number5 = parseInt(e);
    let number6 = parseInt (f);
    let numeros=[];
    numeros.push(number1, number2 , number3, number4, number5, number6)
    numeros.sort((a, b) => a - b);

    return (numeros)

}
module.exports = {
    add,
    subtract,
    multiply,
    numax,
    numen,
    prom,
    asen,
    desen
}