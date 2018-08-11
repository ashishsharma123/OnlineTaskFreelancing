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

/**
 * Content of Signup screen.
 */


class Profile extends Component {
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
                imageUrl: this.props.user.imageUrl,
                isLoading: false,
            }
            
        
    }

    onInputChange = (e, name) => {
        this.setState({ [name]: e.target.value })
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    showMessage() {
        showMessage('info', "This feature will be available soon !!");
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    responseFacebook = (response) => {
        if (response.status && response.status === "unknown") {
            showMessage('warn', 'Facebook Login Cancelled');
        } else {
            let reqBody = {
                "firstName": response.name.split(' ')[0],
                "lastName": response.name.substring(response.name.indexOf(' ')),
                "token": response.accessToken,
                "imageUrl": response.picture.data.url
            }
            this.props.loginWithFbSuccess(reqBody);
            //this.setState({ isLoading: true });
            this.setState({ loginSuccess: true });
            setTimeout(() => {
                this.props.onClose();
            }, 100);
            // sendPostRequest(urls.LOGIN_WITH_FB_URL, reqBody)
            // .then(_res=>{
            // showMessage('success', "Sign in Successfull !!");
            // this.setState({ isLoading: false });

            // })
            // .catch(_err=>{

            // })
        }
    }

    onSubmit = (event) => {
        event.preventDefault();

        let url = (this.props.isForSignup) ? urls.SIGNUP_URL : urls.LOGIN_URL;
        let body = {
            "email": this.state.email,
            "password": this.state.password
        }

        this.setState({ isLoading: true });
        sendPostRequest(url, body).then((_res) => {
            if (_res.status == 201) {
                showMessage('error', "Invalid credentials !!");
                this.setState({ isLoading: false });
                this.setState({ loginSuccess: false });
                return;
            }
            else if (_res.status == 200) {
                showMessage('success', "Sign in Successfull !!");
                this.setState({ isLoading: false });
                _res = _res.data;
                let data = {
                    "id": (this.props.isForSignup) ? _res.insertId : _res.id,
                    "token": (this.props.isForSignup) ? _res.access_token : _res.token,
                    "active": (this.props.isForSignup) ? false : _res.active
                }
                this.props.setSignupDataInStore(data);
                window.localStorage.setItem("user", JSON.stringify(this.props.user));
                this.setState({ loginSuccess: true });
                setTimeout(() => {
                    this.props.onClose();
                }, 100);
            } else {
                throw new Error('Something Went wrong')
            }
        }).catch(() => {
            this.setState({ isLoading: false });
            showMessage('error', "Error While Logging you in !!");
        })
    }
    render() {
        if (this.state.loginSuccess) {
            if (this.props.user.active == 1)
                return <Redirect to={'/register-step-1'} />;
            else
                return <Redirect to={'/verify?isEmailVerified=' + this.props.user.active} />;
        }
        return (

            <div className="signup-screen">
                <Loader loading={this.state.isLoading} />
                <ToastContainer autoClose={5000} />
                <div class="container">
                    <h1>Edit Profile</h1>
                    <hr />
                    <div class="row">
                        <div class="col-md-3">
                            <div class="text-center">
                                <img src={this.state.imageUrl} class="avatar img-circle" alt="avatar" />
                                <h6>Upload a different photo...</h6>

                                <input type="file" class="form-control" />
                            </div>
                        </div>


                        <div class="col-md-9 personal-info">
                            
                            <h3>Personal info</h3>
                            
                            <form class="form-horizontal" role="form">
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">First name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.firstName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Last name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.lastName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Mobile:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.contact} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="email" value={this.state.email} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label">Password:</label>
                                    <div class="col-md-8">
                                        <input class="form-control" type="password" value={this.state.password} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">City:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.firstName} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Type:</label>
                                    <div class="col-lg-8">
                                    <div class="radio">
                                <input type="radio" name="optradio" value={this.state.roleId}  ref="role" onChange={(e)=>{this.onRadioChange(1)}}/>
                                <label>Seeker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={this.state.roleId} ref="role" onChange={(e)=>{this.onRadioChange(2)}}/>
                                <label>Tasker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={this.state.roleId}  ref="role" onChange={(e)=>{this.onRadioChange(3)}}/>
                                <label>Both</label>
                            </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label"></label>
                                    <div class="col-md-8">
                                        <input type="button" class="btn btn-primary" value="Save Changes" />
                                        <span></span>
                                        <input type="reset" class="btn btn-default" value="Cancel" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />


            </div>

        );
    }
}


const mapStateToProps = state => ({
    user: state.User
});

const mapDispatchToProps = dispatch => ({

    

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
