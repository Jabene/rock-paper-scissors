class Heros {
  constructor(playerFighter, fighters) {
    this.heroFighters = [{
      name: "omniman",
      icon: `<img src="./assets/omniman.png">`,
    }, {
      name: "superman",
      icon: `<img src="./assets/superman.png">`,
    }, {
      name: "hulk",
      icon: `<img src="./assets/hulk.png">`,
    }, {
      name: "goku",
      icon: `<img src="./assets/goku.png">`,
    }, {
      name: "homelander",
      icon: `<img src="./assets/homelander.png">`,
    }];
    this.selectedFighter = playerFighter;
    this.player = currentPlayer;
    this.opponent = opponent;
    this.interval = 0;
  }

  heroGame(){
    if (this.player.fighter === "superman") {
      determineWinner(this.supermanVictory());
    } else if (this.player.fighter === "omniman") {
      determineWinner(this.omnimanVictory());
    } else if (this.player.fighter === "homelander") {
      determineWinner(this.homelanderVictory());
    } else if (this.player.fighter === "goku") {
      determineWinner(this.gokuVictory());
    } else if (this.player.fighter === "hulkman") {
      determineWinner(this.hulkVictory());
    }
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  heroOpponentFighter() {
    let currentIcon = document.getElementById('opponent-fighter').innerHTML
    var newIcon;
    while (!newIcon || currentIcon === newIcon) {
      var randomFighter = this.heroFighters[this.getRandomIndex(this.heroFighters)];
      newIcon = randomFighter.icon
    }

    opponent.fighter = randomFighter;
    displayOpponentChoice(randomFighter.icon);
    this.interval++;
    if (this.interval === 10) {
      clearTimeout(opponentInterval);
      this.heroGame();
      setTimeout(heroGame, 3000)
    }
  }
  omnimanVictory() {
    if (opponent.fighter.name === "omniman") {
      return "draw"
    } else if (opponent.fighter.name === "goku" || "hulk") {
      return "lose"
    } else {
      return "win"
    }
  }
  supermanVictory() {
    if (opponent.fighter.name === "homelander" || "goku") {
      return "win"
    } else if (opponent.fighter.name === "superman") {
      return "draw"
    } else {
      return "lose"
    }
  }
  homelanderVictory() {
    if (opponent.fighter.name === "superman" || "omniman") {
      return "lose"
    } else if (opponent.fighter.name === "goku" || "hulk") {
      return "win"
    } else {
      return "draw"
    }
  }
  gokuVictory() {
    if (opponent.fighter.name === "goku") {
      return "draw"
    } else if (opponent.fighter.name === "superman" || "homelander") {
      return "lose"
    } else {
      return "win"
    }
  }
  hulkVictory() {
    if (opponent.fighter.name === "hulk") {
      return "draw"
    } else if (opponent.fighter.name === "homelander" || "goku") {
      return "lose"
    } else {
      return "win"
    }
  }
}
