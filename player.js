class Player {
  constructor(name, icon, wins) {
    this.name = name || "Computer";
    this.wins = wins ||0;
    this.icon = icon || "👾";
    this.fighter = "";
  }

  saveWinsToStorage() {
    var stringifyPlayer = JSON.stringify(this);
    if (this.name === "Computer") {
      localStorage.setItem('opponent', stringifyPlayer);
    } else {
      localStorage.setItem('player', stringifyPlayer);
    }
  }

  retrieveWinsFromStorage() {

  }
}
