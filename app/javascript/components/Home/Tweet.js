import React from "react"
import PropTypes from "prop-types"

class Tweet extends React.Component {
  render () {
    return (
      <div className="tweet card card-block bg-faded">
        <div className="media">
          <img className="mr-3" src={this.props.tweet.profile_image_url} alt="Profile Pic Thumbnail" />
          <div className="media-body">
            <h5 className="mt-0"><u>{this.props.tweet.name}</u></h5>
            {this.props.tweet.text}
          </div>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Tweet
