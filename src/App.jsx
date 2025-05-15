import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Citas/ListadoCitas'
import  { useState } from 'react'


function App() {
  
  const [citas, setCitas] = useState();
  
  return (
    <>
      <Formulario setCitas={setCitas}/>
      <ListadoCitas citas={citas}/>
    </>
  )
}

export default App
