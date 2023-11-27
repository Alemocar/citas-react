import Form from "./components/Form";
import Header from "./components/Header";
import Patient from "./components/Patient";

function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form />
        <Patient />
      </div>
    </div>
  );
}

export default App;
