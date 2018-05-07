namespace :twitty do
  desc "Refresh the main cache (redis) with latest tweet data"
  task :refresh_main_data => :environment do
    begin
      puts "Refreshing Main Data at #{Time.now}"
      Twitty.refresh_main_data
    rescue Exception => e
      puts "Exception occured while refreshing the data. Message: #{e.message}"
      puts "Stacktrace: #{e.backtrace.inspect}"
    end
  end
end
