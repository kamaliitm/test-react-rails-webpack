import React from "react"
import PropTypes from "prop-types"

import NavTab2 from "./NavTab2"

class Header2 extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src="/assets/twitter_logo_1.png" /></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a id="navbar-dropdown" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
              <div className="dropdown-menu">
                {this.props.tabs.map((category, i) => {
                  return <NavTab2 key={i} tabId={i} tabname={category} loadTweets={this.props.navClickHandler}>{category}</NavTab2>
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header2
