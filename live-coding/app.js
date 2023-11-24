const playerOneName = document.querySelector('.player-one-name');
const playerOneScore = document.querySelector('.player-one-score');
const playerTwoName = document.querySelector('.player-two-name');
const playerTwoScore = document.querySelector('.player-two-score');
const activePlayerName = document.querySelector('.active-player-name');
const gameboardDice = document.querySelector('.gameboard-dice');
const gameboardRollBtn = document.querySelector('.gameboard-roll-btn');
const playerOneScorelist = document.querySelector('.player-one-scorelist');
const playerTwoScorelist = document.querySelector('.player-two-scorelist');

const playerOne = {
  name: "Yves",
  score: 0
}

const playerTwo = {
  name: "Gertrude",
  score: 0
}

const dice = {
  value: 0,
  rolls: []
}

const scoreboard = {}

let activePlayerIndex = 0;

function renderDiceData() {
  gameboardDice.textContent = dice.value;
}

function renderPlayerData() {
  playerOneName.textContent = playerOne.name;
  playerOneScore.textContent = playerOne.score;

  playerTwoName.textContent = playerTwo.name;
  playerTwoScore.textContent = playerTwo.score;

  activePlayerName.textContent = getActivePlayer().name;
}

function renderPlayerScores() {
  playerOneScorelist.innerHTML = '';
  playerTwoScorelist.innerHTML = '';

  for(let i = 0; i < dice.rolls.length; i++) {
    let li = document.createElement('li');
    li.textContent = dice.rolls[i];

    if(i % 2 == 0) {
      playerOneScorelist.append(li);
    } else {
      playerTwoScorelist.append(li);
    }
  }
}

function getActivePlayer() {
  if(activePlayerIndex == 0) {
    return playerOne;
  } else {
    return playerTwo;
  }
}

function setNextTurn() {
  if(activePlayerIndex == 0) {
    activePlayerIndex = 1;
  } else {
    activePlayerIndex = 0;
  }
  renderPlayerData();
}


function rollDice() {
  dice.value = Math.floor(Math.random() * 6) + 1;
  dice.rolls.push(dice.value);

  if(dice.rolls.length % 2 == 0) {
    if(dice.rolls[dice.rolls.length - 2] > dice.rolls[dice.rolls.length - 1]) {
      playerOne.score += 1;
    } else {
      playerTwo.score += 1;
    }
  }

  renderPlayerScores();
  renderDiceData();
  renderPlayerData();
}
gameboardRollBtn.addEventListener('click', rollDice);
