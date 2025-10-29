import { useState } from "react";

const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✅" : "⛔"}
    </li>
  );
};

export const ListadoAPP = () => {

  const addTask = () => {
    setArreglo([...arreglo,{id:8,nombre:'nuevo',visto:true}]);
  };

  let listadoSecciones = [

  { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Usos de Vite", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables en JSX", visto: true },
    { id: 5, nombre: "Props", visto: true },
    { id: 6, nombre: "Redux", visto: false },
    { id: 7, nombre: "customHooks", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        {arreglo.map((item) => <Items key={item.id} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>

<<<<<<< HEAD
      <button onClick={() => addTask()}>Agregar tarea</button>
=======
      <button onClick={() => addTask()}>Agregar Tarea</button>
>>>>>>> 07f7af3c4e892b705b528b0888bab8e1f4f3b7cc
    </>
  );
};
