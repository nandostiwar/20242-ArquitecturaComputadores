import "./styles/Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form({ callback }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const goTo = useNavigate();

  const validateUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/v1/signos/login",
        {
          username,
          password,
        }
      );

      if (response.data.success) {
        const role = response.data.role;
        callback(role);
        if (role === "admin") {
          goTo("/adminHome");
        } else if (role === "user") {
          goTo("/userHome");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={validateUser}>
      <h1 id="txtBienvenida">Bienvenido a nuestro portal del Zodiaco</h1>
      <h4 className="txt">Nombre de Usuario</h4>
      <input
        type="text"
        className="entry"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <h4 className="txt">Contraseña</h4>
      <input
        type="password"
        className="entry"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <input type="submit" value="Ingresar" id="btnEnviar" />
    </form>
  );
}

export default Form;
