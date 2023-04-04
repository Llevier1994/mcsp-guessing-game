function randomInt(n) {
    return Math.floor(Math.random() * n) + 1;
  }
  
  function parseInput(string) {
    if (string === "") {
      return NaN;
    } else if (string === null) {
      return null;
    } else {
      return Number(string);
    }
  }
  
  function promptInt(message) {
    let number = parseInput(prompt(message));
  
    while (!Number.isInteger(number) && number !== null) {
      number = parseInput(prompt("Please enter an integer."));
    }
  
    return number;
  }
  
  let players = {};

  function play(){
    const secretNumber = randomInt(10);
    let name = prompt("Enter your name?");
    let guess = promptInt("Pick a number.");
    let guesses = [guess];
  
    while (guess !== secretNumber) {
      if (guess === null) {
        alert("Quitter!");
        break;
      }
  
      if (guess < secretNumber) {
        guess = promptInt("Try higher!");
      } else {
        guess = promptInt("Try lower!");
      }
  
      guesses.push(guess);
    }

    if(players[name]!== undefined){
      const numGuesses = guesses.length;
      const prevGuesses = players[name].length;
      if(numGuesses > prevGuesses){
        alert (`That’s Correct ${name}! You did better in your last game by ${numGuesses - prevGuesses} fewer guesses.`);
      }else if(prevGuesses > numGuesses){
        alert (`That’s Correct ${name}! And you beat your previous attempt by ${prevGuesses-numGuesses} fewer guesses!`);
      }else{
        alert(`Correct! Your previous attempts were the same: ${guesses}.`);
      }
    }
      players[name] = guesses;

const shouldPlayAgain = prompt ('Would you like to play again?');
if(shouldPlayAgain.toLowerCase() === "y"){
  play();
}else{
  alert(`Thanks for playing, ${name}!`);
  }
}
  play();
