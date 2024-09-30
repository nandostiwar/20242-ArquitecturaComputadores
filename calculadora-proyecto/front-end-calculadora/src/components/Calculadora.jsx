import { useState } from "react";
import "../styles/Calculadora.css";
import Resultado from "./Resultado";

//Deficion del estaod de inputs y checkbox

function Calculadora() {
  const [inputs, setInputs] = useState({
   
  });

  function obtenerValores() {
    const inputs = document.querySelectorAll('.number-input');
    const valores = Array.from(inputs).map(input => parseFloat(input.value)).filter(valor => !isNaN(valor));
    return valores;
  }

     // Función para ordenar descendente
     function ordenarDesc() {
      const valores = obtenerValores();
      valores.sort((a, b) => b - a); // Ordena de mayor a menor
      document.getElementById('resultado').value = valores.join(', ');
    }

     // Función para ordenar ascendente
     function ordenarAsc() {
      const valores = obtenerValores();
      valores.sort((a, b) => a - b); // Ordena de menor a mayor
      document.getElementById('resultado').value = valores.join(', ');
    }


  function handleSubmit(e) {
    e.preventDefault();
    const operacion = e.target.value;
    fetch(`http://localhost:3500/v1/calculadora/${operacion}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number1, number2 }),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setResultado(responseData.resultado);
        // setResultado(responseData)
        // console.log(resultado)
      });
  }

  return (
   
        <div className="container">
         <p>A</p> <input type="text" className="numberInput" />
          <p>B</p><input type="text"  className="numberInput"/>
          <p>C</p><input type="text"  className="numberInput"/>
          <p>D</p><input type="text"  className="numberInput"/>
          <p>E</p><input type="text"  className="numberInput"/>
          <p>F</p><input type="text"  className="numberInput"/>


          <p>Resultado</p><input type="text"  className="Resultado"/>

          <button onclick="ordenarAsc()">Ordenar Ascendente</button>
          <button onclick="ordenarDesc()">Ordenar Descendente</button>
          
        </div>


  );
}

export default Calculadora;
