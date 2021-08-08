var logInButton = document.getElementById('log-in-button');
var playerIcon = document.querySelector('#icon-row');
var heroFighterSelect = document.querySelector('.select-hero');
var classicFighterSelect = document.querySelector('.select-fighter');
var classicGameButton = document.getElementById('classic-game');
var heroGameButton = document.getElementById('hero-game');
var changeGameButton = document.getElementById('change-game');
var resetUserButton = document.getElementById('reset-user');

var opponent = new Player();
var currentPlayer = new Player();
var classicGameRunning;
var heroGameRunning;
var opponentInterval;

playerIcon.onclick = logIn;
classicGameButton.onclick = classicGame;
classicFighterSelect.onclick = runClassicGame;
heroFighterSelect.onclick = runHeroGame;
heroGameButton.onclick = heroGame;
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
    document.getElementById('instructions').innerText = "Select your game!";
    hide(document.getElementById('log-in'))
    hide(document.querySelector('.select-fighter'))
    hide(document.querySelector('.select-hero'))
    show(document.getElementById('classic-game'))
    show(document.getElementById('hero-game'))
    show(document.querySelector('#left-aside'))
    show(document.querySelector('#right-aside'))
    show(document.querySelector('#main-section'))
    hide(document.getElementById('change-game'));
  }
}

function changeGame() {
  currentPlayer.saveWinsToStorage();
  opponent.saveWinsToStorage();
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
  hide(document.getElementById('hero-game'));
  hide(document.querySelector('.fighter-arena'));
  show(document.querySelector('.select-fighter'));
  document.getElementById('instructions').innerText = "Select your fighter!";
  document.getElementById('arena').classList.remove('hero-arena')
  document.getElementById('arena').classList.add('arena')
  show(document.getElementById('change-game'));
}

function runClassicGame(e) {
  if (!e.target.id) {
    return
  };
  classicGameRunning = new Game(e.target.id);
  selectFighter(e.target.id);
  classicGameRunning.classicOpponentFighter();
  hide(document.querySelector('.select-fighter'));
  show(document.querySelector('.fighter-arena'));
  document.getElementById('instructions').innerText = "Good Luck!";
  hide(document.getElementById('change-game'));
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

function heroGame() {  hide(document.getElementById('classic-game'));
  hide(document.getElementById('hero-game'));
  hide(document.querySelector('.fighter-arena'));
  show(document.querySelector('.select-hero'))
  document.getElementById('instructions').innerText = "Select your fighter!";
  show(document.getElementById('change-game'));
  document.getElementById('arena').classList.add('hero-arena')
  document.getElementById('arena').classList.remove('arena')
}

function runHeroGame(e) {
  if (!e.target.id) {
    return
  };
  heroGameRunning = new Heros(e.target.id);
  selectHero(e.target.id);
  heroGameRunning.heroOpponentFighter();
  hide(document.querySelector('.select-hero'));
  show(document.querySelector('.fighter-arena'));
  hide(document.getElementById('change-game'));
  document.getElementById('instructions').innerText = "Good Luck!";
  opponentInterval = setInterval(function() {heroGameRunning.heroOpponentFighter()}, 250);
}

function selectHero(selection) {
  for (var i=0; i<heroGameRunning.heroFighters.length; i++) {
    if (heroGameRunning.heroFighters[i].name.includes(selection))
      document.getElementById('player-fighter').innerHTML = `${heroGameRunning.heroFighters[i].icon}`;
      currentPlayer.fighter = selection;
  }
}
