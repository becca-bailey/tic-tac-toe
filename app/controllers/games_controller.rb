class GamesController < ApplicationController
  def new
  end

  def play
    render "games/play"
  end
end
