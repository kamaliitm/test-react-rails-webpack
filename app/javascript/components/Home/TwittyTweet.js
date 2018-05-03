import React from "react"
import PropTypes from "prop-types"

import { Tweet } from 'react-twitter-widgets'

class TwittyTweet extends React.Component {
  createMarkup() {
    return {__html: this.props.tweet.text};
  }

  render () {
    return (
      <div className="card card-block bg-faded">
        <Tweet tweetId={`${this.props.tweet.id}`} options={{width: 'auto'}} />
      </div>
    )
  }
}

export default TwittyTweet
