import { useState } from "react";
import { validateForm } from "./validations";
import "./FormUsuario.css";

export function FormUsuario() {
  // formData es un OBJETO que contiene todos los campos del formulario
  const [formData, setFormData] = useState({
    nombre:"",
    email:"",
    password:"",
    passwordRepit:""
  });


  const [errors, setErrors] = useState({});

  // handleInputChange: Una sola función para manejar TODOS los campos
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData, // Copiamos todos los valores existentes
      [name]: value, // Actualizamos SOLO el campo que cambió
    });

    if (errors[name]) {
      setErrors({
        ...errors, // ← Mantenemos todos los otros errores
        [name]: "", // ← Limpiamos SOLO el error del campo actual
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    const { isValid, validationErros: validationErros } = validateForm(formData);
   
    
/*const resultado = validateForm(formData); // resultado = { isValid: true, errors: { nombre: "Error", ... } }


  const isValid = resultado.isValid; 
  const validationErrors = resultado.errors;

  Esto es lo mismo quye esto

  const { isValid, errors: validationErrors } = validateForm(formData);*/


    if (!isValid) {
      setErrors(validationErros);
      return;
    }

    setFormData({
      nombre: "",
      email: "",
      password: "",
      passwordRepit: "",
    });

    setErrors({});
    // Después: errors = {} ← TODOS los errores desaparecen
    alert("¡Registro exitoso! Revisa la consola para ver los datos.");
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>

      <form onSubmit={onSubmit}>
        {/* Campo Nombre */}
        <div className="input-group">
          <input
            type="text"
            name="nombre" // ← Este name debe coincidir con la clave en formData
            placeholder="Ingrese el nombre"
            value={formData.nombre} // ← formData.nombre
            onChange={handleInputChange}
            className={errors.nombre ? "error" : ""}
          />
          {errors.nombre && <span className="field-error">{errors.nombre}</span>}
        </div>

        {/* Campo Email */}
        <div className="input-group">
          <input
            type="email"
            name="email" // ← formData.email
            placeholder="Ingrese el email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        {/* Campo Password */}
        <div className="input-group">
          <input
            type="password"
            name="password" // ← formData.password
            placeholder="Ingrese la contraseña"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </div>

        {/* Campo Repetir Password */}
        <div className="input-group">
          <input
            type="password"
            name="passwordRepit" // ← formData.passwordRepit
            placeholder="Repita la contraseña"
            value={formData.passwordRepit}
            onChange={handleInputChange}
            className={errors.passwordRepit ? "error" : ""}
          />
          {errors.passwordRepit && (
            <span className="field-error">{errors.passwordRepit}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>

      {/* VISTA PREVIA EN TIEMPO REAL (muy útil para debuggear) */}
      <div className="debug-preview">
        <h4>Vista previa del formData:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default FormUsuario;
