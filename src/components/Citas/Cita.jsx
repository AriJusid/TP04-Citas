import React from "react";
import './Cita.css'
function Cita ({cita}) {

    return(
        <>
        <div className="one-half column">

        <h2>Administra tus citas</h2>
         <div className="cita">
         <p>Mascota: <span>{cita.nombreMascota}</span></p>
              <p>Dueño: <span>{cita.nombre}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span></p><button className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </div>
        </>
    );
}

export default Cita