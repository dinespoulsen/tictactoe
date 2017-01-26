function TicTacToe(){
  this.board = new Board;
  this.players = [new Player("X"), new Player("O")];
  this.winner = null;
};

TicTacToe.prototype.isTurn = function() {
  return this.players[0];
};

TicTacToe.prototype.changeTurn = function() {
  this.players.reverse();
};

TicTacToe.prototype.findField = function(placement){
  return this.board.fields[placement[0]][placement[1]];
};

TicTacToe.prototype.checkField = function(placement){
  var field = this.findField(placement)
  return field.player;
};

TicTacToe.prototype.place = function(placement){
  if(this.board.isFull()) {
    throw new Error("Can't place on the field: Board is full")
  }
  else if(this.isGameFinished()[0]) {
    throw new Error("Can't place on the field: Game has found its winner")
  }
  else {
    var field = this.findField(placement);
    field.place(this.isTurn());
    this.changeTurn();
    if(this.winner !== null){
      console.log("Winner is:" + this.winner);
    }
  }
};

TicTacToe.prototype.isSamePlayer = function(row){
  for(var i = 1; i < row.length; i += 1) {
    if(row[0].player !== row[i].player || row[0].player === null){
      return false;
    }
  }
    return true;
};

TicTacToe.prototype.isGameFinished = function(){
  var rows = this.board.possibleRows();
  var output = [false];
  game = this
  rows.forEach(function(row){
    if(game.isSamePlayer(row)) {
          game.winner = game.whoWon(row);
          return output = [true, row];
    }
  });
  return output;
};

TicTacToe.prototype.whoWon = function(row){
  return row[0];
};
