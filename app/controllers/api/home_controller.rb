class Api::HomeController < ApplicationController
  
  def index
    @categories = Twitty.categories
    @main_data = Twitty.cached_main_data
  end

end
