import React from 'react';
import hang from './Images/0.jpg';
import './App.css';
import MyButton from './components/MyButton';

let letters = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r","s", "t", "u", "w", "x","y", "z", "å", "ä", "ö"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hänga gubbe</h1>
       <p>Tryck på valfri bokstav för att gissa ordet</p>
       <img src= {hang} alt = "Hang"></img>
       <p>_  _  _  _  _  _</p>
       <p> Antal fel: <span id = "antal">0</span></p>
       <div className = "buttonContainer">
       <MyButton array = {letters}></MyButton>
       </div>
      </header>
     
      
    </div>
  );
}

export default App;
