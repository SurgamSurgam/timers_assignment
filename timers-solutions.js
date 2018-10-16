const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question(`Welcome to rock, paper, scissors. Please type 'rock', 'paper', or 'scissors' to make a choice. \n`, (res) => {

  console.log(`You chose: ${res}`)

  res = res.toLowerCase();
  let compChoice= ['rock', 'paper', 'scissors'];

  if ((res !== compChoice[0]) && (res !== compChoice[1]) && (res !== compChoice[2])) {
    reader.close();
    return console.log("Please only log: rock, paper or scissors");
  }

  setTimeout(() => console.log("Hmm..."), 1000);
  let result = Math.floor(Math.random()* 3);
  setTimeout(() => console.log(`I choose: ${compChoice[result]}`), 2000);

      if ((res === 'rock' && compChoice[result] === 'scissors') ||
          (res === 'scissors' && compChoice[result] === 'paper') ||
            (res === 'paper' && compChoice[result] === 'rock')) {
        setTimeout(() => console.log ('You win'), 3500);
      } else if ((compChoice[result] === 'rock' && res === 'scissors') ||
          (compChoice[result] === 'scissors' && res === 'paper') ||
            (compChoice[result]=== 'paper' && res === 'rock')){
              setTimeout(() => console.log ('You Lose, loser'), 3500);
            } else if (compChoice[result] === res){
              setTimeout(() => console.log("Draw"), 3500);
            }

  reader.close();
});
