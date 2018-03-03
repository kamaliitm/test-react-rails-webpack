module Twitty

  class << self

    def refresh_main_data
      config.each do |category, celebs|
        celebs.each do |celeb|
          twitter.user_timeline(celeb).each do |tweet|
            redis.zadd("#{category}:tweets", get_score(tweet), tweet_info(tweet))
          end
        end
      end  
    end

    private

    def twitter
      ThirdParty.twitter
    end

    def redis
      ThirdParty.redis
    end

    def categories
      config["categories"]
    end

    def config
      @config ||= YAML.load(ERB.new(File.read("#{::Rails.root.to_s}/data/twitty.yml")).result).freeze
    end

    def get_score(tweet)
      tweet.retweet_count + tweet.favorite_count
    end

    def tweet_info(tweet)
      {
        "id" => tweet.id,
        "text" => tweet.text
      }.to_json
    end

  end

end
