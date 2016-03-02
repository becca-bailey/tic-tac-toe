class HumanVsHuman < Game
  
  def initialize(params = {})
    super
    @player_2 = params.fetch(:player_2, Human.new)
  end

  def set_player_names(name_1 = nil, name_2 = nil)
    @player_1.name = name_1 || UI.get_player_name("Player 1")
    @player_2.name = name_2 || UI.get_player_name("Player 2")
    @player_1.name = "Player 1" unless @player_1.name
    @player_2.name = "Player 2" unless @player_2.name
  end

end
