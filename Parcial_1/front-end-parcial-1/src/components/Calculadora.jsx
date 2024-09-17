import { useState } from "react";
import '../styles/Calculadora.css';
import Resultado from "./Resultado";

function Calculadora() {
    const [numeros, setNumeros] = useState({
        campo1: '',
        campo2: '',
        campo3: '',
        campo4: '',
        campo5: '',
        campo6: ''
    });
    const [seleccionados, setSeleccionados] = useState({
        campo1: false,
        campo2: false,
        campo3: false,
        campo4: false,
        campo5: false,
        campo6: false
    });
    const [resultado, setResultado] = useState('');

    const manejarCambioTexto = (e) => {
        const { name, value } = e.target;
        setNumeros(prev => ({ ...prev, [name]: value }));
    };

    const manejarCambioCheckbox = (e) => {
        const { name, checked } = e.target;
        setSeleccionados(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = e.target.value;
    
        const numerosSeleccionados = Object.entries(numeros)
            .filter(([key, value]) => seleccionados[key] && value.trim() !== '')
            .map(([key, value]) => Number(value));
    
        fetch(`http://localhost:3500/v1/calculadora/${orden}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ numeros: numerosSeleccionados })
        })
        .then(res => res.json())
        .then(responseData => {
            setResultado(responseData.resultado.join(', '));
        })
        .catch(error => {
            console.error('Error:', error);
            setResultado('Error al realizar la operación');
        })
    }

    return (
        <div className="container">
            <h1 id="txtParcial_1">Ordenador de Números</h1>
            <form>
                {['campo1', 'campo2', 'campo3', 'campo4', 'campo5', 'campo6'].map((campo, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            name={campo}
                            checked={seleccionados[campo]}
                            onChange={manejarCambioCheckbox}
                        />
                        <input
                            type="text"
                            name={campo}
                            value={numeros[campo]}
                            onChange={manejarCambioTexto}
                            disabled={!seleccionados[campo]}
                        />
                        <br />
                    </div>
                ))}
                <input
                    type="submit"
                    className="btnEnviar"
                    value="ascendente"
                    onClick={handleSubmit}
                />
                <input
                    type="submit"
                    className="btnEnviar"
                    value="descendente"
                    onClick={handleSubmit}
                />
            </form>
            <Resultado resultado={"El resultado es: " + resultado} />
        </div>
    );
}

export default Calculadora;