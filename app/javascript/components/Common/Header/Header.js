import React from "react"
import PropTypes from "prop-types"

import NavTab from "./NavTab"

class Header extends React.Component {
  render () {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src="/assets/twitter_logo_1.png" /></a>
        <div class="collapse navbar-collapse" id="navbarTogglerMainMenu">
          <ul className="navbar-nav">
            {this.props.tabs.map(category => {
              return <li className="nav-item nav-link" key={category}><NavTab tabname={category} loadTweets={this.props.navClickHandler}>{category}</NavTab></li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header
