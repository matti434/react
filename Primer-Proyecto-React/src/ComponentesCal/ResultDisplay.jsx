import React from "react";
const ResultDisplay = ({ results }) => {

   // Validación para evitar errores cuando results es undefined
  if (!results) {
    return (
      <div>
        <h3>Resultados</h3>
        <p>Ingresa los datos para calcular</p>
      </div>
    );
  }
  return (
    <div>
      <h3>Resultados</h3>
      <p>💰 Propina total: <strong>${results.tipAmount.toFixed(2)}</strong></p>
      <p>💵 Total con propina: <strong>${results.totalWithTip.toFixed(2)}</strong></p>
      <p>👤 Propina por persona: <strong>${results.tipPerPerson.toFixed(2)}</strong></p>
      <p>👥 Total por persona: <strong>${results.totalPerPerson.toFixed(2)}</strong></p>
    </div>
  );
};

export default ResultDisplay;