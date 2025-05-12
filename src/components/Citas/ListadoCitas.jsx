import Cita from './Cita'

function ListadoCitas({ citas }) {
  return (
    <>
    {citas.map((cita) => (
      <Cita key={cita.id} cita={cita} />
    ))}
    </>
    );
}

export default ListadoCitas