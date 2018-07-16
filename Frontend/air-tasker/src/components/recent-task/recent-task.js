import React, { Component } from "react";
import PropTypes from "prop-types";

// import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class RecentTask extends Component {
  render() {
    return (
        <div className="row recent-task-row">
            <img class=" person-image" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image" />
            <span className="task-title">Dash cam installation</span>
            <p className="description-label">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        
    
    );
  }
}

export default RecentTask;
