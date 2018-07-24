import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Content of Signup screen.
 */
class EmailVarificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isForVerify: false,
            verificationSuccessfull: false,
            isLoading: false
        }
    }

    componentWillMount() {
        if (window.location.href.indexOf('id') > -1) {
            this.setState({ isForVerify: true, isLoading: true });
            this.verifyEmail();
        } else if(window.location.href.indexOf('isEmailVerified') > -1) {
            let token = window.location.href.substr(window.location.href.indexOf('isEmailVerified') + 16);
            if(token == 1) {
                this.setState({verificationSuccessfull: true});
            }
        }
    }

    verifyEmail() {
        let token = window.location.href.substr(window.location.href.indexOf('id=') + 3);
        sendPostRequest(urls.VERIFY_EMAIL_URL, {
            "token": token
        }).then((res) => {
            this.setState({ verificationSuccessfull: true });
            this.setState({ isLoading: false });
            toast.success("Email Verification is successfull !!", {
                position: toast.POSITION.TOP_RIGHT
            });
        })
            .catch((err) => {
                this.setState({ isLoading: false });
                toast.success("Error in varification Service !!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            })
    }

    render() {
        console.log('is for veriyg   ', this.state.isForVerify);
        return (

            <div className="email-varification-screen">
                <Loader loading={this.state.isLoading} />
                <ToastContainer autoClose={5000} />
                <div class="container">
                    {(this.state.verificationSuccessfull) ?

                        <div class="row custom-row">
                            <div class="col-sm-8">
                                <div class="alert alert-success">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                                        ×</button>
                                    <span class="glyphicon glyphicon-ok"></span> <strong>Welcome User</strong>
                                    <hr class="message-inner-separator" />
                                    <p>
                                        Start Exploring what you can do with Task Mafia</p>
                                </div>
                            </div></div> :
                        <div class="row custom-row">
                            <div class="col-sm-8">
                                <div class="alert alert-info">
                                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                                        ×</button>
                                    <span class="glyphicon glyphicon-info-sign"></span> <strong> {(this.state.isForVerify) ? 'Activation In Progress' : 'Login Successfull !!'}</strong>
                                    <hr class="message-inner-separator" />
                                    <p>
                                        {(this.state.isForVerify) ? 'Please wait !! We are activation your account....' : 'We have sent an activation email to your registered email id. Please click on link to activate your account.'}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => ({
    user: state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVarificationScreen);
