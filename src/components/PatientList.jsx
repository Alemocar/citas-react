import PatientData from "./PatientData";

const Patient = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll'>
      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-lg text-center mt-5 mb-10'>
            Administra tus {""}
            <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>
          {patients.map((patient) => (
            <PatientData
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado Pacientes Vacío
          </h2>
          <p className='text-lg text-center mt-5 mb-10'>
            Administra tus pacientes {""}
            <span className='text-indigo-600 font-bold'> desde Aquí</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Patient;
