describe("Board", function(){

  var myBoard;

  beforeEach(function(){
    myBoard = new Board();
  });

  it("should start with a board", function(){
    expect(myBoard.fields.length).toEqual(3)
  });

  it("should be able check to check if a row is occupied by same player", function(){
    var field = new Field();
    field.player = "X"
    var row = [field, field, field];
    expect(myBoard.isSamePlayer(row)).toBeTruthy();
  })

  it("should be able check to check if a row is occupied by same player", function(){
    fieldX = new Field();
    fieldX.player = "X"
    fieldO = new Field();
    fieldO.player = "O"
    var row = [fieldX, fieldO, fieldX];
    expect(myBoard.isSamePlayer(row)).toBeFalsy();
  })

  it("should be false when a board is full", function(){
    field = new Field();
    fieldO = new Field();
    fieldO.player = "O"
    myBoard.fields = [[fieldO, field, field], [field, field, field], [field, field, fieldO]];
    expect(myBoard.isFull()).toBeFalsy();
  })

  it("should be true when a board is full", function(){
    field = new Field();
    field.player = "X"
    myBoard.fields = [[field, field, field], [field, field, field], [field, field, fieldO]];
    expect(myBoard.isFull()).toBeFalsy();
  })
});
