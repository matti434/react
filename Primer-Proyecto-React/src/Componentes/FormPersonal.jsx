import React, { useState } from "react";
import { validateForm } from "./validations";
import './FormUsuario.css'

export const FormPersonal = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    password: "",
  });
  
  // ✅ CORREGIDO: errors como objeto y agregado isSubmitting
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true); // ✅ Ahora existe
    
    // ✅ CORREGIDO: Typo arreglado
    const { isValid, errors: validationErrors } = validateForm(formData);

    if (!isValid) {
      setErrors(validationErrors); // ✅ validationErrors, no validationErros
      setIsSubmitting(false); // ✅ Importante resetear
      return;
    }

    // Simulación de envío exitoso
    setTimeout(() => {
      setFormData({
        nombre: "",
        password: "",
      });
      setErrors({});
      setIsSubmitting(false);
      alert("¡Formulario enviado con éxito!");
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Formulario Personal</h2>
              
              <form onSubmit={onSubmit}>
                {/* Campo Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                  {errors.nombre && (
                    <div className="invalid-feedback">
                      {errors.nombre}
                    </div>
                  )}
                </div>

                {/* Campo Password */}
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Botón de envío */}
                <button 
                  type="submit" 
                  className="btn btn-primary w-100"
                  disabled={isSubmitting} // ✅ Ahora existe
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Formulario"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPersonal;