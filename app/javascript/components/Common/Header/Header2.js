import React from "react"
import PropTypes from "prop-types"

import NavTab from "./NavTab"

class Header extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src="/assets/twitter_logo_1.png" /></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a id="navbarDropdown" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.props.tabs.map((category, i) => {
                  return <NavTab key={i} tabId={i} tabname={category} loadTweets={this.props.navClickHandler}>{category}</NavTab>
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header
