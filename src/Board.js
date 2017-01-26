function Board(){
  this.fields = [[new Field, new Field, new Field], [new Field, new Field, new Field], [new Field, new Field, new Field]];
};

Board.prototype.possibleRows = function(){
  var firstRow = this.fields[0];
  var secondRow = this.fields[1];
  var thirdRow = this.fields[2];
  var topRow = [this.fields[0][0], this.fields[1][0], this.fields[2][0]];
  var middleRow = [this.fields[0][1], this.fields[1][1], this.fields[2][1]];
  var bottomRow = [this.fields[0][2], this.fields[1][2], this.fields[2][2]];
  var leftTopBottomRight = [this.fields[0][0], this.fields[1][1], this.fields[2][2]];
  var leftBottomTopRight = [this.fields[0][2], this.fields[1][1], this.fields[2][0]];
  var rows = [firstRow, secondRow, thirdRow, topRow, middleRow, bottomRow, leftTopBottomRight, leftBottomTopRight];
  return rows;
};

Board.prototype.isSamePlayer = function(row){
  for(var i = 1; i < row.length; i += 1) {
    if(row[0].player !== row[i].player){
      return false;
    }
  }
    return true;
};

Board.prototype.isFull = function(){
  var output = false;
  this.fields.forEach(function(row){
    row.forEach(function(field){
      console.log(field.isTaken());
    });
  });
};
