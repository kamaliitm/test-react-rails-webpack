import React from "react"
import PropTypes from "prop-types"

import Timeline from './Timeline'

class Home extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log("categories: ", this.props.categories)
    console.log("main_data: ", this.props.mainData)
    this.category = this.props.categories[0]
    this.tweets = this.props.mainData[ this.category ]
    console.log("category: ", this.category)
    console.log("tweets: ", this.tweets)
  }

  // handleClick(category) {
  //   console.log("Clicked on category: ", category)
  //   this.category = category
  //   this.tweets = this.props.mainData[ category ]
  // }


  handleClick() {
    console.log("handleClick: ", this)
  }

  render () {
    return (
      <div>
        <p>Home Page</p>
        <ul>
          {this.props.categories.map(category => {
            return <li key={category}><button onClick={this.handleClick}>{category}</button></li>
          })}
        </ul>
        <div>
          <Timeline tweets={this.tweets} category={this.category} />
        </div>
      </div>
    );
  }
}

export default Home
