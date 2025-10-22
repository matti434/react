import React, { useState } from "react";
import ManejoInput from "./ManejoInput.jsx";

const EstadoPrincipal = () => {
  const [tarea, setTarea] = useState({
    titulo: "",
    tipo: "",
    descripcion: "",
    fecha: "",
  });

  const [listaTareas, setListaTarea] = useState([]);

  const manejarAgregarTarea = (nuevaTarea) => {
    if (nuevaTarea.titulo.trim() !== "") {
      if (nuevaTarea.fecha) {
        const fecha = new Date(nuevaTarea.fecha);
        if (isNaN(fecha.getTime())) {
          alert("Fecha debe ser valida");
          return;
        }
      }
      setListaTarea([...listaTareas, nuevaTarea]);
      setTarea({ titulo: "", tipo: "", descripcion: "", fecha: "" });
    } else {
      alert("El contenido de la tarea no puede estar vacio");
      return;
    }
  };

  return (
    <>
      <h1 className="text-center m-4">Lista de Tareas</h1>
      <div>
        <ManejoInput
          value={tarea}
          onChange={setTarea}
          onAgregarTarea={manejarAgregarTarea}
        />
      </div>
    </>
  );
};

export default EstadoPrincipal;
