const selections = ["paper", "scissors", "rock"];

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";

  // In this order: paper beats rock, scissors beats paper, rock beats scissors.
  const beats = {
    paper: "rock",
    scissors: "paper",
    rock: "scissors",
  };

  return beats[playerChoice] === computerChoice ? "win" : "lost";
}

const scoreboard = {
  playerScore: 0,
  playerLost: 0,
  computerScore: 0,
  computerLost: 0,
  draws: 0,
  gamesPlayed: 0,
  result: "",
};

const form = document.querySelector("form");
const scoreboardElement = document.querySelector("#scoreboard");
const computerElement = document.querySelector("#computer-section");
const resultElement = document.querySelector("#result-section");

function getRandomInt() {
  return Math.floor(Math.random() * selections.length);
}

function renderComputerSelection(choice) {
  computerElement.innerHTML = `
    <h2>Computer Selection</h2>
    <p>Computer selected: ${choice}</p>
  `;
}

function renderResultSection() {
  resultElement.innerHTML = `
    <h2>Result</h2>
    <p>The result was: ${scoreboard.result}</p>
  `;
}

function renderScoreboard() {
  scoreboardElement.innerHTML = `
    <h2>Scoreboard</h2>
    <p>Player wins: ${scoreboard.playerScore}</p>
    <p>Player losses: ${scoreboard.playerLost}</p>
    <p>Computer wins: ${scoreboard.computerScore}</p>
    <p>Computer losses: ${scoreboard.computerLost}</p>
    <p>Draws: ${scoreboard.draws}</p>
    <p>Games played: ${scoreboard.gamesPlayed}</p>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const playerChoice = form.querySelector(
    'input[name="selection"]:checked'
  ).value;
  const computerChoice = selections[getRandomInt()];

  scoreboard.result = getResult(playerChoice, computerChoice);
  scoreboard.gamesPlayed++;

  if (scoreboard.result === "win") {
    scoreboard.playerScore++;
    scoreboard.computerLost++;
  } else if (scoreboard.result === "lost") {
    scoreboard.playerLost++;
    scoreboard.computerScore++;
  } else {
    scoreboard.draws++;
  }

  renderComputerSelection(computerChoice);
  renderResultSection();
  renderScoreboard();
});
