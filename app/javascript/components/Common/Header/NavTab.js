import React from "react"
import PropTypes from "prop-types"

import { Capitalize } from "../../../helpers/Util"

class NavTab extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.loadTweets(this.props.tabname);
    this.props.setTab(this.props.tabname);
  }

  render () {
    return (
      <a className="dropdown-item" onClick={this.handleClick.bind(this)}>{Capitalize(this.props.tabname)}</a>
    );
  }
}

export default NavTab
