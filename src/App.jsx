import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Citas/ListadoCitas'
import  { useState } from 'react'


function App() {
  
  const [citas, setCitas] = useState([]);
  
  return (
    <>
      <h2>Administra tus citas</h2>
      <div style={{display:'flex'}}/>
        <Formulario setCitas={setCitas}/>
        <ListadoCitas citas={citas}/>
      <div/>
    </>
  )
}

export default App
