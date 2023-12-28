Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root to: "home#index"

  # Interface for reading emails
  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?

  Rails.application.routes.draw do
    devise_for :users, controllers: {
      sessions: "users/sessions",
      confirmations: "users/confirmations",
      passwords: "users/passwords",
      registrations: "users/registrations",
      unlocks: "users/unlocks"
    }
  end

  resources :users, only: [:show, :index, :destroy, :edit, :update]

  namespace :api do 
    get 'users_by_emails', to: 'users_by_emails#show', as: 'users_by_emails'
  end
end
