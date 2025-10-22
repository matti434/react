import React, { useState } from "react";

const ManejoInput = ({ value, onChange, onAgregarTarea }) => {
  const manejarCambios = (campo, valor) => {
    onChange({
      ...value,
      [campo]: valor,
    });
  };

  const funcionSubmit = (e) => {
    e.preventDefault();
  };
  const manejoButton = () => {
    onAgregarTarea(value);
  };

  return (
    <div className="text-center m-5">
      <form action="" onSubmit={funcionSubmit}>
        <input
          placeholder="Agrega un titulo"
          type="text"
          value={value.nombre}
          onChange={(e) => manejarCambios("titulo", e.target.value)}
        />
        <input
          placeholder="Descripcion"
          type="text"
          value={value.descripcion}
          onChange={(e) => manejarCambios("descripcion", e.target.value)}
        />
        <input
          placeholder="Agrega una fecha"
          type="date"
          value={value.date}
          onChange={(e) => manejarCambios("fecha", e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default ManejoInput;
