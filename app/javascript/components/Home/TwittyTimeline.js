import React from "react"
import PropTypes from "prop-types"

import TwittyTweet from './TwittyTweet'

class TwittyTimeline extends React.Component {
  render () {
    return (
      <div className="timeline">
        {this.props.tweets.map(tweetInfoStr => {
          let tweetInfo = JSON.parse(tweetInfoStr)
          return (
            <TwittyTweet key={tweetInfo.id} tweet={tweetInfo} />
          )
        })}
      </div>
    );
  }
}

export default TwittyTimeline
