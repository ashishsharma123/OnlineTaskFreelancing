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
import {REGISTER_STEP_1_URL } from '../../config/configuration';
import {registerStep2} from '../../screens/sign-up/actions';

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
                imgUrl: this.props.user.imageUrl,
                isLoading: false,
            }
            
        
    }

    onInputChange = (e, name) => {
        this.setState({ [name]: e.target.value })
    }

    onImageUploadSuccess = (_imageUrl) => {
        this.props.saveImage(_imageUrl);
        this.setState({imgUrl: _imageUrl})
    }


    onLoaderChange = (_loaderBoolean) => {
        this.setState({isLoading: _loaderBoolean});
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
        this.setState({isLoading: true});
        sendPostRequest(REGISTER_STEP_1_URL, postData).then((res)=>{
            if(res.status == 200) {
                this.props.registerStep1(postData);
                showMessage('success', 'Details Updated Successfully');
                this.setState({success: true});
            }
            this.setState({isLoading: false});
        })
        .catch((error)=>{
            showMessage('error', 'Something went wrong');
            this.setState({isLoading: false});
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

            <div className="signup-screen">
                <Loader loading={this.state.isLoading} />
                <ToastContainer autoClose={5000} />
                <div class="container">
                    <h1>Edit Profile</h1>
                    <hr />
                    <div class="row">
                        <div class="col-md-3">
                            {/* <div class="text-center">
                                <img src={this.state.imageUrl} class="avatar img-circle" alt="avatar" />
                                <h6>Upload a different photo...</h6>

                                <input type="file" class="form-control" />
                            </div> */}
                            <UploadPhoto
                                  imageUrl={this.state.imgUrl}
                                  onImageUploadSuccess={this.onImageUploadSuccess}
                                  onLoaderChange={this.onLoaderChange} />
                        </div>


                        <div class="col-md-9 personal-info">
                            
                            <h3>Personal info</h3>
                            
                            <form class="form-horizontal" onSubmit={(e)=>{this.onSubmit(e)}}>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">First name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.firstName} onChange={(e)=>{this.onInputChange(e, 'firstName')}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Last name:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.lastName} onChange={(e)=>{this.onInputChange(e, 'lastName')}}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" disabled type="email" value={this.state.email} onChange={(e)=>{this.onInputChange(e, 'email')}}/>
                                    </div>
                                </div>
                                {/* <div class="form-group">
                                    <label class="col-md-3 control-label">Password:</label>
                                    <div class="col-md-8">
                                        <input class="form-control" type="password" value={this.state.password} />
                                    </div>
                                </div> */}
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">City:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" type="text" value={this.state.city} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-lg-3 control-label">Type:</label>
                                    <div class="col-lg-8">
                                    <div class="radio">
                                <input type="radio" name="optradio" value={1} checked={this.state.roleId == 1}  ref="role" onChange={(e)=>{this.onRadioChange(1)}}/>
                                <label>Seeker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={2} checked={this.state.roleId == 2} ref="role" onChange={(e)=>{this.onRadioChange(2)}}/>
                                <label>Tasker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={3} checked={this.state.roleId == 3} ref="role" onChange={(e)=>{this.onRadioChange(3)}}/>
                                <label>Both</label>
                            </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-3 control-label"></label>
                                    <div class="col-md-8">
                                        <div className="row">
                                        <div className="col-sm-6">
                                        <input type="submit" class="btn btn-primary" value="Save Changes" />
                                        </div>
                                        <div className="col-sm-6">
                                        <input type="reset" class="btn btn-default" value="Cancel" />
                                        </div>
                                        </div>
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
    registerStep2: (data) => {dispatch(registerStep2(data))},

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
