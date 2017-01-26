function Field(){
  this.player = null;
};

Field.prototype.place = function(player){
  this.player = player.type;
};

Field.prototype.takenBy = function(){
  return this.player;
}
