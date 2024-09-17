const {add, subtract, multiply,numax,numen,prom,asen,desen} = require('../operaciones/operaciones.js');

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
function asendente(req, res){
    const {body} = req;
    const {number1, number2, number3, number4 , number5, number6} = body;
    const result = asen(number1, number2 , number3, number4, number5, number6);
    res.json({
        resultado: result
    })
}

function desendente(req, res){
    const {body} = req;
    const {number1, number2, number3, number4 , number5, number6} = body;
    const result = desen(number1, number2 , number3, number4, number5, number6);
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
    promedio,
    asendente,
    desendente
}