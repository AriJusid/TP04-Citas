import React from "react";
import './Form.css'
import Button from "./Button";

function Formulario ({setCitas}) {

    const guardarValor = (cita) =>{
        
    }
    const agregarCita = (cita) => {
        const citaAgregada = {
          id: Date.now(),
          nombreMascota: cita.nombre,
          nombre: cita.dueño,
          fecha: cita.fecha,
          hora: cita.hora,
          sintomas: cita.sintomas
        };
        setCitas([...citas, citaAgregada]);
    
    return(
        <>  
            <div className="one-half column">

            <form  onSubmit = { () => setCitas(agregarCita(citaAgregada))} >
            <h2>Crear mi Cita</h2>
                <label>Nombre Mascota</label><input type="text" value="mascota" className="u-full-width" placeholder="Nombre Mascota" id="nombreM" onChange={guardarValor()}/>
                <label>Nombre Dueño</label><input type="text" value="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueño" onChange={guardarValor()}/>
                <label>Fecha</label><input type="date" value="fecha" className="u-full-width" id = "date"  onChange={guardarValor()}/>
                <label>Hora</label><input type="time" value="hora" className="u-full-width" id ="time"  onChange={guardarValor()}/>
                <label>Sintomas</label><textarea value="sintomas" className="u-full-width" id ="sintomas"  onChange={guardarValor()}></textarea>
                <Button/>
            </form>
            </div>

        </>
    );
}

export default Formulario