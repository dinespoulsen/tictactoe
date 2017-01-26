describe("Player", function(){

  var myPlayer;

  beforeEach(function(){
    myPlayer = new Player();
  });

  it("should be able to create a player X", function(){
    playerX = new Player("X");
    expect(playerX.type).toEqual("X")
  });
});
