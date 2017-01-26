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

  it("should not allow a player to select a occupied field", function(){
    playerX = new Player("X");
    playerO = new Player("O");
    myField.place(playerX);
    expect( function(){myField.place(playerO);}).toThrow(new Error("You can't select that field: Field is already taken"));
  });
});
