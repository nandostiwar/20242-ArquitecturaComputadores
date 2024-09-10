const {add, subtract, multiply, NumMax, NumMin, Prom} = require('../operaciones/operaciones.js');

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

function mayor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = NumMax(number1, number2);
    res.json({
        resultado: result
        })
}

function menor(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = NumMin(number1, number2);
    res.json({
        resultado: result
        })
}

function promedio(req, res){
    const {body} = req;
    const {number1, number2} = body;
    const result = Prom(number1, number2);
    res.json({
        resultado: result
        })
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    mayor,
    menor,
    promedio
}