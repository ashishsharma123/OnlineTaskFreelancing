import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';

/**
 * Content of Signup screen.
 */
class Home extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
                return (
            
            <div className="home-container">
            
            <h1 className="welcome-text">Welcome to Task Mafia !!</h1>
            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
