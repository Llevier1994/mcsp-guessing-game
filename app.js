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
  
  function play() {
    const secretNumber = randomInt(10);
    let guess = promptInt("Guess a number.");
    let guesses = [guess];
  
    while (guess !== secretNumber) {
      if (guess === null) {
        alert("Goodbye!");
        return;
      }
  
      if (guess < secretNumber) {
        guess = promptInt("Guess higher!");
      } else {
        guess = promptInt("Guess lower!");
      }
  
      guesses.push(guess);
    }
  
    alert(`Correct! Your previous attempts were: ${guesses}.`);
  }
  
  play();
  