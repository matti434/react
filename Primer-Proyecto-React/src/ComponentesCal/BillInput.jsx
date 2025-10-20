import React from 'react'

const BillInput = ({value, onChange}) => {
  return (
    <div>
      <label htmlFor="bill">Monto de la cuenta:</label>
      <input
        type="number" 
        id="bill"
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder='0.00'
        min="0"
        step="0.01"
      /> 
    </div>
  )
}

export default BillInput;