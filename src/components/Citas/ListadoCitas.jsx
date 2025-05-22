import Cita from './Cita'

function ListadoCitas({ citas, eliminarCita}) {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column'}} >
    <h2 style={{textAlign:'center', marginLeft: '150px'}}>Administra tus citas</h2>

    {citas.map((cita, index) => (
      <Cita cita={cita} eliminarCita={() => eliminarCita(index)} />
    ))}
    </div>
    </>
    );
}

export default ListadoCitas