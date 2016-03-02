Rails.application.routes.draw do
  root "games#new"
  resources :human_vs_human, only: [:new, :create]
  resources :human_vs_computer, only: :new
  get "/play" => "games#play", as: "game_play"
end
