import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [admission, setAdmission] = useState("");
  const [release, setRelease] = useState("");
  const [reason, setReason] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setPhone(patient.phone);
      setEmail(patient.email);
      setAdmission(patient.admission);
      setRelease(patient.release);
      setReason(patient.reason);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString().substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if ([name, owner, phone, admission, reason].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Patient Object
    const patientObject = {
      name,
      owner,
      phone,
      email,
      admission,
      release,
      reason,
    };

    // Editing Patient Register
    if (patient.id) {
      patientObject.id = patient.id;

      const updatedPatient = patients.map((statePatient) =>
        statePatient.id === patient.id ? patientObject : statePatient
      );
      setPatients(updatedPatient);
      setPatient({});

      // New Patient Register
    } else {
      patientObject.id = generateId();
      // Add a patient object to the array
      setPatients([...patients, patientObject]);
    }

    // Restart Form
    setName("");
    setOwner("");
    setPhone("");
    setEmail("");
    setAdmission("");
    setRelease("");
    setReason("");
  };

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-3'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg text-center mt-5 mb-10'>
        Añade pacientes y {""}{" "}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-sm rounded-lg py-10 px-5 mb-10'
      >
        {error && (
          <Error>
            <p>Campos obligatorios Omitidos</p>
          </Error>
        )}
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block text-gray-700 uppercase font-bold'
          >
            Paciente*
          </label>
          <input
            type='text'
            id='name'
            placeholder='Nombre del Paciente'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray-700 uppercase font-bold'
          >
            Propietario*
          </label>
          <input
            type='text'
            id='owner'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='phone'
            className='block text-gray-700 uppercase font-bold'
          >
            Teléfono*
          </label>
          <input
            type='tel'
            id='phone'
            placeholder='33 0101 0202'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='admission'
            className='block text-gray-700 uppercase font-bold'
          >
            Fecha de Ingreso*
          </label>
          <input
            type='date'
            id='admission'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={admission}
            onChange={(e) => setAdmission(e.target.value)}
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
            value={release}
            onChange={(e) => setRelease(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='reason'
            className='block text-gray-700 uppercase font-bold'
          >
            Motivo*
          </label>
          <textarea
            id='reason'
            placeholder='Describe los síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <input
          type='submit'
          className='bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 rounded-sm cursor-pointer transition-all'
          value={patient.id ? "Actualizar Datos" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
