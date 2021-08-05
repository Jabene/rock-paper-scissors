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
  }
  classicGame(){

  }
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  classicOpponentFighter() {
    var randomIndex = this.classicFighters[this.getRandomIndex(this.classicFighters)];
    document.getElementById('opponent-fighter').innerHTML = `${randomIndex.icon}`;
    return randomIndex.name;
  }
}
