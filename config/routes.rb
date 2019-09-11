Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'
  get :home, to: 'pages#home'
  get :about, to: 'pages#about'

  resources :categories, only: %i(index show) do
    resources :products, only: %i(show)
  end
end
