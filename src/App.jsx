import './App.css'
import Formulario from './components/Formulario'
import ListadoCitas from './components/Citas/ListadoCitas'
import  { useState } from 'react'


function App() {
  
  const [citas, setCitas] = useState([]);

  const agregarCita = () => {
    const citaDePrueba = {
      id: Date.now(),
      nombreMascota: 'Nina',
      nombre: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    };
    setCitas([...citas, citaDePrueba]);
  };
  
  return (
    <>
      <Formulario agregarCita={agregarCita}/>
      <ListadoCitas citas={citas}/>
    </>
  )
}

export default App
