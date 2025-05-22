import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Citas/ListadoCitas'
import  { useState } from 'react'


function App() {
  
  const [citas, setCitas] = useState([]);
  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index)
    setCitas(nuevasCitas)
  }

  
  return (
    <>
      <h2>Administra tus citas</h2>
      <div style={{display:'flex'}}/>
        <Formulario setCitas={setCitas}/>
        <ListadoCitas citas={citas} eliminarCita={eliminarCita}/>
      <div/>
    </>
  )
}

export default App
