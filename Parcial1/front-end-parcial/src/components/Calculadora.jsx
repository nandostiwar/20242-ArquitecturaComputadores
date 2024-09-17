import { useState } from "react";
import '../styles/Calculadora.css'
import Resultado from "./Resultado";

function Calculadora() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [number4, setNumber4] = useState('');
    const [number5, setNumber5] = useState('');
    const [number6, setNumber6] = useState('');
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [resultado, setResultado] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const operacion = e.target.value;

    
        const numbers = [
            checked1 && number1,
            checked2 && number2,
            checked3 && number3,
            checked4 && number4,
            checked5 && number5,
            checked6 && number6
        ].filter(num => num !== false && num !== ''); 

        if (numbers.length === 0) {
            alert("Por favor, selecciona al menos un número.");
            return;
        }

        fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ numbers })
        })
            .then(res => res.json())
            .then(responseData => {
                setResultado(responseData.resultado);
            })
            .catch(error => {
                console.error("Error al realizar la operación:", error);
            });
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA TATIANA</h1>
            <form>
                <input type="checkbox" className="check" checked={checked1} onChange={() => setChecked1(!checked1)} /> 
                <input type="text" className="number" onChange={(e) => setNumber1(e.target.value)} value={number1} placeholder="Número 1" /><br />
                
                <input type="checkbox" className="check" checked={checked2} onChange={() => setChecked2(!checked2)} />
                <input type="text" className="number" onChange={(e) => setNumber2(e.target.value)} value={number2} placeholder="Número 2" /><br />
                
                <input type="checkbox" className="check" checked={checked3} onChange={() => setChecked3(!checked3)} />
                <input type="text" className="number" onChange={(e) => setNumber3(e.target.value)} value={number3} placeholder="Número 3" /><br />
                
                <input type="checkbox" className="check" checked={checked4} onChange={() => setChecked4(!checked4)} />
                <input type="text" className="number" onChange={(e) => setNumber4(e.target.value)} value={number4} placeholder="Número 4" /><br />
                
                <input type="checkbox" className="check" checked={checked5} onChange={() => setChecked5(!checked5)} />
                <input type="text" className="number" onChange={(e) => setNumber5(e.target.value)} value={number5} placeholder="Número 5" /><br />
                
                <input type="checkbox" className="check" checked={checked6} onChange={() => setChecked6(!checked6)} />
                <input type="text" className="number" onChange={(e) => setNumber6(e.target.value)} value={number6} placeholder="Número 6" /><br />
                
                <input type="submit" className="btnEnviar" value="Ascendente" onClick={handleSubmit} />
                <input type="submit" className="btnEnviar" value="Descendente" onClick={handleSubmit} />
            </form>
            <Resultado resultado={"El resultado es: " + resultado} />
        </div>
    );
}

export default Calculadora;