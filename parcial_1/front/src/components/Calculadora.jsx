import { useState } from "react";
import '../styles/Calculadora.css';
import Resultado from "./Resultado";

function Calculadora() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [number5, setNumber5] = useState('');
    const [number6, setNumber6] = useState('');
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(true);
    const [checked4, setChecked4] = useState(true);
    const [checked5, setChecked5] = useState(true);
    const [checked6, setChecked6] = useState(true);
    const [operacion, setOperacion] = useState('');
    const [resultado, setResultado] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        let operacionEvaluada = operacion
            .replace(/a/g, number1)
            .replace(/b/g, number2)
            .replace(/c/g, number3)
            .replace(/d/g, number4)
            .replace(/e/g, number5)
            .replace(/f/g, number6);

        try {
            const resultadoEvaluado = Function('"use strict"; return (' + operacionEvaluada + ')')();
            setResultado(resultadoEvaluado);
        } catch (error) {
            setResultado("Error en la operación");
        }
    }

    function handleSorting(order) {
        const numbers = [
            checked1 ? number1 : null,
            checked2 ? number2 : null,
            checked3 ? number3 : null,
            checked4 ? number4 : null,
            checked5 ? number5 : null,
            checked6 ? number6 : null
        ].map(num => parseInt(num, 10)).filter(num => !isNaN(num));

        numbers.sort((x, y) => order === 'ascendente' ? x - y : y - x);
        setResultado(numbers.join(', '));
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>
            <form>
                <input type="text" className="number" placeholder="Número 1" onChange={(e) => setNumber1(e.target.value)} />
                <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /><br />

                <input type="text" className="number" placeholder="Número 2" onChange={(e) => setNumber2(e.target.value)} />
                <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} /><br />

                <input type="text" className="number" placeholder="Número 3" onChange={(e) => setNumber3(e.target.value)} />
                <input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} /><br />

                <input type="text" className="number" placeholder="Número 4" onChange={(e) => setNumber4(e.target.value)} />
                <input type="checkbox" checked={checked4} onChange={() => setChecked4(!checked4)} /><br />

                <input type="text" className="number" placeholder="Número 5" onChange={(e) => setNumber5(e.target.value)} />
                <input type="checkbox" checked={checked5} onChange={() => setChecked5(!checked5)} /><br />

                <input type="text" className="number" placeholder="Número 6" onChange={(e) => setNumber6(e.target.value)} />
                <input type="checkbox" checked={checked6} onChange={() => setChecked6(!checked6)} /><br />

                <input type="text" className="number" placeholder="Operación (ej. 2a+3b)" onChange={(e) => setOperacion(e.target.value)} /><br />

                <input type="submit" className="btnEnviar" value="Calcular" onClick={handleSubmit} /><br />
                <button type="button" className="btnEnviar" onClick={() => handleSorting('ascendente')}>Ascendente</button>
                <button type="button" className="btnEnviar" onClick={() => handleSorting('descendente')}>Descendente</button>
            </form>
            <Resultado resultado={"El resultado es " + resultado} />
        </div>
    );
}

export default Calculadora;
