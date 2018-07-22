import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

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
	onEmailChange = (e) => {
		this.setState({ email: e.target.value })
	}

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value })
	}

	responseGoogle = (response) => {
		console.log(response);
	}

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onClose();
		this.setState({ loginSuccess: true });
		let url = (this.props.isForSignup) ? urls.SIGNUP_URL : urls.LOGIN_URL;
		let body = {
			"name": this.state.email,
			"password": this.state.password
		}
		this.setState({ isLoading: true });
		sendPostRequest(url, body).then((_res) => {
			this.setState({ isLoading: false });
			this.setState({ loginSuccess: true });
		}).catch(() => {
			this.setState({ isLoading: false });
		})
	}
	render() {
		if (this.state.loginSuccess) {
			return <Redirect to='/email-varification'/>;
		  }
		return (
			
			<div className="signup-screen">
				<Loader loading={this.state.isLoading} />
				<div class="signup-container">

					<form onSubmit={(e) => this.onSubmit(e)}>
						<div class="row">
							<h2 className="center-align">{(this.props.isForSignup) ? 'Sign Up' : 'Login'}</h2>
							<div class="vl">
								<span class="vl-innertext">or</span>
							</div>

							<div class="col">
								<a href="#" class="fb btn" disabled>
									<i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
								<a href="#" class="twitter btn" disabled>
									<i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
								<GoogleLogin
									clientId="764600461469-vnj1t1e7o33r8sthsocfk98ifd85fcb0.apps.googleusercontent.com"
									buttonText="Login"
									onSuccess={this.responseGoogle}
									onFailure={this.responseGoogle}
									buttonText="Login with Google+"
									className="google btn"
									fetchBasicProfile={true}
								/>
							</div>

							<div class="col">
								<div class="hide-md-lg">
									<p>Or sign in manually:</p>
								</div>

								<input type="text" name="username" placeholder="Username" value={this.state.email} onChange={(e) => this.onEmailChange(e)} required /><br />
								<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.onPasswordChange(e)} required /><br /><br />
								<input type="submit" value={(this.props.isForSignup) ? 'Sign Up' : 'Login'} />
							</div>

						</div>
					</form>
				</div>

				<div class="bottom-container">
					<div class="row">
						<div class="col">
							<a href="#" className="btn white-color">{(this.props.isForSignup) ? 'Log in' : 'Sign Up'}</a>
						</div>
						<div class="col">
							<a href="#" className="btn white-color">Forgot password?</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
