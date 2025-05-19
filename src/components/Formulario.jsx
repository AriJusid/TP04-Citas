import {React, useState} from "react";
import './Form.css'
import Button from "./Button";
export default Formulario
function Formulario ({setCitas}) {
   
    const [cita, setValor] = useState({
        nombreMascota: '',
        nombre: '',
        fecha:'',
        hora: '',
        sintomas: ''
    });

    const guardarValor = (cita) => {
        const citaAgregada = {
          nombreMascota: cita.nombre,
          nombre: cita.dueño,
          fecha: cita.fecha,
          hora: cita.hora,
          sintomas: cita.sintomas
        };
        return citaAgregada
    }
    
       
    const agregarCita = (citaAgregada) =>{
        if (Object.values(citaAgregada).every(valor => valor !== null)){
            setCitas(() => [...cita, setValor])
            
            setValor({
                nombreMascota: '',
                nombreDueño: '',
                fecha: '',
                hora: '',
                sintomas: ''
              });
        }       

        else{
            alert("Por favor completa todos los campos.");
        }
    }

    return(
        <>  
            <div className="one-half column">

            <form  onSubmit = { () => agregarCita()} >
            <h2>Crear mi Cita</h2>
                <label>Nombre Mascota</label><input type="text" value={cita.nombre}  className="u-full-width" placeholder="Nombre Mascota" id="nombre" onChange={guardarValor()}/>
                <label>Nombre Dueño</label><input type="text" value={cita.dueño} className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueño" onChange={guardarValor()}/>
                <label>Fecha</label><input type="date" value={cita.fecha} className="u-full-width" id = "date"  onChange={guardarValor()}/>
                <label>Hora</label><input type="time" value={cita.hora} className="u-full-width" id ="time"  onChange={guardarValor()}/>
                <label>Sintomas</label><textarea value={cita.sintomas} className="u-full-width" id ="sintomas"  onChange={guardarValor()}></textarea>
                <Button/>
            </form>
            </div>

        </>
    );
}


