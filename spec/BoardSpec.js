describe("Board", function(){

  var myBoard;

  beforeEach(function(){
    myBoard = new Board();
  });

  it("should start with a board", function(){
    expect(myBoard.fields.length).toEqual(3)
  });
});
