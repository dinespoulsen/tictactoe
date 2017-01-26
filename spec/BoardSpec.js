describe("Board", function(){

  var myBoard;

  beforeEach(function(){
    myBoard = new Board();
  });

  var field = jasmine.createSpyObj('field', ['player', 'isTaken']);
  field.player.and.callFake(function() {
    return null;
  });
  field.isTaken.and.callFake(function() {
    return false;
  });

  var fieldX = jasmine.createSpyObj('fieldX', ['player', 'isTaken']);
  fieldX.player.and.callFake(function() {
    return null;
  });
  fieldX.isTaken.and.callFake(function() {
    return true;
  });

  var fieldO = jasmine.createSpyObj('fieldO', ['player', 'isTaken']);
  fieldO.player.and.callFake(function() {
    return null;
  });
  fieldO.isTaken.and.callFake(function() {
    return true;
  });


  it("should start with a board with three field rows", function(){
    expect(myBoard.fields.length).toEqual(3)
  });

  it("should be able to check if a row is occupied by same player", function(){
    var row = [fieldX, fieldX, fieldX];
    expect(myBoard.isSamePlayer(row)).toBeTruthy();
  })

  it("should be able check to check if a row is occupied by same player", function(){
    var row = [fieldX, fieldO, fieldX];
    expect(myBoard.isSamePlayer(row)).toBeFalsy();
  })

  it("should be false when a board is not full", function(){
    myBoard.fields = [[fieldO, field, field], [field, field, field], [field, field, fieldO]];
    expect(myBoard.isFull()).toBeFalsy();
  })

  it("should be true when a board is full", function(){
    field = new Field();
    field.player = "X"
    myBoard.fields = [[field, field, field], [field, field, field], [field, field, field]];
    expect(myBoard.isFull()).toBeTruthy();
  })
});
