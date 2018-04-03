module Twitty

  class << self

    def refresh_main_data
      clear_cached_tweets
      load_main_data
      reload_main_cache
    end

    def clear_cached_tweets
      categories.each do |category|
        redis.del(tweet_info_key(category))
      end
    end

    def load_main_data
      app_data.each do |category, celebs|
        celebs.each do |celeb|
          twitter.user_timeline(celeb).each do |tweet|
            redis.zadd(tweet_info_key(category), get_score(tweet), tweet_info(tweet))
          end
        end
      end
    end

    def reload_main_cache
      cached_main_data(true)
    end

    def cached_main_data(force=false)
      if force || redis.get("main_data").to_s.blank?
        redis.set("main_data", main_data)
      end
      eval(redis.get('main_data'))
    end

    def main_data
      {}.tap do |data_hash|
        categories.each do |category|
          data_hash[category] = redis.zrange(tweet_info_key(category), 0, -1)
        end
        data_hash
      end
    end

    def categories
      app_data.keys
    end

    private

    def twitter
      ThirdParty.twitter
    end

    def redis
      ThirdParty.redis
    end

    def app_data
      config["app_data"]
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
        "name" => tweet.user.name,
        "profile_image_url" => tweet.user.profile_image_url.to_s
      }.to_json
    end

  end

end
