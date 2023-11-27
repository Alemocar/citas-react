import { useState } from "react";

const Form = () => {
  const [getPatient, setGetPatient] = useState("");

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10'>
        Añade pacientes y {""}{" "}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-sm rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label
            htmlFor='patient'
            className='block text-gray-700 uppercase font-bold'
          >
            Paciente
          </label>
          <input
            type='text'
            id='patient'
            placeholder='Nombre del Paciente'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={getPatient}
            onChange={(e) => setGetPatient(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray-700 uppercase font-bold'
          >
            Propietario
          </label>
          <input
            type='text'
            id='owner'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='phone'
            className='block text-gray-700 uppercase font-bold'
          >
            Teléfono
          </label>
          <input
            type='tel'
            id='phone'
            placeholder='33 0101 0202'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='email@correo.com'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='admission'
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha de Ingreso
          </label>
          <input
            type='date'
            id='admission'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='release'
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha de Alta
          </label>
          <input
            type='date'
            id='release'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='symptoms'
            className='block text-gray-700 uppercase font-bold'
          >
            Síntomas
          </label>
          <textarea
            id='symptoms'
            placeholder='Describe los síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 rounded-sm cursor-pointer transition-all'
          value={"Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
