const { add, subtract, multiply, promedio } = require('../operaciones/operaciones.js');

function sumar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = subtract(number1, number2);
    res.json({
        resultado: result
    });
}

function multiplicar(req, res) {
    const { body } = req;
    const { number1, number2 } = body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    });
}

// Nueva función para calcular el promedio
function calcularPromedio(req, res) {
    const { number1, number2, number3, number4 } = req.body;
    const result = promedio(number1, number2, number3, number4);
    res.json({ resultado: result });
}


module.exports = {
    sumar,
    restar,
    multiplicar,
    calcularPromedio // Exportamos la nueva función
};
