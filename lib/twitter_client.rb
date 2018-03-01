class TwitterClient

  attr_reader :client
  
  def initialize
    twitter_config = "#{::Rails.root.to_s}/data/twitter.yml"
    @config = YAML.load(ERB.new(File.read(twitter_config)).result).freeze
    @client = Twitter::REST::Client.new(@config["twitter"])
  end

end
