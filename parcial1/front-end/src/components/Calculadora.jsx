import { useState } from "react";
import '../styles/Calculadora.css';
import Resultado from "./Resultado";

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
            setResultadoOrden(`Valores ordenados de forma ascendente: ${responseData.valoresOrdenados}`);
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
            setResultadoOrden(`Valores ordenados de forma descendente: ${responseData.valoresOrdenados}`);
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
            setResultadoEval(`Ecuación: ${responseData.resultado}`);
        });
    };

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>

            <h2>Inputs Activados</h2>
            <div className="input-section">
                <div className="input-row">
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'A')}
                    />
                    <label>A</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['A'].enabled}
                        onChange={(e) => handleInputChange(e, 'A')}
                        value={inputs['A'].value}
                    />
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'B')}
                    />
                    <label>B</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['B'].enabled}
                        onChange={(e) => handleInputChange(e, 'B')}
                        value={inputs['B'].value}
                    />
                                        <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'C')}
                    />
                    <label>C</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['C'].enabled}
                        onChange={(e) => handleInputChange(e, 'C')}
                        value={inputs['C'].value}
                    />
                </div>
                <div className="input-row">
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'D')}
                    />
                    <label>D</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['D'].enabled}
                        onChange={(e) => handleInputChange(e, 'D')}
                        value={inputs['D'].value}
                    />
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'E')}
                    />
                    <label>E</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['E'].enabled}
                        onChange={(e) => handleInputChange(e, 'E')}
                        value={inputs['E'].value}
                    />
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckboxChange(e, 'F')}
                    />
                    <label>F</label>
                    <input className="number"
                        type="text"
                        disabled={!inputs['F'].enabled}
                        onChange={(e) => handleInputChange(e, 'F')}
                        value={inputs['F'].value}
                    />
                </div>
            </div>

            <div className="button-container">
                <button className="btnEnviar" onClick={handleSortAsc}>Ordenar Ascendente</button>
                <button className="btnEnviar" onClick={handleSortDesc}>Ordenar Descendente</button>
            </div>

            <h2>Ingresar Ecuación</h2>
            <input
                className="number"
                type="text"
                placeholder="Ingresa tu ecuación :"
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
