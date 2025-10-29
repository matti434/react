import React from "react";
import { useLocation } from "react-router";

const Registro = () => {
  const location = useLocation(); //devuelve el objeto de ubicacion actual
  const showModal = new console.log("Ubicación actual:", location);
  
  
  console.log("Pathname:", location.pathname);
  console.log("Search:", location.search);
  console.log("Parámetros:", new URLSearchParams(location.search).get("modal"));
  return <div>Registro</div>;
};

export default Registro;
