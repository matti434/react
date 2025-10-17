import React, { useState } from "react";

export const FormPersonal = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    password: "",
  });
  const [error, setErrors] = useState("");

  const handleInputChange = (event) => {

    const {name,value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (error[name]) {
      setErrors({
        ...error,
        [name]: "",
      });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const { isValid, validationErros: erros } = validateForm(formData);

    /* Es lo mismo que lo de arriba
      const resultado = validateForm(formData);
      const isValid = resultado.isValid;
      const validationErrors = resultado.errors;
      */
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

    return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  };
};
