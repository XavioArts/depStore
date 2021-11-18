class ApplicationController < ActionController::Base
    ## bypass the authenticity token here
    protect_from_forgery with: :null_session
end
