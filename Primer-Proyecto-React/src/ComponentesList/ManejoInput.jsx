import React, { useState } from 'react'

export const ManejoInput = ({value,onChange}) => {
   
  const manejoInput = (e) =>{
    onChange(e.target.value);
  }
    return (
    <div>
        <input 
        placeholder='Agrega nueva tarea'
        type="text"
        value={value}
        onChange={manejoInput}
         />
    </div>
  )
}
