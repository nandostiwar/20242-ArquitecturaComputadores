import { useState } from "react";
import '../styles/Calculadora.css'
import Resultado from "./Resultado";

function Calculadora(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resultado, setResultado] = useState('');

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
                setResultado(responseData.resultado)
                // setResultado(responseData)
                // console.log(resultado)
            })
    }

    return (
        <div className="container">
            <h1 id="txtCalculadora">CALCULADORA</h1>
            <form>
                <input type="text" className="number" onChange={(e) => { setNumber1(e.target.value) }} /><br />
                <input type="text" className="number" onChange={(e) => { setNumber2(e.target.value) }} /><br />
    
        <div class="top-buttons">
            <input type="submit" className="btnEnviar" value="Sumar" onClick={handleSubmit} />
            <input type="submit" className="btnEnviar" value="Restar" onClick={handleSubmit} />
            <input type="submit" className="btnEnviar" value="Multiplicar" onClick={handleSubmit} />
        </div>

        <div class="spacer"></div>
    
        <div class="bottom-buttons">
            <input type="submit" className="btnEnviar" value="Mayor" onClick={handleSubmit} />
            <input type="submit" className="btnEnviar" value="Menor" onClick={handleSubmit} />
            <input type="submit" className="btnEnviar" value="Promedio" onClick={handleSubmit} />
        </div>
            </form>

            <Resultado resultado={"El Resultado es :"+ resultado}/>
        </div>
    )
}

export default Calculadora