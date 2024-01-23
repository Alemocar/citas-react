const Error = ({ children }) => {
  return (
    <div className='bg-red-600 text-white text-center font-bold p-1 uppercase rounded-xl mb-5 shadow-md'>
      {children}
    </div>
  );
};

export default Error;
