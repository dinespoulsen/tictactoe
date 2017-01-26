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

TicTacToe.prototype.isSamePlayer = function(row){
  for(var i = 1; i < row.length; i += 1) {
    if(row[0].player !== row[i].player){
      return false;
    }
  }
    return true;
};

TicTacToe.prototype.isGameFinished = function(){
  var firstRow = this.board.fields[0];
  var secondRow = this.board.fields[1];
  var thirdRow = this.board.fields[2];
  var topRow = [this.board.fields[0][0], this.board.fields[1][0], this.board.fields[2][0]];
  var middleRow = [this.board.fields[0][1], this.board.fields[1][1], this.board.fields[2][1]];
  var bottomRow = [this.board.fields[0][2], this.board.fields[1][2], this.board.fields[2][2]];
  var leftTopBottomRight = [this.board.fields[0][0], this.board.fields[1][1], this.board.fields[2][2]];
  var leftBottomTopRight = [this.board.fields[0][2], this.board.fields[1][1], this.board.fields[2][0]];
  var rows = [firstRow, secondRow, thirdRow, topRow, middleRow, bottomRow, leftTopBottomRight, leftBottomTopRight];
  var output = false;
  game = this
  rows.forEach(function(row){
    if(game.isSamePlayer(row)) {
          output = true;
    }
  });
  return output;
};
