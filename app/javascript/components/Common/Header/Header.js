import React from "react"
import PropTypes from "prop-types"

import NavTab from "./NavTab"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTabId: 0
    }
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(tabId) {
    this.setState({
      activeTabId: tabId
    })
  }

  render () {
    let { activeTabId } = this.state;
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src="/assets/twitter_logo_1.png" /></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
          <ul className="navbar-nav">
            {this.props.tabs.map((category, i) => {
              return <NavTab key={i} tabId={i} tabname={category} loadTweets={this.props.navClickHandler} activeTabHandler={this.setActiveTab} isActive={activeTabId == i}>{category}</NavTab>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header
