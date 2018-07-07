import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import SubHeader from '../../components/sub-header/sub-header'
/**
 * Static Screen Component to display Static Screen Content.
 * Will be customized on basis of url
 */
class StaticScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <SubHeader linkName="abc"></SubHeader>
                <div className="container">
                </div>
            </div>

        );
    }
}

export default StaticScreen;
