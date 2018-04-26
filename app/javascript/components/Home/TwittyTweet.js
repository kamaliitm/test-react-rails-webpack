import React from "react"
import PropTypes from "prop-types"

import { Tweet } from 'react-twitter-widgets'

class TwittyTweet extends React.Component {
  createMarkup() {
    return {__html: this.props.tweet.text};
  }

  render () {
    let tweetIdString = this.props.tweet.id.toString();
    console.log("Tweet id from props: ", this.props.tweet.id.toString());
    console.log("Tweet id: ", tweetIdString);
    return (
      <div className="tweet card card-block bg-faded">
          <div className="media">
            <Tweet tweetId={`${this.props.tweet.id}`} options={{maxwidth: 550}} />
          </div>
      </div>
    )
  }
}

export default TwittyTweet
