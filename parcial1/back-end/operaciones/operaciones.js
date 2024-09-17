/**
 * @param {Array} arr 
 * @returns Array
 */
function ascendente(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * @param {Array} arr 
 * @returns Array
 */
function descendente(arr) {
    return arr.sort((a, b) => b - a);
}

/**
 * @param {String} formula 
 * @param {Object} variables 
 * @returns Number
 */
function calcularFormula(formula, variables) {
    const { A, B, C, D, E, F } = variables;
    return eval(formula);
}

module.exports = {
    ascendente,
    descendente,
    calcularFormula
}
