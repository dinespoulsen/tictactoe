function Field(){
  this.player = null;
};

Field.prototype.place = function(currentPlayer){
  if(this.isTaken()) {
    throw new Error("You can't select that field: Field is already taken")}
  else {
    this.player = currentPlayer.type;
  };
};

Field.prototype.isTaken = function(){
  if(this.player != null) {
    return true}
  else {
    return false
  }

};

Field.prototype.takenBy = function(){
  return this.player;
}
