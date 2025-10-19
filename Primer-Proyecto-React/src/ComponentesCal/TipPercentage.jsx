import { Button } from "bootstrap";
import React, { useState } from "react";

export const TipPercentage = ({value,onChange}) => {
  const percentage = [5, 10, 15, 20, 25];
  const [isCustom, setIsCuston] = useState(false);
  const [customTip, setCustonTip] = useState("");

  const handleCustomTipChange = (e) => {
    const inputValue = e.target.value;

    setCustonTip(inputValue);

    if (inputValue != "") {
      onChange(Number(inputValue));
      setIsCuston = true; // marcamos que es personalizado
    } else {
      isCustom = false;
      onChange(10); // Vuelve al valor por defecto
    }
  };

  const handlePredefinedTip = (percent) => {
    onChange(percent);
    setCustonTip(""); // Limpiamos el input personalizado
    setIsCuston(false); // Marcamos que no es personalizado
  };

  // Para SABER qué está seleccionado:
  console.log("Valor actual:", value);
  console.log("Es personalizado?", isCustom);
  console.log("Input personalizado:", customTip);

  return (
    <div>
      <label>Porcentaje de propina:</label>
      <div className="percentage-buttons">
        {percentage.map((percent) => (
          <button
            type="button"
            key={percent}
            className={value === percent && !isCustom ? "active" : ""}
            onClick={() => handlePredefinedTip(percent)}
          >
            {percent}%
          </button>
        ))}

        <div className="custom-tip">
          <input
            type="number"
            min="0"
            max="100"
            value={customTip}
            onChange={handlePredefinedChange}
            placeholder="Personalizado"
            className={isCustom ? "active" : ""}
          />
          <span>%</span>
        </div>
      </div>
      <div style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
        {isCustom ? `Personalizado: ${value}%` : `Predefinido: ${value}%`}
      </div>
    </div>
  );
};
