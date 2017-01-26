function Field(){
  this.player = null;
};

Field.prototype.place = function(currentPlayer){
  this.player = currentPlayer.type;
};

Field.prototype.takenBy = function(){
  return this.player;
}
