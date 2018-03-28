import React from "react"
import PropTypes from "prop-types"

import Header2 from '../Common/Header/Header2'
import Timeline from './Timeline'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      category:  "",
      tweets: []
    }
    this.loadTweets = this.loadTweets.bind(this);
  }

  componentWillMount() {
    let new_category = this.props.categories[0]
    this.reloadState(new_category)
  }

  reloadState(category) {
    this.setState({
      category: category,
      tweets: this.props.mainData[category]
    })
  }

  loadTweets(category) {
    this.reloadState(category)
  }

  render () {
    let { category, tweets } = this.state
    return (
      <div className="container">
        <Header2 tabs={this.props.categories} navClickHandler={this.loadTweets} />
        <div>
          <Timeline tweets={tweets} category={category} />
        </div>
      </div>
    );
  }
}

export default Home
