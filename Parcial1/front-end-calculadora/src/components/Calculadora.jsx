import { useState } from "react";
import '../styles/Calculadora.css';

function Calculadora() {
    const [numbers, setNumbers] = useState([]); // Lista de números ingresados
    const [resultado, setResultado] = useState(''); // Resultado de las operaciones

    function handleNumberInput(e) {
        const newNumber = parseFloat(e.target.value);
        if (!isNaN(newNumber)) {
            setNumbers([...numbers, newNumber]); // Agrega el número a la lista
            e.target.value = ''; // Limpia el input
        }
    }

    function handleOperation(operacion) {
        if (numbers.length === 0) {
            setResultado('No hay números suficientes');
            return;
        }

        let res = '';
        switch (operacion) {
            case 'sumar':
                res = numbers.reduce((acc, num) => acc + num, 0);
                break;
            case 'restar':
                res = numbers.reduce((acc, num) => acc - num);
                break;
            case 'multiplicar':
                res = numbers.reduce((acc, num) => acc * num, 1);
                break;
            case 'mayor':
                res = Math.max(...numbers);
                break;
            case 'menor':
                res = Math.min(...numbers);
                break;
            case 'promedio':
                res = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
                break;
            default:
                res = 'Operación no reconocida';
        }
        setResultado(res);
    }

    function handleSort(order) {
        const sortedNumbers = [...numbers];
        if (order === 'ascendente') {
            sortedNumbers.sort((a, b) => a - b);
        } else if (order === 'descendente') {
            sortedNumbers.sort((a, b) => b - a);
        }
        setNumbers(sortedNumbers);
    }

    
    return (
        <div className="container">
            <h1>Calculadora</h1>
            
            <input type="number" onKeyDown={(e) => e.key === 'Enter' && handleNumberInput(e)} placeholder="Ingrese un número y presione Enter" />

            <div className="buttons">
                <button type="button" onClick={() => handleOperation('sumar')}>Sumar</button>
                <button type="button" onClick={() => handleOperation('restar')}>Restar</button>
                <button type="button" onClick={() => handleOperation('multiplicar')}>Multiplicar</button>
                <button type="button" onClick={() => handleOperation('mayor')}>Mayor</button>
                <button type="button" onClick={() => handleOperation('menor')}>Menor</button>
                <button type="button" onClick={() => handleOperation('promedio')}>Promedio</button>
                <button type="button" onClick={() => handleSort('ascendente')}>Orden Ascendente</button>
                <button type="button" onClick={() => handleSort('descendente')}>Orden Descendente</button>
            </div>

            <h3>Números ingresados:</h3>
            <div className="numeros">
                {numbers.map((num, index) => (
                    <span key={index} className="numero">{num}</span>
                ))}
            </div>

            <h3>Resultado:</h3>
            <div className="resultado">
                <span>{resultado}</span>
            </div>
        </div>
    );
}

export default Calculadora;
