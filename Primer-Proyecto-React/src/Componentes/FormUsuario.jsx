import { useState } from "react";
import { validateForm } from "./validations";
import "./FormUsuario.css";

export function FormUsuario() {
  // formData es un OBJETO que contiene todos los campos del formulario
  const [formData, setFormData] = useState({});
  // handleInputChange: Una sola función para manejar TODOS los campos
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData, // Copiamos todos los valores existentes
      [name]: value, // Actualizamos SOLO el campo que cambió
    });

    if (error[name]) {
      setError({
        ...erros,
        [name]: "",
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    console.log("Datos del usuario:", {
      Name: inputName,
      Email: inputEmail,
    });
  };
  return (
    <>
      <form typeof="submit" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese el nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Ingres el email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Ingrese la contraseña"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Repita la contraseña"
          value={formData.passwordRepit}
          onChange={handleInputChange}
        />
        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default FormUsuario;
