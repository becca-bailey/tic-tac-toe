require_relative 'game'

class HumanVsComputer < Game
  def initialize(params = {})
    super
    @player_2 = params.fetch(:player_2, Computer.new)
  end

  def set_player_names(name = nil)
    @player_1.name = name || UI.get_player_name("Player 1")
    @player_1.name = "Player 1" unless @player_1.name
    @player_2.name = "Computer"
  end

  def new_state(spot)
    board_state = BoardState.new(self.board_state.board.dup)
    board_state.place_marker(spot, self.current_player)
    game_copy = HumanVsComputer.new(board: board_state,
      player_1: self.player_1,
      player_2: self.player_2,
      first_player: self.first_player,
      turn_counter: self.turn_counter + 1)
    game_copy
  end
end
