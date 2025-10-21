import React, { useState } from 'react'

const ManejoInput = ({value,onChange,onAgregarTarea}) => {
   

  const manejoButton = () => {
    onAgregarTarea(value);
  }
  
  return (
    <div>
        <input 
        placeholder='Agrega nueva tarea'
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
         />
        <button onClick={manejoButton}>
          Agregar Tarea
        </button>
    </div>
  )
}

export default ManejoInput;