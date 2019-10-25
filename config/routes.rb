Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'pages#home'
  get :home, to: 'pages#home'
  get :about, to: 'pages#about'
  post :contact, to: 'pages#contact'

  resources :categories, only: %i(show) do
    resources :products, only: %i(show)
  end

  resources :promotions, only: %i(index show)
  resources :news, only: %i(index show)
end
