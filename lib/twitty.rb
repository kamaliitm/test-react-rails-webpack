module Twitty

  def self.refresh_main_data
    client = TwitterClient.new.client
  end

end
