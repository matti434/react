import React, { useState } from 'react'
import ManejoInput from './ManejoInput'
export const EstadoPrincipal = () => {
  
    const [tarea,setTarea] = useState("");
    const [listaTareas,setListaTarea] = useState({});

    const manejarAgregarTarea = (nuevaTarea) =>{

       setListaTarea([...listaTareas,nuevaTarea]);
       setTarea("");
    }
    return (
    <div>
        <ManejoInput id={id} value= {tarea} onChange={setTarea} onAgregarTarea= {manejarAgregarTarea} />
    </div>
  )
}
