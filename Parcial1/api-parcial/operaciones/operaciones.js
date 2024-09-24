function Asc(...numbers) {
    return numbers.map(n => parseInt(n)).sort((a, b) => a - b);
}

function Des(...numbers) {
    return numbers.map(n => parseInt(n)).sort((a, b) => b - a);
}

module.exports = {
    Asc,
    Des
};