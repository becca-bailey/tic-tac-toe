class BoardState
  attr_reader :board
  def initialize(board = new_board)
    @board = board
  end

  def place_marker(spot, player)
    @board[spot] = player.marker
    self
  end

  def won(player)
    winning_spots = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
                     [1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    winning_spots.each do |row|
      return true if row.all? { |spot| self.board[spot] == player.marker }
    end
    false
  end

  def initial_state?
    @board.all? { |spot| spot != "X" && spot != "O"}
  end

  def completed?
    @board.all? { |spot| spot == "X" || spot == "O"}
  end

  def spot_is_empty?(spot)
    @board[spot] != "X" && @board[spot] != "O"
  end

  def available_spots
    available_spots = []
    self.board.each do |spot|
      available_spots << spot if spot != "X" && spot != "O"
    end
    available_spots
  end

  private

  def new_board
    return [0,1,2,3,4,5,6,7,8]
  end

end
