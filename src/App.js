import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hänga gubbe</h1>
       <p>Tryck på valfri bokstav för att gissa ordet</p>
       <img src="Images/0.jpg" alt = "Hang"></img>
       <p>_  _  _  _  _  _</p>
       <p>Antal fel: <span id = "antal">0</span></p>
      </header>
      
    </div>
  );
}

export default App;
