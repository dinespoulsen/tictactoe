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
    expect(myGame.isTurn().type).toEqual("X")
  })

  it("should be able to change turn", function(){
    myGame.changeTurn();
    expect(myGame.isTurn().type).toEqual("O")
  })

  it("should be able to find a field", function(){
    expect(myGame.findField([0, 0])).toEqual(jasmine.any(Field));
  })

  it("should be able to let starting player claim a field", function(){
    myGame.place([0,0])
    expect(myGame.checkField([0, 0])).toEqual("X");
  })

  it("should be able to let player 2 claim a field", function(){
    myGame.place([0,0]);
    myGame.changeTurn();
    myGame.place([0,1]);
    expect(myGame.checkField([0, 1])).toEqual("O");
  })

  it("should be able check to check if a row is occupied by same player", function(){
    var row = ["X", "X", "X"];
    expect(myGame.isSamePlayer(row)).toBeTruthy();
  })

  it("should be able check to check if a row is occupied by same player", function(){
    var row = ["X", "O", "X"];
    expect(myGame.isSamePlayer(row)).toBeFalsy();
  })

  it("should be able to know when a player has all of first row", function(){
    myGame.place([0,0]);
    myGame.place([0,1]);
    myGame.place([0,2]);
    expect(myGame.isGameFinished()).toBeTruthy();
  })
});
