import { useState, useCallback } from "react";
import "../styles/Calculadora.css";

function Calculadora() {
  const [input, setInput] = useState({
    a: { active: false, value: "" },
    b: { active: false, value: "" },
    c: { active: false, value: "" },
    d: { active: false, value: "" },
    e: { active: false, value: "" },
    f: { active: false, value: "" },
  });
  const [resultadoOrden, setResultadoOrden] = useState("");
  const [ecuacion, setEcuacion] = useState("");
  const [resultadoEcuacion, setResultadoEcuacion] = useState("");

  const handleInputChange = useCallback((e, key) => {
    setInput((prevInput) => ({
      ...prevInput,
      [key]: { ...prevInput[key], value: e.target.value },
    }));
  }, []);

  const handleCheckBoxChange = useCallback((e, key) => {
    setInput((prevInput) => ({
      ...prevInput,
      [key]: { ...prevInput[key], active: e.target.checked },
    }));
  }, []);

  const obtenerValoresActivos = () => {
    const valores = {};
    Object.keys(input).forEach((key) => {
      if (input[key].active && input[key].value !== "") {
        valores[key] = parseFloat(input[key].value);
      }
    });
    return valores;
  };

  const ordenar = async (order) => {
    const valores = obtenerValoresActivos();
    try {
      const response = await fetch(
        `http://localhost:3500/v1/calculadora/ordenar`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ values: valores, order: order }),
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setResultadoOrden(data.valoresOrdenados.join(", "));
    } catch (error) {
      console.error("Error durante la ordenación:", error);
      setResultadoOrden("Error al ordenar los valores");
    }
  };

  const ordenarAscendente = () => ordenar("asc");
  const ordenarDescendente = () => ordenar("desc");

  const evaluarEcuacion = () => {
    try {
      let ecuacionEvaluada = ecuacion;
      const valores = obtenerValoresActivos();

      Object.entries(valores).forEach(([key, valor]) => {
        const regex = new RegExp(`(\\d*)${key}`, "g");
        ecuacionEvaluada = ecuacionEvaluada.replace(regex, (match, coef) => {
          coef = coef || 1;
          return `${coef * valor}`;
        });
      });

      const resultadoEvaluado = eval(ecuacionEvaluada);
      setResultadoEcuacion(resultadoEvaluado);
    } catch (error) {
      setResultadoEcuacion("Ecuación inválida");
    }
  };

  return (
    <div className="container">
      <h1 id="txtCalculadora">CALCULADORA</h1>
      {["a", "b", "c", "d", "e", "f"].map((key) => (
        <div key={key}>
          <input
            type="checkbox"
            onChange={(e) => handleCheckBoxChange(e, key)}
          />
          <label>{key}</label>
          <input
            type="number"
            disabled={!input[key].active}
            onChange={(e) => handleInputChange(e, key)}
            value={input[key].value}
          />
        </div>
      ))}
      <button onClick={ordenarAscendente}>Ordenar Ascendente</button>
      <button onClick={ordenarDescendente}>Ordenar Descendente</button>

      <h2>Resultado de la ordenación: {resultadoOrden}</h2>

      <h3>Ingresar Ecuacion</h3>
      <input
        type="text"
        onChange={(e) => setEcuacion(e.target.value)}
        value={ecuacion}
        placeholder="Ejemplo: 2a + 3b"
      />
      <button className="btnEnviar" onClick={evaluarEcuacion}>
        Evaluar Ecuación
      </button>

      {resultadoEcuacion && (
        <div>
          <h3>Resultado de la ecuación: {resultadoEcuacion}</h3>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
