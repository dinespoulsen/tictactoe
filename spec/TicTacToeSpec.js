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
    expect(myGame.isTurn()).toEqual("X")
  })

  it("should be able to change turn", function(){
    myGame.changeTurn();
    expect(myGame.isTurn()).toEqual("O")
  })

  // it("should be able to let a player claim a field", function(){
  //   expect(myGame.board[0][0].toEqual("X");
  // })
});
