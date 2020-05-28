import React from 'react';
import ReactDOM from 'react-dom';
import hang from './Images/0.jpg';
import AllButtons from './components/AllButtons';
import './App.css';
import RandomWord from './components/Words';

// Skicka donom ord hit seden in i en komponent som skriver ut lika många antal streck? Eller bara length?

let amountOfLines = () => {
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result = result + "_ ";
    
  }
  return result;
}


const test = () => ReactDOM.render(<AllButtons/>, document.getElementsByClassName("buttonContainer")[0]);
let word = RandomWord();
let lines = amountOfLines();
// let app = (
//   <header className="App-header">
//   <h1>Hänga gubbe</h1>
//   <p>Tryck på valfri bokstav för att gissa ordet</p>
//   <img src= {hang} alt = "Hang"></img>
//   <p>{lines}</p>
//   <p> Antal fel: <span id = "antal">0</span></p>
//   <div className = "buttonContainer">
//   <AllButtons></AllButtons>
//   <button onClick = {test.bind(this)}>Reset2</button>
//   </div>
//   </header>
// );

let count = 0;
const addOne = () => {
  count++;
  document.getElementById("antal").textContent = count.toString();
  console.log(count);
};

function App() {
  return (
    <div className="App">
    <header className="App-header">
       <h1>Hänga gubbe</h1>
       <p>Tryck på valfri bokstav för att gissa ordet</p>
       <img src= {hang} alt = "Hang"></img>
       <p>{lines}</p>
       <p> Antal fel: <span id = "antal">0</span></p>
       <div className = "buttonContainer">
       <AllButtons onClick = {addOne.bind(this)}></AllButtons>
       
       </div>
       <button onClick = {test.bind(this)}>Reset2</button>
      </header> 
    </div>
  );
}



export default App;
