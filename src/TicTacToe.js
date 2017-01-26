function TicTacToe(){
  this.board = new Board;
  this.players = [new Player("X"), new Player("O")]
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
  else {
    var field = this.findField(placement);
    field.place(this.isTurn());
    this.changeTurn();
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
  var output = false;
  game = this
  rows.forEach(function(row){
    if(game.isSamePlayer(row)) {
          return output = true;
    }
    else {
      return row
    }
  });
  return output;
};

TicTacToe.prototype.whoWon = function(row){
  return row[0];
};
