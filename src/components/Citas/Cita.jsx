import React from "react";
import './Cita.css'
function Cita ({cita, eliminarCita}) {
    return(
        <>
        <div className="one-half column">

         <div className="cita">
            
         <p>Mascota: <span>{cita.nombreMascota}</span></p>
              <p>Dueño: <span>{cita.nombreDueño}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span></p>
              <button  onClick={eliminarCita} className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </div>
        </>
    );
}

export default Cita