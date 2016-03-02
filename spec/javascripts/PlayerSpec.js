describe("Player", function() {

  beforeEach(function() {
    player1 = new Player("Player 1");
    player2 = new Player("Player 2");
  });

  it("should have a name", function() {
    expect(player1.name).toEqual("Player 1");
    expect(player2.name).toEqual("Player 2");
  });
});
