const { Asc, Des } = require('../operaciones/operaciones.js');

function ascendente(req, res) {
    const { numbers } = req.body; 
    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: 'Debes proporcionar un array de números' });
    }
    const resultado = Asc(...numbers);
    return res.json({ resultado });
}

function descendente(req, res) {
    const { numbers } = req.body;  
    if (!Array.isArray(numbers)) {
        return res.status(400).json({ error: 'Debes proporcionar un array de números' });
    }
    const resultado = Des(...numbers);
    return res.json({ resultado });
}

module.exports = {
    ascendente,
    descendente
};
