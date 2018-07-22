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
class EmailVarificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    render() {
        return (
            <div className="email-varification-screen">
                <div class="container">
                    <div class="row custom-row">
                        <div class="col-sm-8">
                            <div class="alert alert-info">
                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                                    ×</button>
                                <span class="glyphicon glyphicon-info-sign"></span> <strong>Login Successfull !!</strong>
                                <hr class="message-inner-separator" />
                                <p>
                                    We have sent an activation email to your registered email id. Please click on link to activate your account.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVarificationScreen);
