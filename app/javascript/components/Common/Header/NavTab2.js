import React from "react"
import PropTypes from "prop-types"

class NavTab extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.loadTweets(this.props.tabname);
  }

  render () {
    return (
      <a className="dropdown-item" onClick={this.handleClick.bind(this)}>{this.props.tabname}</a>
    );
  }
}

export default NavTab
