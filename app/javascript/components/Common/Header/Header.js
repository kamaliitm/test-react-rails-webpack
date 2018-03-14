import React from "react"
import PropTypes from "prop-types"

import NavTab from "./NavTab"

class Header extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.tabs.map(category => {
            return <li key={category}><NavTab tabname={category} loadTweets={this.props.navClickHandler}>{category}</NavTab></li>
          })}
        </ul>
      </div>
    );
  }
}

export default Header
