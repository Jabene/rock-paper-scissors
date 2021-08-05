class Game {
  constructor(playerFighter, fighters) {
    this.classicFighters = [{
      name: "classic-rock",
      icon: `<img src="./assets/rock-log-in.png" />`,
    }, {
      name: "classic-paper",
      icon: `<img src="./assets/paper-log-in.png" />`,
    }, {
      name: "classic-scissors",
      icon: `<img src="./assets/scissors-log-in.png" />`,
    }];
    this.selectedFighter = playerFighter;
    this.player = currentPlayer;
    this.opponent = opponent;
    this.interval = 0;
  }
  classicGame(){
    if (this.player.fighter === "classic-rock"
        && this.opponent.fighter === "classic-paper" ) {

        }
  }
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  classicOpponentFighter() {
    var randomIndex = this.classicFighters[this.getRandomIndex(this.classicFighters)];
    opponent.fighter = randomIndex;
    document.getElementById('opponent-fighter').innerHTML = `${randomIndex.icon}`;
    this.interval++;
    if (this.interval === 10) {
      clearTimeout(opponentInterval);
      setTimeout(classicGame, 3000)
      return randomIndex.name;
    }

  }
}
