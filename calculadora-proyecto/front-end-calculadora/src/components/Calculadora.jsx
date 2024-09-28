import { useState } from "react";
import '../styles/Calculadora.css';
import Resultado from "./Resultado";

function Calculadora(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [resultado, setResultado] = useState('');
    const [expression, setExpression] = useState('');
    const [isRead, setIsRead] = useState({ number1: false, number2: false, number3: false, number4: false });

    const numbers = [
        { id: "number1", value: number1, label: "Número 1", setValue: setNumber1 },
        { id: "number2", value: number2, label: "Número 2", setValue: setNumber2 },
        { id: "number3", value: number3, label: "Número 3", setValue: setNumber3 },
        { id: "number4", value: number4, label: "Número 4", setValue: setNumber4 }
    ];

    function handleSubmit(e) {
        e.preventDefault();
        const operacion = e.target.value;

        // Si la operación es "promedio", enviar todos los números
        const bodyData = operacion === 'promedio'
            ? { number1, number2, number3, number4 }
            : { number1, number2 };

        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData) // Enviar los datos correspondientes
        })
        .then(res => res.json())
        .then(responseData => {
            setResultado(responseData.resultado);
        });
    }

    function handleSort(order) {
        const sortedNumbers = [number1, number2, number3, number4].sort((a, b) => order === 'asc' ? a - b : b - a);
        setNumber1(sortedNumbers[0]);
        setNumber2(sortedNumbers[1]);
        setNumber3(sortedNumbers[2]);
        setNumber4(sortedNumbers[3]);
    }

    function handleCheckboxChange(e, id) {
        setIsRead(prev => ({ ...prev, [id]: e.target.checked }));
    }

    function handleExpressionSubmit(e) {
        e.preventDefault();
        try {
            const expr = expression.replace('a', number1).replace('b', number2);
            const result = eval(expr);
            setResultado(result);
        } catch (error) {
            setResultado('Error, digita correctamente la expresion');
        }
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA Nani</h1>
            <form>
                {numbers.map(({ id, value, label, setValue }) => (
                    <div key={id}>
                        <label>{label}:</label>
                        <input
                            type="text"
                            className="number"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <label>
                            <input
                                type="checkbox"
                                onChange={(e) => handleCheckboxChange(e, id)}
                            />
                            Leer número
                        </label><br />
                        {isRead[id] && <p>{label}: {value}</p>}
                    </div>
                ))}

                {/* Botones de ordenamiento */}
                <input
                    type="button"
                    className="btnOrdenar"
                    value="Ascendente"
                    onClick={() => handleSort('asc')}
                />
                <input
                    type="button"
                    className="btnOrdenar"
                    value="Descendente"
                    onClick={() => handleSort('desc')}
                />

                {/* Botón para calcular el promedio */}
                <input
                    type="submit"
                    className="btnEnviar"
                    value="promedio"
                    onClick={handleSubmit}
                />
            </form>

            {/* Formulario para la expresión algebraica */}
            <form onSubmit={handleExpressionSubmit}>
                <input
                    type="text"
                    className="expression"
                    placeholder="Ejemplo: 3a + 4b"
                    onChange={(e) => setExpression(e.target.value)}
                />
                <input type="submit" className="btnEnviar" value="Calcular expresión" />
            </form>

            <Resultado resultado={"El resultado es = " + resultado} />
        </div>
    );
}

export default Calculadora;
