describe("Field", function(){

  var myField;

  beforeEach(function(){
    myField = new Field();
  });

  it("should be able to be taken by a player", function(){
    playerX = new Player("X");
    myField.place(playerX);
    expect(myField.takenBy()).toEqual("X");
  });
});
