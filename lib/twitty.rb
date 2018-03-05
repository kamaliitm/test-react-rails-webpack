module Twitty

  class << self

    def refresh_main_data
      config.each do |category, celebs|
        celebs.each do |celeb|
          twitter.user_timeline(celeb).each do |tweet|
            redis.zadd(tweet_info_key(category), get_score(tweet), tweet_info(tweet))
          end
        end
      end  
    end

    def cached_main_data(forced=false)
      if force || redis.get("main_data").to_s.blank?
        redis.set("main_data", main_data)
      end
    end

    def main_data
      {}.tap do |data_hash|
        categories.each do |category|
          data_hash[category] = redis.zrange(tweet_info_key(category), 0, -1)
        end
        data_hash
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

    def tweet_info_key(category)
      "#{category}:tweets"
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
        "text" => tweet.text,
        "screen_name" => tweet.user.screen_name,
        "name" => tweet.user.name
      }.to_json
    end

  end

end