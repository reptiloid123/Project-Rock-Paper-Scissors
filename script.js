function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return "You lost! Paper won against Rock!";
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return "You lost! Scissors won against Paper!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return "You lost! Rock won against Scissors!";
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You won! Rock won against Scissors!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You won! Paper won against Rock!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You won! Scissors won against Paper!";
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        return "Tie! Nobody won!";
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return "Tie! Nobody won!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "Tie! Nobody won!";
    }
     else {
         return "Choose Rock, Paper, Scissors";
     }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toUpperCase()
console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose: Rock, Paper, or Scissors?").toUpperCase()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
