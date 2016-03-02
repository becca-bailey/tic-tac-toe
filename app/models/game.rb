class Game
  attr_accessor :player_1, :player_2, :first_player, :turn_counter, :board_state

  def initialize(params = {})
    @board_state = params.fetch(:board, BoardState.new)
    @player_1 = params.fetch(:player_1, Human.new)
    @first_player = params[:first_player]
    @turn_counter = params.fetch(:turn_counter, 0)
  end

  def set_markers(player_choice)
    @player_1.marker = player_choice
    @player_2.marker = "X" if @player_1.marker == "O"
    @player_2.marker = "O" if @player_1.marker == "X"
  end

  def play
    current_player = self.current_player
    spot = current_player.get_spot(self)
    @board_state.place_marker(spot, current_player)
    @turn_counter += 1
    spot
  end

  def set_first_player(num)
    if num == "1"
      self.first_player = @player_1
    else
      self.first_player = @player_2
    end
    self.first_player
  end

  def winner
    if @board_state.won(@player_1)
      return @player_1
    elsif @board_state.won(@player_2)
      return @player_2
    end
  end

  def over?
    @board_state.completed? || self.winner != nil
  end

  def tie?
    @board_state.completed? && self.winner == nil
  end

  def current_player
    if @first_player == @player_1
      return @turn_counter % 2 == 0 ? @player_1 : @player_2
    else
      return @turn_counter % 2 == 0 ? @player_2 : @player_1
    end
  end

end
