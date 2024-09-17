function ordenAsc(...numbers) {
    return numbers.map(n => parseInt(n)).sort((a, b) => a - b);
}

function ordenDes(...numbers) {
    return numbers.map(n => parseInt(n)).sort((a, b) => b - a);
}

module.exports = {
    ordenAsc,
    ordenDes
};