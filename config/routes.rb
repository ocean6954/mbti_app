Rails.application.routes.draw do
  root to: redirect('/persons')

  get 'persons', to: 'site#index'
  get 'persons/new', to: 'site#index'
  get 'persons/:id', to: 'site#index'
  get 'persons/:id/edit', to: 'site#index'

  namespace :api do
    resources :persons, only: %i[new index show create destroy update]
  end
end
