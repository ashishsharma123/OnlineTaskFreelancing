import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            this.props.user.isLoggedIn ?
              <Component {...props} /> :
              <Redirect to='/' />
          )} 
        />
      )
    }
  }

const mapStateToProps = state => ({
    user: state.User
});

const mapDispatchToProps = dispatch => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);