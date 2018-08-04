import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
/**
 * Static Screen Component to display Static Screen Content.
 * Will be customized on basis of url
 */
class SubHeader extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="container-fluid subheader-container">
                <ul>
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">/</a></li>
                    <li><a href="javascript:void(0)">{this.props.linkName}</a></li>
                </ul>
                        
                        </div>
        );
    }
}
SubHeader.PropTypes = {
    linkName: PropTypes.string.isRequired
}
export default SubHeader;
