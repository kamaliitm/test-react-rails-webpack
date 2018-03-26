import React from "react"
import PropTypes from "prop-types"

class NavTab extends React.Component {
  constructor() {
    super();
    this.state = {
      liClassName: "nav-item nav-link"
    }
  }

  componentWillMount() {
    this.reloadState(this.props.isActive);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isActive != nextProps.isActive) {
      this.reloadState(nextProps.isActive);
    }
  }

  reloadState(isActive) {
    let activeClass = isActive ? "active" : ""
    this.setState({
      liClassName: `nav-item nav-link ${activeClass}`
    })
  }

  handleClick() {
    this.props.activeTabHandler(this.props.tabId);
    this.props.loadTweets(this.props.tabname);
  }

  render () {
    let { liClassName } = this.state;
    return (
      <li className={liClassName}>
        <a onClick={this.handleClick.bind(this)}>{this.props.tabname}</a>
      </li>
    );
  }
}

export default NavTab
