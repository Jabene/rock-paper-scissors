var logInButton = document.getElementById('log-in-button');
var playerIcon = document.querySelector('#icon-row');


var opponent;
var parsedPlayer;

playerIcon.onclick = logIn;

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
  localStorage.setItem('player', JSON.stringify(new Player(usersName, usersIcon)));
  opponent = new Player();
  localStorage.setItem('opponent', JSON.stringify(opponent))
  returningPlayer();
}

function returningPlayer() {
  if (localStorage.player) {
    var returnedPlayer = localStorage.getItem('player');
    parsedPlayer = JSON.parse(returnedPlayer);
    document.getElementById('users-name').innerText = parsedPlayer.name;
    document.getElementById('users-icon').innerText = parsedPlayer.icon;
    hide(document.getElementById('log-in'))
    show(document.querySelector('#left-aside'))
    show(document.querySelector('#right-aside'))
    show(document.querySelector('#main-section'))
  }
}
