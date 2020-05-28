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


const test = () =>{
  let letterButtons = Array.from(document.getElementsByClassName('button'));
      letterButtons.map(letterButton => {
      letterButton.style.backgroundColor = '#ffc107';
      letterButton.style.color = 'white';
      letterButton.style.boxShadow = '0px 7px #ff9800';
      letterButton.style.disabled = 'false';
      letterButton.value = "";
      });
      document.getElementById("antal").textContent = 0;
}

let word = RandomWord();
let lines = amountOfLines();


let count = 0;
const addOne = (e) => {
  
  if (e.target.className === 'button' && e.target.value === ""){
    e.target.style.backgroundColor = '#bdbdbd';
    e.target.value = "clicked";
    e.target.style.boxShadow = '0px 7px #616161';
    e.target.style.disabled = 'true';
    e.target.style.color = 'white';
    const antal = document.getElementById("antal");
    let nyttAntal = Number(antal.textContent) + 1;
    antal.textContent = nyttAntal;
  }
  
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
       <div className = "buttonContainer" onClick = {addOne.bind(this)}>
       <AllButtons></AllButtons>
       
       </div>
       <button onClick = {test.bind(this)}>Reset</button>
      </header> 
    </div>
  );
}



export default App;
