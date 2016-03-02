class HumanVsHumanController < GamesController
  def new
  end

  def create
    #create game from form input
    redirect_to game_play_path
  end

end
