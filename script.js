function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose: Rock, Paper or Scissors?");
console.log(playRound(playerSelection, computerSelection));

function game(PlayRound, PlayRound, PlayRound, PlayRound, PlayRound) {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "Rock" && computerSelection === "Paper") {
            return("You lost! Paper won against Rock!")
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return("You lost! Scissors won against Paper!")
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return("You lost! Rock won against Scissors!")
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return("You won! Rock won against Scissors!")
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return("You won! Paper won against Rock!")
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return("You won! Scissors won against Paper!")
        } else if (playerSelection === "Rock" && computerSelection === "Rock") {
            return("Tie! Nobody won!")
        } else if (playerSelection === "Paper" && computerSelection === "Paper") {
            return("Tie! Nobody won!")
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
            return("Tie! Nobody won!")
        }   
    }  
}