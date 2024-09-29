import './styles/Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({ callback }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const goTo = useNavigate();

    const validateUser = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/v1/signos/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                if (data.status === 'Admin') {
                    callback('Admin');
                    goTo('/AdminHome');
                } else if (data.status === 'User') {
                    callback('User');
                    goTo('/UserHome');
                }
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error('Error al validar el usuario', error);
            setErrorMessage('Error en el servidor. Intenta de nuevo más tarde.');
        }
    };

    return (
        <form onSubmit={validateUser}>
            <h1 id="txtBienvenida">Bienvenido a nuestro portal del Zodiaco</h1>
            <h4 className="txt">Nombre de Usuario</h4>
            <input type="text" className="entry" onChange={(e) => setUsername(e.target.value)} /><br />
            <h4 className="txt">Contraseña</h4>
            <input type="password" className="entry" onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="submit" value="Ingresar" id="btnEnviar" />
            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
    );
}

export default Form;
