Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "api/home#index"

  namespace :api, defaults: { format: :json } do
    resources :quotes, only: [ :show ]
  end

end
