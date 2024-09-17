function ordenarAscendente(req, res) {
    const { numeros } = req.body;
    if (!Array.isArray(numeros) || numeros.length < 1) {
        return res.status(400).json({ resultado: 'Error: Debes proporcionar al menos un número' });
    }
    const resultado = numeros.sort((a, b) => a - b);
    res.json({ resultado });
}

function ordenarDescendente(req, res) {
    const { numeros } = req.body;
    if (!Array.isArray(numeros) || numeros.length < 1) {
        return res.status(400).json({ resultado: 'Error: Debes proporcionar al menos un número' });
    }
    const resultado = numeros.sort((a, b) => b - a);
    res.json({ resultado });
}

module.exports = {
    ordenarAscendente,
    ordenarDescendente
};