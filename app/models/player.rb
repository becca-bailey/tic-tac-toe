class Player
  attr_accessor :marker, :name

  def initialize(params = {})
    @marker = params[:marker]
    @name = params[:name]
  end

end
