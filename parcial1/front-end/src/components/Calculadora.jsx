import { useState } from "react";
import '../styles/Calculadora.css'
import Resultado from "./Resultado";

function Calculadora(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultado, setResultado] = useState('');
    
    const [A, setA] = useState('');
    const [B, setB] = useState('');
    const [C, setC] = useState('');
    const [D, setD] = useState('');
    const [E, setE] = useState('');
    const [F, setF] = useState('');
    const [formula, setFormula] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const operacion = e.target.value;
        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({number1, number2})
        })
            .then(res =>res.json())
            .then(responseData => {
                setResultado(responseData.resultado);
            });
    }

    function calcularEspecial() {
        try {
            const resultadoEspecial = eval(formula);
            setResultado(resultadoEspecial);
        } catch (error) {
            setResultado('Error en la fórmula, ingrese una fórmula correcta');
        }
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>
            <form>
                <input type="text" placeholder="A" className="number" onChange={(e) => setA(e.target.value)} /><br />
                <input type="text" placeholder="B" className="number" onChange={(e) => setB(e.target.value)} /><br />
                <input type="text" placeholder="C" className="number" onChange={(e) => setC(e.target.value)} /><br />
                <input type="text" placeholder="D" className="number" onChange={(e) => setD(e.target.value)} /><br />
                <input type="text" placeholder="E" className="number" onChange={(e) => setE(e.target.value)} /><br />
                <input type="text" placeholder="F" className="number" onChange={(e) => setF(e.target.value)} /><br />
                <input 
                    type="text" 
                    placeholder="Ingresa tu fórmula (ej. 2*A + 3*B)" 
                    className="formula-input"
                    onChange={(e) => setFormula(e.target.value)} 
                /><br />
    
                <div className="bottom-buttons">
                    <input type="button" className="btnEnviar" value="Ecuación :" onClick={calcularEspecial} />
                    <input type="button" className="btnEnviar" value="Ascendente" onClick={() => {}} />
                    <input type="button" className="btnEnviar" value="Descendente" onClick={() => {}} />
                </div>
            </form>

            <Resultado resultado={"El Resultado es :"+ resultado}/>
        </div>
    )
}

export default Calculadora;
