import React, { useState } from "react";
import "./ManejoInput.css";

const ManejoInput = ({ value, onChange, onAgregarTarea }) => {
  const manejarCambios = (campo, valor) => {
    onChange({
      ...value,
      [campo]: valor,
    });
  };

  const funcionSubmit = (e) => {
    e.preventDefault();
    onAgregarTarea(value);
  };

  return (
    <div className="text-center m-5">
      <form action="" onSubmit={funcionSubmit} className="row contenedor-form g-3">
        <input
          className="col-6 p-2"
          placeholder="Agrega un titulo"
          type="text"
          value={value.titulo}
          onChange={(e) => manejarCambios("titulo", e.target.value)}
        />
        <input
          className="col-6 p-2"
          placeholder="Tipo de Tarea EJ:deporte"
          type="text"
          value={value.tipo}
          onChange={(e) => manejarCambios("tipo", e.target.value)}
        />
        <input
          className="col-12 py-5"
          placeholder="Descripcion"
          type="textarea"
          value={value.descripcion}
          onChange={(e) => manejarCambios("descripcion", e.target.value)}
        />
        <input
          className="col-6 p-2"
          placeholder="Agrega una fecha"
          type="date"
          value={value.fecha}
          onChange={(e) => manejarCambios("fecha", e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default ManejoInput;
