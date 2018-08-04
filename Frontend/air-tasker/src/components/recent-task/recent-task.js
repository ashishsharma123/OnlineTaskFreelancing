import React, { Component } from "react";
import PropTypes from "prop-types";

// import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class RecentTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="row recent-task-row">
            <img class=" person-image" src={this.props.data.imageUrl} alt="card image" />
            <span className="task-title">{this.props.data.jobTitle}</span>
            <p className="description-label">{this.props.data.detailDescription}</p>
        </div>
        
    
    );
  }
}

export default RecentTask;
