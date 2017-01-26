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
  var field = this.findField(placement);
  field.place(this.isTurn());
};

TicTacToe.prototype.isGameFinished = function(){
  var firstRow = this.board.fields[0];
  var output = true;
  var name = [];
  firstRow.forEach(function(field){
    if(field.player === null) {
      return false;
    }
    else {
      name.push(field.player);
    }
  });
};
