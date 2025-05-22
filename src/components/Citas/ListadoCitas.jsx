import Cita from './Cita'

function ListadoCitas({ citas, eliminarCita}) {
  return (
    <>
    {citas.map((cita, index) => (
      <Cita cita={cita} eliminarCita={() => eliminarCita(index)} />
    ))}
    </>
    );
}

export default ListadoCitas