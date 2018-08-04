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
import * as actions from './actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

	showMessage() {
		toast.info("This feature will be available soon !!", {
		  position: toast.POSITION.TOP_RIGHT
		  });
	  }

	onPasswordChange = (e) => {
		this.setState({ password: e.target.value })
	}

	responseGoogle = (response) => {
		console.log(response);
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
			if(_res.status == 201) {
				toast.error("Invalid credentials !!", {
					position: toast.POSITION.TOP_RIGHT
				  });
				  this.setState({ isLoading: false });
			this.setState({ loginSuccess: false });
				return;
			}
			else if(_res.status == 200){
			toast.success("Sign in Successfull !!", {
				position: toast.POSITION.TOP_RIGHT
			  });
			this.setState({ isLoading: false });
			_res = _res.data;
			let data = {
				"id": (this.props.isForSignup) ? _res.insertId : _res.id,
				"token": (this.props.isForSignup) ? _res.access_token : _res.token,
				"active": (this.props.isForSignup)? false : _res.active
			}
			this.props.setSignupDataInStore(data);
			window.localStorage.setItem("user", JSON.stringify(this.props.user));
			this.setState({ loginSuccess: true });
			setTimeout(()=>{
				this.props.onClose();
			}, 100);
		} else{
			throw new Error('Something Went wrong')
		}
		}).catch(() => {
			this.setState({ isLoading: false });
			toast.error("Error While Logging you in !!", {
				position: toast.POSITION.TOP_RIGHT
			  });
		})
	}
	render() {
		if (this.state.loginSuccess) {
			if(this.props.user.active == 1)
				return <Redirect to={'/register-step-1'}/>;
			else
				return <Redirect to={'/verify?isEmailVerified='+this.props.user.active}/>;
		  }
		return (
			
			<div className="signup-screen">
				<Loader loading={this.state.isLoading} />
				<ToastContainer autoClose={5000} />
				<div class="signup-container">

					<form onSubmit={(e) => this.onSubmit(e)}>
						<div class="row">
							<h2 className="center-align">{(this.props.isForSignup) ? 'Sign Up' : 'Login'}</h2>
							<div class="vl">
								<span class="vl-innertext">or</span>
							</div>

							<div class="col">
							
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
						
						<div class="col-12">
							<a href="javascript:void(0)" className="btn white-color" onClick={(e)=>this.showMessage()}>Forgot password?</a>
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
	
		setSignupDataInStore: (userData) => {dispatch({type:actions.SIGNUP_SUCCESS,payload:userData})}
	,
		removeSignupDataInStore: () => {dispatch(actions.SIGNUP_FAILURE)},
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
