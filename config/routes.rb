Rails.application.routes.draw do
    root to: 'site#index'

    namespace :api do
      resources :persons, only: %i[index show create destroy update]
    end
end
