import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContadorApp } from './ContadorApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>,
)
