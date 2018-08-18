import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { showMessage } from '../../utils/message';
import UploadPhoto from '../../components/upload-photo/upload-photo';
import { REGISTER_STEP_1_URL } from '../../config/configuration';
import { registerStep1 } from '../../screens/sign-up/actions';

/**
 * Content of Signup screen.
 */


class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            password: this.props.user.password,
            contact: this.props.user.contact,
            email: this.props.user.email,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            city: this.props.user.city,
            roleId: this.props.user.roleId,
            categories: this.props.user.categories,
            description: this.props.user.description,
            imgUrl: this.props.user.imageUrl,
            isLoading: false,
        }


    }

    onInputChange = (e, name) => {
        this.setState({ [name]: e.target.value })
    }

    onImageUploadSuccess = (_imageUrl) => {
        this.props.saveImage(_imageUrl);
        this.setState({ imgUrl: _imageUrl })
    }


    onLoaderChange = (_loaderBoolean) => {
        this.setState({ isLoading: _loaderBoolean });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let postData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            roleId: this.state.roleId,
            token: this.props.user.token
        }
        this.setState({ isLoading: true });
        sendPostRequest(REGISTER_STEP_1_URL, postData).then((res) => {
            if (res.status == 200) {
                this.props.registerStep1(postData);
                showMessage('success', 'Details Updated Successfully');
            }
            this.setState({ isLoading: false });
        })
            .catch((error) => {
                showMessage('error', 'Something went wrong');
                this.setState({ isLoading: false });
            })
    }

    onRadioChange = (index) => {
        this.setState({ roleId: index })
    }
    render() {
        if (this.state.loginSuccess) {
            if (this.props.user.active == 1)
                return <Redirect to={'/register-step-1'} />;
            else
                return <Redirect to={'/verify?isEmailVerified=' + this.props.user.active} />;
        }
        return (

            <div className="dashboard-screen">
                <Loader loading={this.state.isLoading} />
                <ToastContainer autoClose={5000} />
                <div class="nav-side-menu">
                    <div class="brand">Brand Logo</div>
                    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div class="menu-list">

                        <ul id="menu-content" class="menu-content collapse out">
                            <li>
                                <a href="#"><i class="fa fa-dashboard fa-lg fa-fw sidebar-icon"></i> Dashboard</a>
                            </li>

                            <li>
                                <a href="#"><i class="fa fa-calendar fa-lg fa-fw sidebar-icon"></i> Scheduler</a>
                            </li>

                            <li>
                                <a href="#"><i class="fa fa-bar-chart fa-lg fa-fw sidebar-icon"></i> Statistics</a>
                            </li>

                            <li data-toggle="collapse" data-target="#manage" class="collapsed">
                                <a href="#"><i class="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i> Manage <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="manage">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Devices</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Groups</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SIM Cards</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Users</a></li>
                            </ul>

                            <li data-toggle="collapse" data-target="#settings" class="collapsed">
                                <a href="#"><i class="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Settings <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="settings">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> General</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Security</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Notifications</a></li>
                            </ul>

                            <li data-toggle="collapse" data-target="#maintenance" class="collapsed">
                                <a href="#"><i class="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Maintenance <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="maintenance">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Operation Logs</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Events and Alarms</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Backup and Restore</a></li>
                            </ul>

                            <li data-toggle="collapse" data-target="#tools" class="collapsed">
                                <a href="#"><i class="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Tools <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="tools">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Manual SMS</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Import</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Export</a></li>
                            </ul>

                            <li data-toggle="collapse" data-target="#help" class="collapsed">
                                <a href="#"><i class="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Help <span class="arrow"></span></a>
                            </li>
                            <ul class="sub-menu collapse" id="help">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> Customer Support <small><i class="fa fa-external-link"></i></small></a></li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div class="main">
                    test
</div>

            </div>

        );
    }
}


const mapStateToProps = state => ({
    user: state.User
});

const mapDispatchToProps = dispatch => ({
    registerStep1: (data) => { dispatch(registerStep1(data)) },

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
