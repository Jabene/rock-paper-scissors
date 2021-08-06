var logInButton = document.getElementById('log-in-button');
var playerIcon = document.querySelector('#icon-row');
var classicFighterSelect = document.querySelector('.select-fighter');
var classicGameButton = document.getElementById('classic-game');
var otherGameButton = document.getElementById('other-game');
var changeGameButton = document.getElementById('change-game');
var resetUserButton = document.getElementById('reset-user');

var opponent = new Player();
var currentPlayer = new Player();
var classicGameRunning;
var opponentInterval;

playerIcon.onclick = logIn;
classicGameButton.onclick = classicGame;
classicFighterSelect.onclick = runClassicGame;
otherGameButton.onclick = otherGame;
changeGameButton.onclick = returningPlayer;
resetUserButton.onclick = resetData;



returningPlayer();



function show(node) {
  node.classList.remove('hidden');
}

function hide(node) {
  node.classList.add('hidden');
}



function logIn(e) {
  e.preventDefault();
  var usersName = document.querySelector('input').value || "Stranger";
  var usersIcon = event.target.innerText;
  currentPlayer.name = usersName;
  currentPlayer.icon = usersIcon;
  localStorage.setItem('player', JSON.stringify(currentPlayer));
  localStorage.setItem('opponent', JSON.stringify(opponent))
  returningPlayer();
}

function returningPlayer() {
  if (localStorage.player) {
    var returnedPlayer = JSON.parse(localStorage.getItem('player'));
    currentPlayer = new Player(returnedPlayer.name, returnedPlayer.icon, returnedPlayer.wins);
    var returnedOpponent = JSON.parse(localStorage.getItem('opponent'));
    opponent = new Player("Computer", "👾", returnedOpponent.wins);
    console.log(currentPlayer)
    document.getElementById('users-name').innerText = currentPlayer.name;
    document.getElementById('users-icon').innerText = currentPlayer.icon;
    document.getElementById('player-wins').innerText = `Wins: ${currentPlayer.wins}`;
    document.getElementById('opponent-wins').innerText = `Wins: ${opponent.wins}`;
    hide(document.getElementById('log-in'))
    hide(document.querySelector('.select-fighter'))
    show(document.getElementById('classic-game'))
    show(document.getElementById('other-game'))
    show(document.querySelector('#left-aside'))
    show(document.querySelector('#right-aside'))
    show(document.querySelector('#main-section'))
  }
}

function changeGame() {
  currentPlayer.saveWinsToStorage();
  opponent.saveWinsToStorage();
  document.getElementById('instructions').innerText = "Choose your game!";
  returningPlayer();
}

function resetData() {
  var verifyChoice = window.confirm('Are you sure?')
  if (verifyChoice === true) {
    localStorage.clear();
    location.reload();
  }
}


function classicGame(e) {
  hide(document.getElementById('classic-game'));
  hide(document.getElementById('other-game'));
  hide(document.querySelector('.fighter-arena'));
  show(document.querySelector('.select-fighter'));
  document.getElementById('instructions').innerText = "Select your fighter!";
  document.getElementById('player-wins').innerText = `Wins: ${currentPlayer.wins}`;
  document.getElementById('opponent-wins').innerText = `Wins: ${opponent.wins}`;
  currentPlayer.saveWinsToStorage();
  opponent.saveWinsToStorage();
}

function runClassicGame(e) {
  classicGameRunning = new Game(e.target.id);
  selectFighter(e.target.id);
  classicGameRunning.classicOpponentFighter();
  hide(document.querySelector('.select-fighter'));
  show(document.querySelector('.fighter-arena'));
  document.getElementById('instructions').innerText = "Good Luck!";
  opponentInterval = setInterval(function() {classicGameRunning.classicOpponentFighter()}, 250);
}

function selectFighter(selection) {
  for (var i=0; i<classicGameRunning.classicFighters.length; i++) {
    if (classicGameRunning.classicFighters[i].name.includes(selection))
      document.getElementById('player-fighter').innerHTML = `${classicGameRunning.classicFighters[i].icon}`;
      currentPlayer.fighter = selection;
  }
}

function displayOpponentChoice(icon) {
  document.getElementById('opponent-fighter').innerHTML = `${icon}`;
}

function determineWinner(wld) {
  console.log(wld);
  if (wld === "win") {
    document.getElementById('instructions').innerText = "You Win!";
    currentPlayer.wins++;
    currentPlayer.saveWinsToStorage();
    document.getElementById('player-wins').innerText = `Wins: ${currentPlayer.wins}`;
  } else if (wld === "lose") {
    document.getElementById('instructions').innerText = "You lose!";
    opponent.wins++;
    opponent.saveWinsToStorage();
    document.getElementById('opponent-wins').innerText = `Wins: ${opponent.wins}`;
  } else {
    document.getElementById('instructions').innerText = "Draw!";
  }
}

function otherGame(e) {
  e.preventDefault();
  hide(document.getElementById('classic-game'));
  hide(document.getElementById('other-game'));
  document.getElementById('instructions').innerText = "Select your fighter!";
}
