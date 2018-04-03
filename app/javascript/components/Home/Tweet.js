import React from "react"
import PropTypes from "prop-types"

class Tweet extends React.Component {
  render () {
    console.log("Tweet: Tweet Obj: ", this.props.tweet);
    return (
      <div className="media">
        <img className="mr-3" src={this.props.tweet.profile_image_url} alt="Profile Pic Thumbnail" />
        <p><u>{this.props.tweet.name}</u></p>
        <p>{this.props.tweet.text}</p>
        <hr/>
      </div>
    )
  }
}

export default Tweet
