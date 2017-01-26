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

  it("should be able to change turn when first field claimed", function(){
    myGame.place([0,0])
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
    myGame.place([0,1]);
    expect(myGame.checkField([0, 1])).toEqual("O");
  })

  it("should return true when it is the same player in the row", function(){
    field = new Field();
    field.player = "X";
    row = [field, field, field];
    expect(myGame.isSamePlayer(row)).toBeTruthy()
  });

  it("should return false when it is not the same player in the row", function(){
    field = new Field();
    row = [field, field, field];
    expect(myGame.isSamePlayer(row)).toBeFalsy()
  });

  it("should return true when a player has all of first row", function(){
    myGame.place([0,0]);
    myGame.place([1,1]);
    myGame.place([0,1]);
    myGame.place([1,2]);
    myGame.place([0,2]);
    expect(myGame.isGameFinished()).toBeTruthy();
  })

  it("should return false when a winner has not been found", function(){
    myGame.place([0,0]);
    myGame.place([0,1]);
    myGame.place([0,2]);
    expect(myGame.isGameFinished()).toBeFalsy();
  })

  it("should be able to call out the winner", function(){
    row = ["X", "X", "X"]
    expect(myGame.whoWon(row)).toEqual("X");
  })

  it("should be able to know when a player has crossing row top to bottom", function(){
    myGame.place([0,0]);
    myGame.place([1,0]);
    myGame.place([1,1]);
    myGame.place([1,2]);
    myGame.place([2,2]);
    expect(myGame.isGameFinished()).toBeTruthy();
  })

  it("should return an error when game is over", function(){
    field = new Field();
    field.player = "X"
    myGame.board.fields = [[field, field, field], [field, field, field], [field, field, field]];
    expect( function(){myGame.place([0,0])}).toThrow(new Error("Can't place on the field: Board is full"));
  })

  it("should return an error when game has found its winner", function(){
    myGame.place([0,0]);
    myGame.place([1,0]);
    myGame.place([1,1]);
    myGame.place([1,2]);
    myGame.place([2,2]);
    expect( function(){myGame.place([2,1])}).toThrow(new Error("Can't place on the field: Game has found its winner"));
  })
});
