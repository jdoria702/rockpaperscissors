let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const image = document.querySelector(".cpu-choice img");
  let randInt = Math.floor(Math.random() * 3);
  if (randInt === 1) {
    image.src = "./images/rock.png";
    return "rock";
  } else if (randInt === 2) {
    image.src = "./images/paper.png";
    return "paper";
  } else {
    image.src = "./images/scissors.png";
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const result = document.querySelector(".result");
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      result.textContent = "Tie!";
    } else if (computerChoice === "paper") {
      result.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else {
      result.textContent = "You win! Rock beats Scissors";
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      result.textContent = "You win! Paper beats Rock";
      humanScore++;
    } else if (computerChoice === "paper") {
      result.textContent = "Tie!";
    } else {
      result.textContent = "You lose! Scissors beats paper";
      computerScore++;
    }
  } else {
    if (computerChoice === "rock") {
      result.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (computerChoice === "paper") {
      result.textContent = "You win! Scissors beats Paper";
      humanScore++;
    } else {
      result.textContent = "Tie!";
    }
  }
}

const humanScoreElement = document.querySelector(".player-score .score");
const computerScoreElement = document.querySelector(".cpu-score .score");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.className, getComputerChoice());
    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;
  });
});

if (humanScore === 5 || computerScore === 5) {
  buttons.forEach((button) => {
    button.removeEventListener("click");
  });
}
