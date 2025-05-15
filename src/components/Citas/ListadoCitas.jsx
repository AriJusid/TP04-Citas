import Cita from './Cita'

function ListadoCitas({ citas }) {
  return (
    <>
    {citas.map((cita) => (
      <Cita cita={cita} />
    ))}
    </>
    );
}

export default ListadoCitas