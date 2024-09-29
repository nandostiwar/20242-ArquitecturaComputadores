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
                <input type="text" className="number" onChange={(e)=>{setNumber1(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber2(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber3(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber4(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber6(e.target.value)}}/><br />
                <input type="text" className="number" onChange={(e)=>{setNumber6(e.target.value)}}/><br />
                <input type="submit" className="btnEnviar" value="sumar" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="restar" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="multiplicar" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="orddes" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="ordasc" onClick={handleSubmit}/>
                <input type="submit" className="btnEnviar" value="promedio" onClick={handleSubmit}/>
            </form>
            <Resultado resultado={"El resultado es "+ resultado}/>
        </div>
    )
}

export default Calculadora