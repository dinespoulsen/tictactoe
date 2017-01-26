function Field(){
  this.player = null;
};

Field.prototype.place = function(currentPlayer){
  if(this.player != null) {
  throw new Error("You can't select that field: Field is already taken")}
  else {
    this.player = currentPlayer.type;
  }
};

Field.prototype.takenBy = function(){
  return this.player;
}
