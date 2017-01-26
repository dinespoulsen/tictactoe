describe("TicTacToe", function(){

  var myGame;

  beforeEach(function(){
    myGame = new TicTacToe();
  });

  it("should start with a board", function(){
    expect(myGame.board).toEqual(jasmine.any(Board))
  });

  it("should start with two players", function(){
    expect(myGame.players.length).toEqual(2);
  });

  it("should start with player X", function(){
    expect(myGame.isTurn).toEqual("X")
  })
});
