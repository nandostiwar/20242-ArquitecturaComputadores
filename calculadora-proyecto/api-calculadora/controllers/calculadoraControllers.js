const {add, obtenerValores, ordenarAsc, ordenarAsc} = require('../operaciones/operaciones.js');

function obtenerValores() {
    const inputs = document.querySelectorAll('.number-input');
    const valores = Array.from(inputs).map(input => parseFloat(input.value)).filter(valor => !isNaN(valor));
    return valores;
  }

     // Función para ordenar descendente
     function ordenarDesc() {
      const valores = obtenerValores();
      valores.sort((a, b) => b - a); // Ordena de mayor a menor
      document.getElementById('resultado').value = valores.join(', ');
    }

     // Función para ordenar ascendente
     function ordenarAsc() {
      const valores = obtenerValores();
      valores.sort((a, b) => a - b); // Ordena de menor a mayor
      document.getElementById('resultado').value = valores.join(', ');
    }




module.exports = {
    ordenarAsc,
    ordenarDesc,
    obtenerValores,
    add,
    
}