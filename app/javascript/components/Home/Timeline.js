import React from "react"
import PropTypes from "prop-types"

import Tweet from './Tweet'

class Timeline extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.category}</h3>
        {this.props.tweets.map(tweetInfoStr => {
          let tweetInfo = JSON.parse(tweetInfoStr)
          return (
            <Tweet key={tweetInfo.id} tweet={tweetInfo} />
          )
        })}
      </div>
    );
  }
}

export default Timeline
