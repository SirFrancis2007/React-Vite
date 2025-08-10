import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Exportar cada componente para mostrar en el DOM
import Btn from './components/Btn.jsx'
import Form from './components/Form.jsx'

// El root es del html que se va a redereizar segun lo que diga el app.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Btn />
    <Form />
  </StrictMode>,
)
