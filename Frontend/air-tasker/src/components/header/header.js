import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from 'react-responsive-modal';
import Signup from '../../screens/sign-up/sign-up';
// import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupOpen: false,
      isForSignup: true
    }
  }

  onOpenModal = () => {
    this.setState({ isSignupOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isSignupOpen: false });
  };
  render() {
    return (
      <div>
        <Modal ref="modelRef"open={this.state.isSignupOpen} onClose={this.onCloseModal} center>
          <Signup isForSignup={this.state.isForSignup} onClose={this.onCloseModal}/>
        </Modal>
      <nav class="navbar navbar-default header">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="javascript:void(0)">
            <img alt="Brand" className="main-logo" src="data:image/png;base64,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"/>
          </a>
        </div>
        <ul class="nav navbar-nav navbar-center">
            <li><a href="javascript:void(0)" className="post-a-task">Post a Task</a></li>
            <li><a href="javascript:void(0)">Brows Task</a></li>
            <li><a href="javascript:void(0)">How it works</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:void(0)">Help</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: true})}}>Signup</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: false})}}>Login</a></li>
          </ul>
      </div>
    </nav>
    
    </div>
    );
  }
}

export default Header;
