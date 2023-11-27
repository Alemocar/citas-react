import PatientData from "./PatientData";

const Patient = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10'>
        Administra tus {""}
        <span className='text-indigo-600 font-bold'>pacientes y citas</span>
      </p>
      <PatientData />
      <PatientData />
      <PatientData />
      <PatientData />
      <PatientData />
      <PatientData />
    </div>
  );
};

export default Patient;
