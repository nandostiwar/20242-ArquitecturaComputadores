
/**
 * Sumar dos cantidades numéricas
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 * @param {Number} d 
 * @param {Number} e 
 * @param {Number} f 
 * @returns Number
 */
function add(a, b, c, d, e, f){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    let number3 = parseInt(c);
    let number4 = parseInt(d);
    let number5 = parseInt(e);
    let number6 = parseInt(f);
    let numbers=[number1,number2,number3,number4,number5,number6];
    numbers.sort((x,y) => x-y)
    return numbers;
}

function subtract(a, b,c,d,e,f){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    let number3 = parseInt(c);
    let number4 = parseInt(d);
    let number5 = parseInt(e);
    let number6 = parseInt(f);
    let numbers=[number1,number2,number3,number4,number5,number6];
    numbers.sort((x,y) => y-x)
    return numbers;
}

function multiply(a, b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return number1 * number2;
}
function numax(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    if (number1>number2){
        return number1
    }else{
        return number2
    }
}

function numen(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    if (number1<number2){
        return number1
    }else{
        return number2
    }
}
function prom(a,b){
    let number1 = parseInt(a);
    let number2 = parseInt(b);
    return (number1 + number2)/2;
}
module.exports = {
    add,
    subtract,
    multiply,
    numax,
    numen,
    prom
}