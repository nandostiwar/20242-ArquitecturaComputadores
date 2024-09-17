const {
    add,
    subtract,
    multiply,
    minor,
    major,
    prom,

} = require('../operaciones/operaciones.js');

function sumar(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = add(number1, number2);
    res.json({
        resultado: result
    });
}

function restar(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = subtract(number1, number2);
    res.json({
        resultado: result
    });
}

function multiplicar(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = multiply(number1, number2);
    res.json({
        resultado: result
    });
}

function mayor(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = major(number1, number2);
    res.json({
        resultado: result
    });
}

function menor(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = minor(number1, number2);
    res.json({
        resultado: result
    });
}

function promedio(req, res) {
    const {
        number1,
        number2
    } = req.body;
    const result = parseFloat(prom(number1, number2));
    res.json({
        resultado: result
    });
}

function ordenar(req, res) {
    const { values, order } = req.body;

    try {
        let orderedValues = Object.entries(values);

        if (order === 'asc') {
            orderedValues.sort((a, b) => a[1] - b[1]); 
        } else if (order === 'desc') {
            orderedValues.sort((a, b) => b[1] - a[1]); 
        }

        const valoresOrdenados = orderedValues.map(([key, valor]) => `${key}: ${valor}`);
        res.json({ valoresOrdenados });
    } catch (error) {
        res.status(400).json({ error: 'Error al ordenar los valores' });
    }
}

function evaluar(req, res) {
    const { ecuacion, values } = req.body;

    try {
        let ecuacionEvaluada = ecuacion;
        
        Object.entries(values).forEach(([key, valor]) => {
            const regex = new RegExp(`(\\d*)${key}`, 'g');
            ecuacionEvaluada = ecuacionEvaluada.replace(regex, (match, coef) => {
                coef = coef || 1;
                return `${coef * valor}`; 
            });
        });

        const resultado = eval(ecuacionEvaluada);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ error: 'Ecuación inválida' });
    }

}

module.exports = {
    sumar,
    restar,
    multiplicar,
    mayor,
    menor,
    promedio,
    ordenar,
    evaluar
    
};