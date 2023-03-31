var mysteryNum = 15;

let input = prompt('Guess a number.');
let guess = Number(input);

console.log(guess);

while(Number.isInterger(guess)){
    guess= Number(prompt('Sorry, Try again'));
}

while(guess !== mysteryNum){
    if(guess < mysteryNum){
        guess = Number(prompt('Go higher'))
    }else if(guess > mysteryNum){
        guess = Number(prompt('No, lower'));
    }
}

alert("YAYYYY, YOU GOT IT!")