import { Button } from "bootstrap";
import React, { useState } from "react";

export const TipPercentage = () => {
  const percentage = [5, 10, 15, 20, 15];
  const [isCustom, setIsCuston] = useState(false);
  const [customTip, setCustonTip] = useState("");

  const handlePredefinedTip = (e) => {
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

  const handlePredefinedChange = (percent) => {
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
        {percentage.map((percent) => {
          <button
            type="button"
            key={percent}
            className={value === percent && !isCustom ? "active" : ""}
            onClick={() => handlePredefinedTip(percent)}
          >
            {percent}%
          </button>;
        })}

        <div className="custom-tip">
          <input
            type="text"
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
    </div>
  );
};
