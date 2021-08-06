class Game {
  constructor(playerFighter, fighters) {
    this.classicFighters = [{
      name: "classic-rock",
      icon: `<img src="./assets/player-rock.png">`,
    }, {
      name: "classic-paper",
      icon: `<img src="./assets/player-paper.png">`,
    }, {
      name: "classic-scissors",
      icon: `<img src="./assets/player-scissors.png">`,
    }];
    this.selectedFighter = playerFighter;
    this.player = currentPlayer;
    this.opponent = opponent;
    this.interval = 0;
  }

  classicGame(){
    if (this.player.fighter === "classic-rock") {
      determineWinner(this.rockVictory());
    } else if (this.player.fighter === "classic-paper") {
      determineWinner(this.paperVictory());
    } else {
      determineWinner(this.scissorsVictory());
    }
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  classicOpponentFighter() {
    let currentIcon = document.getElementById('opponent-fighter').innerHTML
    var newIcon;
    while (!newIcon || currentIcon === newIcon) {
      var randomFighter = this.classicFighters[this.getRandomIndex(this.classicFighters)];
      newIcon = randomFighter.icon
    }
    opponent.fighter = randomFighter;
    displayOpponentChoice(randomFighter.icon);
    this.interval++;
    if (this.interval === 10) {
      clearTimeout(opponentInterval);
      this.classicGame();
      setTimeout(classicGame, 3000)
    }
  }
  rockVictory() {
    if (opponent.fighter.name === "classic-rock") {
      return "draw"
    } else if (opponent.fighter.name === "classic-paper") {
      return "lose"
    } else {
      return "win"
    }
  }
  paperVictory() {
    if (opponent.fighter.name === "classic-rock") {
      return "win"
    } else if (opponent.fighter.name === "classic-paper") {
      return "draw"
    } else {
      return "lose"
    }
  }
  scissorsVictory() {
    if (opponent.fighter.name === "classic-rock") {
      return "lose"
    } else if (opponent.fighter.name === "classic-paper") {
      return "win"
    } else {
      return "draw"
    }
  }
}
