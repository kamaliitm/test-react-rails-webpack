import React from "react"
import PropTypes from "prop-types"

class Tweet extends React.Component {
  render () {
    return (
      <div>
        <p><u>{this.props.tweet.name}</u></p>
        <p>{this.props.tweet.text}</p>
        <hr/>
      </div>
    )
  }
}

export default Tweet
