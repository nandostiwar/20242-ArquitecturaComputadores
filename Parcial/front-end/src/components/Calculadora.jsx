import { useState } from "react";
import '../styles/Calculadora.css'
import Resultado from "./Resultado";

function Calculadora(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [number5, setNumber5] = useState('');
    const [number6, setNumber6] = useState('');
    const [resultado, setResultado] = useState('');
    const [enabledInputs, setEnabledInputs] = useState([true, true, true, true, true, true]);//

    function handleSubmit(e){
        e.preventDefault();
        const operacion = e.target.value;
        const inputs = [number1, number2, number3, number4, number5, number6].map((num, index) => enabledInputs[index] ? num : null);//
        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({number1, number2, number3, number4, number5, number6})
        })
            .then(res =>res.json())
            .then(responseData => {
                setResultado(responseData.resultado)
                
            })
    }
    const toggleInput = (index) => {//
        const updatedInputs = [...enabledInputs];
        updatedInputs[index] = !updatedInputs[index]; 
        setEnabledInputs(updatedInputs);
    };//

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>
            <form className="formContainer">
                <div className="inputs">
                    {[number1, number2, number3, number4, number5, number6].map((number, index) => (
                        <div key={index} className="input-group">
                            <label>{String.fromCharCode(65 + index)}:</label>
                            <input
                                type="text"
                                className="number"
                                disabled={!enabledInputs[index]}
                                onChange={(e) => {
                                    const setters = [setNumber1, setNumber2, setNumber3, setNumber4, setNumber5, setNumber6];
                                    setters[index](e.target.value);
                                }}
                            />
                            <button type="button" className="checkmark-btn" onClick={() => toggleInput(index)}>
                                {enabledInputs[index] ? '✔️' : '❌'}
                            </button>
                        </div>
                    ))}
                </div>
                
                <div className="buttons">
                    <input type="submit" className="btnEnviar" value="sumar" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="restar" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="multiplicar" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="mayor" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="menor" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="asendente" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="desendente" onClick={handleSubmit}/>
                    <input type="submit" className="btnEnviar" value="promedio" onClick={handleSubmit}/>
                </div>
            </form>
            <Resultado resultado={"El resultado es " + resultado}/>
        </div>
    );
}

export default Calculadora;