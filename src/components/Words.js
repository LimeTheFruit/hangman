let words = ["fundera", "fassad", "färdig"];
Math.floor(Math.random() * words.length);

let RandomWord = () => words[Math.floor(Math.random() * words.length)];

export default RandomWord;
