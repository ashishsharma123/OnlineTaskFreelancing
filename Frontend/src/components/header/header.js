import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div><Link to='/login'>Link to login Page</Link></div>
    );
  }
}

export default Header;
