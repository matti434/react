import React, { useState } from 'react'

export const ManejoInput = ({value,onChange}) => {
   
  const onChange = (e) =>{
    e.preventDefault 
     
    if(value !== ""){
       
    
    }

  }
    return (
    <div>
        <input 
        placeholder='Agrega nueva tarea'
        type="text"
        value={value}
        onChange={onChange}
         />
    </div>
  )
}
