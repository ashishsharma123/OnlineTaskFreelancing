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
import * as actions from './actions';
import { ToastContainer } from 'react-toastify';
import { showMessage } from '../../utils/message';

/**
 * Content of Signup screen.
 */


class SignUp extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			email: '',
			password: '',
			isLoading: false,
			loginSuccess: false
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
		console.log('fb response  ', response)
		if(response.status && response.status === "unknown") {
			showMessage('warn', 'Facebook Login Cancelled');
		} else {
			let reqBody = {
				"access_token": response.accessToken
			};
			
			this.setState({ isLoading: true });
			
			sendPostRequest(urls.LOGIN_WITH_FB_URL, reqBody)
			.then(_res=>{
			if(_res.status === 200) {
					showMessage('success', "Sign in Successfull !!");
					let reduxData = {
						"firstName" : response.name.split(' ')[0],
						"lastName" :  response.name.substring(response.name.indexOf(' ')),
						"token": _res.data.access_token,
						"email": response.email,
						"imageUrl" : response.picture.data.url
					}
					this.props.loginWithFbSuccess(reduxData);
					this.setState({ isLoading: false });
					this.setState({ loginSuccess: true });
					setTimeout(() => {
						this.props.onClose();
					}, 100);	
			}			
			})
			.catch(_err=>{

			})
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
				<div class="signup-container">

					<form onSubmit={(e) => this.onSubmit(e)} ref="form">
						<div class="row">
							<h2 className="center-align">{(this.props.isForSignup) ? 'Sign Up' : 'Login'}</h2>
							<div class="vl">
								<span class="vl-innertext">or</span>
							</div>

							<div class="col">
								<FacebookLogin
									appId="261011391379986"
									autoLoad={false}
									fields="name,email,picture"
									callback={(e)=>{this.responseFacebook(e)}} />
							</div>

							<div class="col">
								<div class="hide-md-lg">
									<p>Or sign in manually:</p>
								</div>

								<input type="text" name="username" placeholder="Username" value={this.state.email} onChange={(e) => this.onInputChange(e, 'email')} required /><br />
								<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.onInputChange(e, 'password')} required /><br /><br />
								<input type="submit" disabled={false} value={(this.props.isForSignup) ? 'Sign Up' : 'Login'} />
							</div>

						</div>
					</form>
				</div>

				<div class="bottom-container">
					<div class="row">

						<div class="col-12">
							<a href="javascript:void(0)" className="btn white-color" onClick={(e) => this.showMessage()}>Forgot password?</a>
						</div>
					</div>
				</div>
			</div>

		);
	}
}


const mapStateToProps = state => ({
	user: state.User
});

const mapDispatchToProps = dispatch => ({

	setSignupDataInStore: (userData) => { dispatch({ type: actions.SIGNUP_SUCCESS, payload: userData }) },
	removeSignupDataInStore: () => { dispatch(actions.SIGNUP_FAILURE) },
	loginWithFbSuccess:(_data) => { dispatch(actions.loginWithFbSuccess(_data))}

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
