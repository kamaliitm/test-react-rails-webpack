import React from "react"
import PropTypes from "prop-types"

class Tweet extends React.Component {
  createMarkup() {
    return {__html: this.props.tweet.text};
  }

  render () {
    return (
      <div className="tweet card card-block bg-faded">
        <a class="tweet-body" href={this.props.tweet.tweet_url} target="_blank">
        <div className="media">
          <img className="mr-3" src={this.props.tweet.profile_image_url} alt="Profile Pic Thumbnail" />
          <div className="media-body">
            <div className="mt-0">
              <span className="d-inline user-name">{this.props.tweet.name}</span>
              <span className="d-inline screen-name">@{this.props.tweet.screen_name}</span>
            </div>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
          </div>
          <hr/>
        </div>
        </a>
      </div>
    )
  }
}

export default Tweet
