import React from "react"
import PropTypes from "prop-types"

class Timeline extends React.Component {
  render () {
    console.log(this.props.tweets)
    return (
      <div>
        <h3>{this.props.category}</h3>
        {this.props.tweets.map(function(x){
          let tweetInfo = JSON.parse(x)
          return (
            <div key={tweetInfo.id}>
                <p>{tweetInfo.name}</p>
                <p>{tweetInfo.text}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Timeline
