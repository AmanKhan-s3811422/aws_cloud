import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="special-nav">
          <div className="navbar-logo">
            <a className="navbar-logo" href="/">
              Google Home
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default (Header);
