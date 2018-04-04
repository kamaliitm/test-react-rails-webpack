import React from "react"
import PropTypes from "prop-types"

class Tweet extends React.Component {
  render () {
    return (
      <div className="tweet card card-block bg-faded">
        <div className="media">
          <img className="mr-3" src={this.props.tweet.profile_image_url} alt="Profile Pic Thumbnail" />
          <div className="media-body">
            <div className="mt-0">
              <span className="d-inline user-name">{this.props.tweet.name}</span>
              <span className="d-inline screen-name">@{this.props.tweet.screen_name}</span>
            </div>
            {this.props.tweet.text}
          </div>
          <hr/>
        </div>
      </div>
    )
  }
}

export default Tweet
