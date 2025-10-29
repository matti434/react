// validations.js
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio";
  } else if (formData.nombre.length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres";
  }

  if (!formData.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (formData.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
};