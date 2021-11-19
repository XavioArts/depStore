Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "deps#index"
  # re rout the root (get "/" to:) to the index of my departments since that will
  # basically be my home page
  resources :deps do
    resources :items
    # we nest the routes from items inside the deps routes
    ## makes the items routes be appended with /deps/:dep_id/
  end
  # link the CRUD routes for the departments controller

  resources :items do
    resources :comments
  end

end
