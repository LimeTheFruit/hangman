let words = ["funka", "gå", "arbeta", "färdig"];
Math.floor(Math.random() * words.length);

let RandomWord = () => words[Math.floor(Math.random() * words.length)];

export default RandomWord;
