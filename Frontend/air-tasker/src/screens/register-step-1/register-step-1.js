import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import Modal from 'react-responsive-modal';
import 'react-overlay-loader/styles.css';
import { Redirect } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Content of Signup screen.
 */
class RegisterStep1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isPopupOpen: true
        }
    }

    onOpenModal = () => {
        this.setState({ isPopupOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isPopupOpen: false });
    };

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    showMessage() {
        toast.info("This feature will be available soon !!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }



    onSubmit = (event) => {
        event.preventDefault();

    }


    render() {

        return (
            <div className="register-step-1">
                <Modal ref="modelRef" open={this.state.isPopupOpen} onClose={this.onCloseModal} center>
                    <div className="register-step-1-popup-size">
                        <div className="row center-align">
                            <h4>Welcome to Task Mafia</h4>
                        </div>
                        <div className="row center-align">
                            <h4>Let us know more about you</h4>
                        </div>
                        <form>
                            <div className="form-group">
                                <label for="email">First Name:</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Last Name:</label>
                                <input type="text" className="form-control" id="pwd" />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Enter Your City</label>
                                <input type="text" className="form-control" id="pwd" />
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" />
                                <label>I want to get things Done</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" />
                                <label>I want to earn Money</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </Modal>
                <ToastContainer autoClose={5000} />
            </div>

        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep1);
