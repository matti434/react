// BillInput.jsx
import React from 'react'

const BillInput = ({value, onChange}) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    
    // Permite solo números y punto decimal
    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div>
      <label htmlFor="bill">Monto de la cuenta:</label>
      <input
        type="text"  // Cambiado de "number" a "text"
        id="bill"
        value={value}
        onChange={handleChange}
        placeholder='0.00'
        inputMode="decimal" // Muestra teclado numérico en móviles
      /> 
    </div>
  )
}

export default BillInput;