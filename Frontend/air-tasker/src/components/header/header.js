// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Modal from 'react-responsive-modal';
// import Signup from '../../screens/sign-up/sign-up';
// // import { connect } from "react-redux";
// import { Link } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { connect } from 'react-redux';
// import {logout} from '../../screens/sign-up/actions';


// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSignupOpen: false,
//       isForSignup: true
//     }
//   }

//   showMessage() {
//     toast.info("Comming Soon !!", {
//       position: toast.POSITION.TOP_RIGHT
//       });
//   }

//   onOpenModal = () => {
//     this.setState({ isSignupOpen: true });
//   };

//   onCloseModal = () => {
//     this.setState({ isSignupOpen: false });
//   };
//   onLogout = () => {
//     this.props.logout();
//     window.localStorage.clear();

//   }
//   render() {
//     return (
//       <div>
//         <Modal ref="modelRef"open={this.state.isSignupOpen} onClose={this.onCloseModal} center>
//           <Signup isForSignup={this.state.isForSignup} onClose={this.onCloseModal}/>
//         </Modal>
//         <ToastContainer autoClose={5000} />
//       <nav className="navbar navbar-default header">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <a className="navbar-brand" href="javascript:void(0)">
//             <img alt="Brand" className="main-logo" src="https://www.taskmafia.com/wp-content/uploads/2018/06/cropped-TM_Logo_Transparent-1.png"/>
//           </a>
//         </div>
//         <ul class="nav navbar-nav navbar-center">
//             <li><a href="javascript:void(0)" className="post-a-task" onClick={(e)=>this.showMessage()}>Post a Task</a></li>
//             <li><a href="javascript:void(0)" onClick={(e)=>this.showMessage()}>Brows Task</a></li>
//             <li><a href="javascript:void(0)" onClick={(e)=>this.showMessage()}>How it works</a></li>
//           </ul>
//           <ul class="nav navbar-nav navbar-right">
//             <li><a href="javascript:void(0)">Help</a></li>
//             {(this.props.user.isLoggedIn)? '':<li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: true})}}>Join</a></li>}
//             {(this.props.user.isLoggedIn)?
//              <li><Link to={`/`} onClick={(e)=>{this.onLogout()}}><a href="javascript:void(0)">Logout</a></Link></li>:
//              <li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: false})}}>Sign in</a></li>
//              }
            
            
//           </ul>
//       </div>
//     </nav>
    
//     </div>
//     );
//   }
// }
// const mapStateToProps = state => ({
// 	user: state.User
//  });

// const mapDispatchToProps = dispatch => ({
// 	logout: () => {dispatch(logout())}
    
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from 'react-responsive-modal';
import Signup from '../../screens/sign-up/sign-up';
// import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupOpen: false,
      isForSignup: true
    }
  }

  showMessage() {
    toast.info("Comming Soon !!", {
      position: toast.POSITION.TOP_RIGHT
      });
  }

  onOpenModal = () => {
    this.setState({ isSignupOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isSignupOpen: false });
  };
  render() {
    return (
      <div class="headerbg">
        <Modal ref="modelRef"open={this.state.isSignupOpen} onClose={this.onCloseModal} center>
          <Signup isForSignup={this.state.isForSignup} onClose={this.onCloseModal}/>
        </Modal>
        <ToastContainer autoClose={5000} />
      <nav class="navbar navbar-default header">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="javascript:void(0)">
            {/* <img alt="Brand" className="main-logo" src="https://www.taskmafia.com/wp-content/uploads/2018/06/cropped-TM_Logo_Transparent-1.png"/> */}
            <img alt="Brand" className="main-logo" src="images/logo.png"/>
          </a>
        </div>
        <ul class="nav navbar-nav navbar-center topBotomBordersOut">
            <li class="active"><a href="javascript:void(0)" className="post-a-task" onClick={(e)=>this.showMessage()}>Post a Task</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>this.showMessage()}>Brows Task</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>this.showMessage()}>How it works</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="javascript:void(0)">Help</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: true})}}>Join</a></li>
            <li><a href="javascript:void(0)" onClick={(e)=>{this.setState({isSignupOpen: true, isForSignup: false})}}>Sign In</a></li>
          </ul>
      </div>
    </nav>
    
    </div>
    );
  }
}

export default Header;
