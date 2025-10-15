import React, { useState } from "react";

export const ContadorApp = ({ value }) => {
  //ponemos nombre a la variable "contador" y con el metodo setContador vamos a poder modificar la variable y useState va a tener el valor por defencto
  const [contador, setContador] = useState(value);

  const handleClick = () => {
    setContador(contador + 1);
  };
  return (
    <>
    <div className="bg-white text-black m-5 p-5 text-center">
      <h1>Contador:</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>Click</button>
    </div>
    </>
  );
};
