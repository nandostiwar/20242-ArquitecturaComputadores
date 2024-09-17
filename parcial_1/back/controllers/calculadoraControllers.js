const {add, subtract, multiply, numax, numen, prom} = require('../operaciones/operaciones.js');

function adcendente(req, res){
    const {body} = req;
    const {number1, number2, number3,number4,number5,number6} = body;
    const result = add(number1, number2, number3,number4,number5,number6);
    res.json({
        resultado: result
    });
}

function descendente(req, res){
    const {body} = req;
    const {number1, number2,number3,number4,number5,number6} = body;
    const result = subtract(number1, number2,number3,number4,number5,number6);
    res.json({
        resultado: result
    })
}

function multiplicar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    })
}
function mayor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = numax(number1, number2);
    res.json({
        resultado: result
    })
}
function menor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = numen(number1, number2);
    res.json({
        resultado: result
    })
}
function promedio(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = prom(number1, number2);
    res.json({
        resultado: result
    })
}

module.exports = {
    adcendente,
    descendente,
    multiplicar,
    mayor,
    menor,
    promedio
}