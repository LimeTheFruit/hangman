import React, {useState, useEffect} from 'react';
import hang from './Images/0.jpg';
import hang1 from './Images/1.jpg';
import hang2 from './Images/2.jpg';
import hang3 from './Images/3.jpg';
import hang4 from './Images/4.jpg';
import hang5 from './Images/5.jpg';
import hang6 from './Images/6.jpg';
import Key from './components/Key';
import './App.css';
import RandomWord from './components/Words';

let arrayOfKeys = [];
const addKeyToArray = (key) =>{
  arrayOfKeys.push(key);
}

let arrayOfImages = [hang6, hang5, hang4, hang3, hang2, hang1, hang];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
let word = RandomWord();

const App = () => {

  const [count, setCount] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [correctGuesses, setCorrectGuesses] = useState('');
  let regex = new RegExp(`[^${correctGuesses}]`, 'gi');
  const [maskedWord, setMaskedWord] = useState(word.replace(regex, ' _ '));

  useEffect(() => {
    if (count < 1){
      setGameOver(true); 
      setMaskedWord(word);
    }
    else{
      correctGuesses.length === word.length && setGameOver(true);
      regex = new RegExp(`[^${correctGuesses}]`, 'gi');
      setMaskedWord(word.replace(regex, ' _ '));
    } 
  }, [count, correctGuesses])

  const reset = () => {

    const enabled = {
      backgroundColor: '#ffc107',
      color: 'white',
      boxShadow: '0px 7px #ff9800',
      enabled: true
    };
  
    arrayOfKeys.map(i => i.setKeyStatus(enabled));
    setCount(6);
    setGameOver(false);
    setCorrectGuesses('');
    word = RandomWord();
  };

  const keyClicked = (e) => {
    let letter = e.target.textContent;
    word.includes(letter) ? setCorrectGuesses(correctGuesses + letter) : setCount(count - 1);
  };

  const gameOverMessage = () =>{
      return (count < 1) ? <p>Du förlorade!!</p> : <p>Du vann!!!</p>;
    };

  let renderKeys = letters.map(element => 
    <Key 
        addKeyToParent = {addKeyToArray} 
        class = "button" 
        letter = {element} 
        keyClicked = {keyClicked}
        key={element}>
    </Key>);

  return (
    <div className="App">

       <h1>Hänga gubbe</h1>
       <p>Tryck på valfri bokstav för att gissa ordet</p>
       <img src= {arrayOfImages[count]} alt = "Hang"></img>
       <h2>{maskedWord}</h2>
       <p> Gissningar kvar: {count}</p>

       <div className = "buttonContainer">
        {gameOver ? gameOverMessage() : renderKeys}
       </div>

       <button id = "reset" onClick = {reset}>Återställ</button>

    </div>
  );
}

export default App;
