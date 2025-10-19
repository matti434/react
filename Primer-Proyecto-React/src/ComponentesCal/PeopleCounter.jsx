import React, { useState } from "react";

export const PeopleCounter = ({value,onChange}) => {
  

  const handlePeopleChange = (e) => {
    
    const newValue = parseInt(e.target.value) || 0;
     
    onChange(newValue);

  }
  
  
  return (
    <div>
      <h3>Numero de personas: {value}</h3>
      <input
        type="number"
        min="0"
        max="100"
        value={value}
        onChange={handlePeopleChange}
        placeholder="Ingrese el numero de personas"
      />
    </div>
  );
};
