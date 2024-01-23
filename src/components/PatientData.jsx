const PatientData = ({ patient, setPatient, deletePatient }) => {
  const { name, owner, phone, email, admission, release, reason, id } = patient;

  const handleDelete = () => {
    const answer = confirm(`Eliminar Paciente: ${name}`);

    if (answer) {
      deletePatient(id);
    }
  };

  return (
    <div className='my-5 m-3 bg-white shadow-md px-5 py-10 rounded-md'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Paciente: {""}
        <span className='font-normal normal-case'>{name}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {""}
        <span className='font-normal normal-case'>{owner}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Teléfono: {""}
        <span className='font-normal normal-case'>{phone}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {""}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Ingreso: {""}
        <span className='font-normal normal-case'>{admission}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: {""}
        <span className='font-normal normal-case'>{release}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Motivo: {""}
        <span className='font-normal normal-case'>{reason}</span>
      </p>
      <div className='flex lg:justify-end justify-center'>
        <button
          type='button'
          className='py-2 px-5 mx-1 mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-xl'
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          type='button'
          className='py-2 px-5 mx-1 mt-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-xl '
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientData;
