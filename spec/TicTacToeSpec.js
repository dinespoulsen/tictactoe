describe("TicTacToe", function(){

  var myGame;

  beforeEach(function(){
    myGame = new TicTacToe();
  });

  it("should start with a board", function(){
    expect(myGame.board).toBeTypeOf(Board)
  });
});
