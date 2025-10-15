import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContadorApp } from './Componentes/ContadorApp'
import { ListadoAPP } from './Componentes/ListadoAPP'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ListadoAPP/>
  </StrictMode>,
)
