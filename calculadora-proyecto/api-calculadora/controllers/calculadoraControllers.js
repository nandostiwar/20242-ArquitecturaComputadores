const {add, subtract, multiply, mayor, menor, prom} = require('../operaciones/operaciones.js');

function sumar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = subtract(number1, number2);
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

function numeroMayor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = mayor(number1, number2);
    res.json({
        resultado: result
    })
}

function numeroMenor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = menor(number1, number2);
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
    sumar,
    restar,
    multiplicar,
    numeroMayor,
    numeroMenor,
    promedio
}