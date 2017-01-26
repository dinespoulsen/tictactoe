describe("Board", function(){

  var myBoard;

  beforeEach(function(){
    myBoard = new Board();
  });

  it("should start with a board", function(){
    expect(myBoard.fields.length).toEqual(3)
  });

  it("should be able check to check if a row is occupied by same player", function(){
    var field = new Field("X");
    field.player = "X"
    var row = [field, field, field];
    expect(myBoard.isSamePlayer(row)).toBeTruthy();
  })

  it("should be able check to check if a row is occupied by same player", function(){
    fieldX = new Field("X");
    fieldX.player = "X"
    fieldO = new Field("O");
    fieldO.player = "O"
    var row = [fieldX, fieldO, fieldX];
    expect(myBoard.isSamePlayer(row)).toBeFalsy();
  })
});
