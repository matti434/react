import React, { useState } from 'react'
import ManejoInput from './ManejoInput.jsx'
import RecibeToDo from './RecibeToDo.jsx'

const EstadoPrincipal = () => {
    
    const [tarea,setTarea] = useState([
      titulo,
      descripcion,
      fecha
    ]);

    const [listaTareas,setListaTarea] = useState([]);

    const manejarAgregarTarea = (nuevaTarea) =>{

      if(nuevaTarea.trim() === ""){
        
      }
       setListaTarea([...listaTareas,nuevaTarea]);
       setTarea("");
    }


    return (
    <div>
        <ManejoInput value= {tarea} onChange={setTarea} onAgregarTarea= {manejarAgregarTarea} />
    </div>
  )
}

export default EstadoPrincipal;