module ThirdParty

  class << self

    def twitter
      config = YAML.load(ERB.new(File.read("#{::Rails.root.to_s}/config/twitter.yml")).result).freeze
      Twitter::REST::Client.new(config["twitter"])
    end

    def redis
      redis_config = YAML.load(ERB.new(File.read("#{::Rails.root.to_s}/config/redis.yml")).result)[Rails.env].symbolize_keys
      Redis.new(redis_config)
    end

  end

end
