var logInButton = document.getElementById('log-in-button');
var playerIcon = document.querySelector('#icon-row');
var classicFighterSelect = document.querySelector('.select-fighter');
var classicGameButton = document.getElementById('classic-game');
var otherGameButton = document.getElementById('other-game');

var opponent;
var currentPlayer;
var classicGameRunning;
var opponentInterval;

playerIcon.onclick = logIn;
classicGameButton.onclick = classicGame;
classicFighterSelect.onclick = runClassicGame;
otherGameButton.onclick = otherGame;


returningPlayer();



function show(node) {
  node.classList.remove('hidden');
}

function hide(node) {
  node.classList.add('hidden');
}

// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }



function logIn(e) {
  e.preventDefault();
  var usersName = document.querySelector('input').value || "Stranger";
  var usersIcon = event.target.innerText;
  localStorage.setItem('player', JSON.stringify(new Player(usersName, usersIcon)));
  localStorage.setItem('opponent', JSON.stringify(new Player()))
  returningPlayer();
}

function returningPlayer() {
  if (localStorage.player) {
    var returnedPlayer = localStorage.getItem('player');
    currentPlayer = JSON.parse(returnedPlayer);
    var returnedOpponent = localStorage.getItem('opponent');
    opponent = JSON.parse(returnedOpponent);
    document.getElementById('users-name').innerText = currentPlayer.name;
    document.getElementById('users-icon').innerText = currentPlayer.icon;
    hide(document.getElementById('log-in'))
    show(document.querySelector('#left-aside'))
    show(document.querySelector('#right-aside'))
    show(document.querySelector('#main-section'))
  }
}



function classicGame(e) {
  // e.preventDefault();
  hide(document.getElementById('classic-game'));
  hide(document.getElementById('other-game'));
  hide(document.querySelector('.fighter-arena'));
  show(document.querySelector('.select-fighter'));
  document.getElementById('instructions').innerText = "Select your fighter!";
}

function runClassicGame(e) {
  classicGameRunning = new Game(e.target.id);
  selectFighter(e.target.id);
  classicGameRunning.classicOpponentFighter();
  hide(document.querySelector('.select-fighter'));
  show(document.querySelector('.fighter-arena'));
  opponentInterval = setInterval(function() {classicGameRunning.classicOpponentFighter()}, 250);
  var winner = classicGameRunning.classicGame();

}

function selectFighter(selection) {
  for (var i=0; i<classicGameRunning.classicFighters.length; i++) {
    if (selection.includes(classicGameRunning.classicFighters[i].name))
      document.getElementById('player-fighter').innerHTML = `${classicGameRunning.classicFighters[i].icon}`;
      currentPlayer.fighter = selection;
  }
}

function determineWinner(playerChoice, opponentChoice) {

}

function otherGame(e) {
  e.preventDefault();
  hide(document.getElementById('classic-game'));
  hide(document.getElementById('other-game'));
  document.getElementById('instructions').innerText = "Select your fighter!";
}
