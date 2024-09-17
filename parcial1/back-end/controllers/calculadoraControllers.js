const { ascendente, descendente, calcularFormula } = require('../operaciones/operaciones.js');

function ordenarAscendente(req, res) {
    const { body } = req;
    const { A, B, C, D, E, F } = body; 
    const result = ascendente([A, B, C, D, E, F]); 
    res.json({
        resultado: result
    });
}

function ordenarDescendente(req, res) {
    const { body } = req;
    const { A, B, C, D, E, F } = body; 
    const result = descendente([A, B, C, D, E, F]);
    res.json({
        resultado: result
    });
}

function ejecutarFormula(req, res) {
    const { body } = req;
    const { formula, A, B, C, D, E, F } = body; 
    const result = calcularFormula(formula, { A, B, C, D, E, F }); 
    res.json({
        resultado: result
    });
}

module.exports = {
    ordenarAscendente,
    ordenarDescendente,
    ejecutarFormula
}
