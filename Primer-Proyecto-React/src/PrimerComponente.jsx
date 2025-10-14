import React from "react";

import './PrimerComponente.css'
const fecha = new Date();
export const PrimerComponente = () => {
  return (
    <>
      <h1>{JSON.stringify(fecha)}</h1>
      <h4>Probando css de PrimerComponente</h4>
    </>
  );
};
