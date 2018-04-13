import React from "react"
import PropTypes from "prop-types"

import NavTab from "./NavTab"

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTab: ""
    }
    this.setCurrentTab = this.setCurrentTab.bind(this);
  }

  componentWillMount() {
    this.setCurrentTab(this.props.tabs[0])
  }

  setCurrentTab(tabName) {
    this.setState({
      currentTab: tabName
    })
  }

  render () {
    let { currentTab } = this.state;
    return (
      <div className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand-xs navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="/assets/twittycat.png" /></a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerMainMenu">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a id="navbarDropdown" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{currentTab}</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.props.tabs.map((category, i) => {
                    return <NavTab key={i} tabId={i} tabname={category} loadTweets={this.props.navClickHandler} setTab={this.setCurrentTab}>{category}</NavTab>
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header
