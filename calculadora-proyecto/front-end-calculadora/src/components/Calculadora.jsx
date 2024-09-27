import { useState } from "react";
import "../styles/Calculadora.css";
import Resultado from "./Resultado";

//Deficion del estaod de inputs y checkbox

function Calculadora() {
  const [inputs, setInputs] = useState({
    A: { status: false, value: "" },
    B: { status: false, value: "" },
    C: { status: false, value: "" },
    D: { status: false, value: "" },
    E: { status: false, value: "" },
    F: { status: false, value: "" },
  });

  const [resultadOrden, setResultadOrden] = useState("");

  //manejo de flujo por si cambia el input

  const handleInputChange = (a, key) => {
    setInputs({
      ...inputs,
      [key]: { ...inputs[key], value: a.target.value },
    });
  };

  //manejo por si cmabia el checkbox

  const handleCheckboxChange = (a, key) => {
    setInputs({
      ...inputs,
      [key]: { ...inputs[key], status: a.target.checked },
    });
  };

  //obteninedo valores de lo habilitaod

  const obtenerValoresStatus = () => {
    const valores = {};
    Object.keys(inputs).forEach((key) => {
      if (inputs[key].status) {
        valores[key] = parseFloat(inputs[key].value);
      }
    });
  };

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
      <h1>Orden de datos</h1>

      <div className="">
        {["a", "b", "c", "d", "e", "f"].map((key) => (
          <div key={key}>
            <input
              type="checkbox"
              onChange={(a) => handleCheckboxChange(a, key)}
            />
            <input
              type="text"
              disabled={!inputs[key].enable
                
              }
              onChange={(a) => handleInputChange(a, key)}
              value={inputs[key].value}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculadora;
