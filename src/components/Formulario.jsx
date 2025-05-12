import React from "react";
import './Form.css'
import Button from "./Button";

function Formulario ({ agregarCita }) {
    const handleSubmit = (e) => {
      e.preventDefault(); 
      agregarCita();
    };

    return(
        <>  
            <div className="one-half column">

            <form onSubmit={handleSubmit}>
            <h2>Crear mi Cita</h2>
                <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" id="nombreM"/>
                <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueño" />
                <label>Fecha</label><input type="date" name="fecha" className="u-full-width" id = "date"/>
                <label>Hora</label><input type="time" name="hora" className="u-full-width" id ="time"/>
                <label>Sintomas</label><textarea name="sintomas" className="u-full-width" id ="sintomas"></textarea>
                <Button/>
            </form>
            </div>

        </>
    );
}

export default Formulario