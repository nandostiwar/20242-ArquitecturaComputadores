import { useState } from "react";
import '../styles/Calculadora.css';

function Calculadora() {
    const [inputs, setInputs] = useState({
        A: { enabled: false, value: '' },
        B: { enabled: false, value: '' },
        C: { enabled: false, value: '' },
        D: { enabled: false, value: '' },
        E: { enabled: false, value: '' },
        F: { enabled: false, value: '' }
    });

    const [resultadoOrden, setResultadoOrden] = useState(''); 
    const [ecuacion, setEcuacion] = useState('');
    const [resultadoEval, setResultadoEval] = useState(''); 

    const handleInputChange = (e, key) => {
        setInputs({
            ...inputs,
            [key]: { ...inputs[key], value: e.target.value }
        });
    };

    const handleCheckboxChange = (e, key) => {
        setInputs({
            ...inputs,
            [key]: { ...inputs[key], enabled: e.target.checked }
        });
    };

    const getEnabledValues = () => {
        const values = {};
        Object.keys(inputs).forEach(key => {
            if (inputs[key].enabled) {
                values[key] = parseFloat(inputs[key].value);
            }
        });
        return values;
    };

    const handleSortAsc = () => {
        const values = getEnabledValues();
        fetch(`http://localhost:3500/v1/calculadora/ordenar`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ values, order: 'asc' }) 
        })
        .then(res => res.json())
        .then(responseData => {
            setResultadoOrden(`Valores ordenados ascendentemente: ${responseData.valoresOrdenados}`);
        });
    };

    const handleSortDesc = () => {
        const values = getEnabledValues();
        fetch(`http://localhost:3500/v1/calculadora/ordenar`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ values, order: 'desc' })
        })
        .then(res => res.json())
        .then(responseData => {
            setResultadoOrden(`Valores ordenados descendentemente: ${responseData.valoresOrdenados}`);
        });
    };

    const handleEvaluate = () => {
        const values = getEnabledValues();
        fetch('http://localhost:3500/v1/calculadora/evaluar', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ecuacion, values })
        })
        .then(res => res.json())
        .then(responseData => {
            setResultadoEval(`Resultado de la ecuación: ${responseData.resultado}`);
        });
    };

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>

            <h2>Inputs Activados</h2>
            {['A', 'B', 'C', 'D', 'E', 'F'].map(key => (
                <div key={key}>
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, key)}
                    />
                    <label>{key}</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs[key].enabled}
                        onChange={(e) => handleInputChange(e, key)}
                        value={inputs[key].value}
                    />
                </div>
            ))}

            <button className="btnEnviar" onClick={handleSortAsc}>Ordenar Ascendente</button>
            <button className="btnEnviar" onClick={handleSortDesc}>Ordenar Descendente</button>

            <h2>Ingresar Ecuación</h2>
            <input
            className="number"
                type="text"
                placeholder="Ingresa tu ecuación"
                value={ecuacion}
                onChange={(e) => setEcuacion(e.target.value)}
            />
            <button className="btnEnviar" onClick={handleEvaluate}>Evaluar Ecuación</button>

            <p>{resultadoOrden}</p>
            <p>{resultadoEval}</p> 
        </div>
    );
}

export default Calculadora;
