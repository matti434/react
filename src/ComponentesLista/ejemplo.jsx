import React, { useState } from 'react'

export const ejemplo = () => {
  
 
   const [formData, setFormData] = useState({
      numero:"",
   });

   const ingreso = (event) => {
     const {name,value} = event.target;

     setFormData({
        ...formData,
        [name]:value
     })
   }

   return (
    <>
    <div>
        <form action="">
            <div>
            <input type="number" value={formData.nombre} onChange={ingreso} />
            </div>
            <button className='bg-primary' onChange={onsubmit}>Enviar</button>
        </form>
    </div>
    </>
  )
}