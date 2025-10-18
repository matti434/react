import React from 'react'

export const BillInput = (value, onChange) => {
    // value= viene del padre (estado 'bill')
    // onChange = viene del padre (funcion 'setBill')
  return (
    <input
     type="text" 
     id="bill"
     value={value}  // ← Valor actual del padre
     onChange={(e) => onChange(Number(e.target.value))} // ← Actualiza al padre
     /> 
  )
}
