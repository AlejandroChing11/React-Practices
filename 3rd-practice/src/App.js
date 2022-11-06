import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState("Hola mundo");
  const [linea2, setLinea2] = useState("Estoy aprendiendo React");
  const [image, setImage] = useState("");


  return (
    <div className="App">
      <select onChange={(e) => {
        setImage(e.target.value)
      }}>
        <option value="Casa">Casa en llamas</option>
        <option value="futurama">futurama</option>
        <option value="history">historty chanel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">philosoraptor</option>
        <option value="smart guy">Smart Guy</option>
      </select> <br />

      <input onChange={(e) => {
        setLinea1(e.target.value);
      }} type="text" placeholder="Linea 1" /> <br />
      <input onChange={(e) => {
        setLinea2(e.target.value);
      }} type="text" placeholder="Linea 2" /> <br />
      <button>Export!</button> <br />


      <div>
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src="" />
      </div>

    </div>
  );
}

export default App;
