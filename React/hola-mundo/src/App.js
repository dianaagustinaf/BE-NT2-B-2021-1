import logo from './logo.svg';
import './App.css';
import Saludo from "./components/Saludo";
import {useState}  from "react";

function App() {
  const [nombre, cambioNombre] = useState('ORT Belgrano')
  
  function cambiarNombre(){
    const nuevoNombre = prompt('cual es tu nombre?')
    
    cambioNombre(nuevoNombre)
  }

  return (
    <div className="App">
      <h1>Hello world! I am {nombre}</h1>

      <Saludo nombre={nombre} />      

      <button onClick={() => { cambiarNombre() }}>Cambio nombre</button>
      
    </div>
  );
}

export default App;
