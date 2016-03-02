class Computer < Player

  def initialize(params = {})
    super
    @name = "Computer"
  end

  def get_spot(game)
    sleep(1)
    return 4 if game.board_state.initial_state?
    best_move(game)
  end

  # private

  def score(game)
    if game.board_state.won(game.player_2)
      return 1
    elsif game.board_state.won(game.player_1)
      return -1
    elsif game.tie?
      return 0
    end
  end

  def best_move(game)
    scores = {}
    game.board_state.available_spots.each do |spot|
      scores[spot] = min_max(spot, game)
    end
    return scores.max_by { |spot, score| score }[0]
  end

  def min_max(spot, game)
    scores = {}
    possible_game = game.new_state(spot)
    return score(possible_game) if possible_game.over?

    possible_game.board_state.available_spots.each do |spot|
      score = min_max(spot, possible_game)
      scores[spot] = score
    end

    if game.current_player == game.player_2
      max_score = scores.min_by { |spot, score| score }[1]
      return max_score
    else
      min_score = scores.max_by { |spot, score| score }[1]
      return min_score
    end
  end

end
