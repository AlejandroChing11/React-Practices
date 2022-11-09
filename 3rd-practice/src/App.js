
import './App.css';
import { useState } from 'react';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');
  const [Button, setButton] = useState('');



  return (
    <div className="App">
      <select onChange={(e) => {
        setImage(e.target.value)
      }}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={(e) => {
        setLinea1(e.target.value);
      }} type="text" placeholder="Linea 1" /> <br />
      <input onChange={(e) => {
        setLinea2(e.target.value);
      }} type="text" placeholder="Linea 2" /> <br />
      <button onClick={() => {
        alert("Export!");
        html2canvas(document.querySelector("#capture")).then(canvas => {
          document.body.appendChild(canvas);
        });
      }}>Export!</button> <br />


      <div className="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src={"/public/img/" + image + ".jpg"} alt=" " />
      </div>

    </div>
  );
}

export default App;
