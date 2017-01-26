function TicTacToe(){
  this.board = new Board;
  this.players = [new Player("X"), new Player("O")]
};

TicTacToe.prototype.isTurn = function() {
  return this.players[0].type;
};

TicTacToe.prototype.changeTurn = function() {
  this.players.reverse();
};
