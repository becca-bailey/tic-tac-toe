class Human < Player

  def get_spot(game, spot = nil)
    until spot
      choice = UI.request_spot(self.name, game)
      if valid_choice?(choice) && game.board_state.spot_is_empty?(choice.to_i)
        spot = choice.to_i
        return spot
      else
        UI.repeat_spot_request
      end
    end
  end

  private

  def valid_choice?(choice)
    nums = ["0","1","2","3","4","5","6","7","8"]
    return true if nums.include?(choice)
  end

end
