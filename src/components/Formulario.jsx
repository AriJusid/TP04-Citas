import {React, useState} from "react";
import './Form.css'
import Button from "./Button";
export default Formulario
function Formulario ({setCitas}) {
   
    const [cita, setValor] = useState([]);

    const [nombreMascota, setNombre] = useState("")
    const [nombreDueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")
    
       
    const agregarCita = (event) =>{
        
        event.preventDefault();

        //if (Object.values(citaAgregada).every(valor => valor !== null)){

            setCitas(() => [...cita, {nombreMascota: nombreMascota, nombreDueño: nombreDueño, fecha: fecha, hora: hora, sintomas: sintomas}])
            console.log(nombreMascota)
            setValor({
                nombreMascota: '',
                nombreDueño: '',
                fecha: '',
                hora: '',
                sintomas: ''
              });
        //}       

        /*else{
            alert("Por favor completa todos los campos.");
        }*/

    }

    return(
        <>  
            <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
                <label>Nombre Mascota</label><input type="text" value={nombreMascota} className="u-full-width" placeholder="Nombre Mascota" id="nombre" onChange={(ev) => setNombre(ev.target.value)}/>
                <label>Nombre Dueño</label><input type="text" value={nombreDueño} className="u-full-width" placeholder="Nombre dueño de la mascota" id="dueño" onChange={(ev) => setDueño(setNombre(ev.target.dueño))}/>
                <label>Fecha</label><input type="date" value={fecha} className="u-full-width" id = "date"  onChange={(ev) => setFecha(ev.target.fecha)}/>
                <label>Hora</label><input type="time" value={hora} className="u-full-width" id ="time"  onChange={(ev) => setHora(ev.target.hora)}/>
                <label>Sintomas</label><textarea value={sintomas} className="u-full-width" id ="sintomas"  onChange={(ev) => setSintomas(ev.target.sintomas)}></textarea>
                <Button onClick = {(event) => agregarCita(event)}/>
            </form>
            </div>

        </>
    );
}


