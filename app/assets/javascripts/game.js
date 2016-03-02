function Game(players) {
  this.players = players;
}

Game.prototype.setFirstPlayer = function(player) {
  this.firstPlayer = player;
};
