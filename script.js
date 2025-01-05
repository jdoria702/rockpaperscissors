let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randInt = Math.floor(Math.random() * 3);
  if (randInt === 1) {
    return "rock";
  } else if (randInt === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Scissors?").toLowerCase();

  while (
    userInput != "rock" &&
    userInput != "paper" &&
    userInput != "scissors"
  ) {
    userInput = prompt(
      "Invalid Entry. Please choose one of the following: Rock, Paper, Scissors?"
    );
  }

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("Tie!");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    } else {
      console.log("You win! Rock beats Scissors");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "paper") {
      console.log("Tie!");
    } else {
      console.log("You lose! Scissors beats paper");
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      humanScore++;
    } else {
      console.log("Tie!");
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Your Score: ${humanScore} \nComputer Score: ${computerScore}`);
  }
}
