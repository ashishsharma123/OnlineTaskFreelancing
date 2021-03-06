// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import * as urls from '../../config/configuration';
// import { LoadingOverlay, Loader } from 'react-overlay-loader';
// import Modal from 'react-responsive-modal';
// import 'react-overlay-loader/styles.css';
// import { Redirect } from 'react-router-dom';
// import { REGISTER_STEP_1_URL } from '../../config/configuration';
// import { sendPostRequest } from '../../utils/network';
// import { ToastContainer } from 'react-toastify';
// import { registerStep1 } from '../sign-up/actions';
// import { showMessage } from '../../utils/message';
// import Autocomplete from 'react-google-autocomplete';

// /**
//  * Content of Signup screen.
//  */
// class RegisterStep1 extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//         this.state = {
//             isPopupOpen: true,
//             firstName: this.props.user.firstName,
//             lastName: this.props.user.lastName,
//             isLoading: false,
//             city: this.props.user.city,
//             role: this.props.user.roleId,
//             success: false
//         }
//     }

//     onOpenModal = () => {
//         this.setState({ isPopupOpen: true });
//     };

//     onCloseModal = () => {
//         this.setState({ isPopupOpen: false });
//     };

//     onInputChange = (e, name) => {
//         this.setState({ [name]: e.target.value })
//     }

//     onRadioChange = (index) => {
//         this.setState({ 'role': index })
//     }

//     showMessage() {
//         showMessage('success', 'Details Saved Successfully !!');
//     }



//     onSubmit = (event) => {
//         event.preventDefault();
//         let postData = {
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             city: this.state.city,
//             roleId: this.state.role,
//             token: this.props.user.token
//         }
//         this.setState({ isLoading: true });
//         sendPostRequest(REGISTER_STEP_1_URL, postData).then((res) => {
//             if (res.status == 200) {
//                 this.props.registerStep1(postData);
//                 window.localStorage.setItem("user", JSON.stringify(this.props.user));
//                 this.showMessage();
//                 this.setState({ success: true });
//             }
//             this.setState({ isLoading: false });
//         })
//             .catch((error) => {
//                 this.setState({ isLoading: false });
//             })
//     }


//     render() {
//         console.log(this.state.success, this.state.roleId)
//         if (this.state.success && this.state.role > 1) {
//             return <Redirect to='/register-step-2' />;
//         } else if (this.state.success) {
//             this.onCloseModal();
//         }

//         return (
//             <div className="register-step-1">

//                 <Modal ref="modelRef" open={this.state.isPopupOpen} onClose={this.onCloseModal} center>
//                     <Loader loading={this.state.isLoading} />
//                     <div className="register-step-1-popup-size">
//                         <div className="row center-align">
//                             <h4>Welcome to Task Mafia</h4>
//                         </div>
//                         <div className="row center-align">
//                             <h4>Let us know more about you</h4>
//                         </div>
//                         <form onSubmit={this.onSubmit}>
//                             <div className="form-group">
//                                 <label for="email">First Name:</label>
//                                 <input type="text" value={this.state.firstName} className="form-control" ref="firstName" placeholder="Firstname" onChange={(e) => { this.onInputChange(e, 'firstName') }} />
//                             </div>
//                             <div className="form-group">
//                                 <label for="pwd">Last Name:</label>
//                                 <input type="text" className="form-control" value={this.state.lastName} ref="lastName" placeholder="Lastname" onChange={(e) => { this.onInputChange(e, 'lastName') }} />
//                             </div>
//                             <div className="form-group">
//                                 <label for="pwd">Enter Your City</label>
//                                 {/* <input type="text" className="form-control" value={this.state.city} ref="city" placeholder="City" onChange={(e) => { this.onInputChange(e, 'city') }} /> */}
//                                 <Autocomplete
//                                     style={{ width: '90%' }}
//                                     onPlaceSelected={(place) => {
//                                         console.log(place);
//                                     }}
//                                     types={['(regions)']}
//                                     componentRestrictions={{ country: "nz" }}
//                                 />
//                             </div>
//                             <div class="radio">
//                                 <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(1) }} />
//                                 <label>Seeker</label>
//                             </div>
//                             <div class="radio">
//                                 <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(2) }} />
//                                 <label>Tasker</label>
//                             </div>
//                             <div class="radio">
//                                 <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(3) }} />
//                                 <label>Both</label>
//                             </div>
//                             <button type="submit" className="btn btn-primary">Submit</button>
//                         </form>


//                     </div>
//                 </Modal>
//                 <ToastContainer autoClose={5000} />
//             </div>

//         );
//     }
// }


// const mapStateToProps = state => ({
//     user: state.User
// });

// const mapDispatchToProps = dispatch => ({
//     registerStep1: (data) => { dispatch(registerStep1(data)) }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep1);


import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import Modal from 'react-responsive-modal';
import 'react-overlay-loader/styles.css';
import { Redirect } from 'react-router-dom';
import { REGISTER_STEP_1_URL } from '../../config/configuration';
import { sendPostRequest } from '../../utils/network';
import { ToastContainer } from 'react-toastify';
import { registerStep1 } from '../sign-up/actions';
import { showMessage } from '../../utils/message';
import Autocomplete from 'react-google-autocomplete';

/**
 * Content of Signup screen.
 */
class RegisterStep1 extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            isPopupOpen: true,
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            isLoading: false,
            city: this.props.user.city,
            role: this.props.user.roleId,
            success: false
        }
    }

    onOpenModal = () => {
        this.setState({ isPopupOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isPopupOpen: false });
    };

    onInputChange = (e, name) => {
        this.setState({ [name]: e.target.value })
    }

    onRadioChange = (index) => {
        this.setState({ 'role': index })
    }

    showMessage() {
        showMessage('success', 'Details Saved Successfully !!');
    }



    onSubmit = (event) => {
        event.preventDefault();
        let postData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            roleId: this.state.role,
            token: this.props.user.token
        }
        this.setState({ isLoading: true });
        sendPostRequest(REGISTER_STEP_1_URL, postData).then((res) => {
            if (res.status == 200) {
                this.props.registerStep1(postData);
                window.localStorage.setItem("user", JSON.stringify(this.props.user));
                this.showMessage();
                this.setState({ success: true });
            }
            this.setState({ isLoading: false });
        })
            .catch((error) => {
                this.setState({ isLoading: false });
            })
    }


    render() {
        console.log(this.state.success, this.state.roleId)
        if (this.state.success && this.state.role > 1) {
            return <Redirect to='/register-step-2' />;
        } else if (this.state.success) {
            this.onCloseModal();
        }

        return (
            <div className="register-step-1">

                <Modal ref="modelRef" open={this.state.isPopupOpen} onClose={this.onCloseModal} center>
                    <Loader loading={this.state.isLoading} />
                    <div className="register-step-1-popup-size">
                        <div className="row welcome center-align">
                            <h3 class="">Welcome to Task Mafia</h3>
                       
                            <h4>Let us know more about you</h4>
                        </div>
                        <form class="popupform" onSubmit={this.onSubmit}>

                        <div class="group">      
                            <input required type="text" value={this.state.firstName}  ref="firstName" onChange={(e) => { this.onInputChange(e, 'firstName') }} />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label for="email">First Name</label>
                        </div>
                        <div class="group">      
                        <input required type="text"  value={this.state.lastName} ref="lastName" onChange={(e) => { this.onInputChange(e, 'lastName') }} />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label for="pwd">Last Name</label>
                        </div>

                        <div class="group">      
                            
                        <Autocomplete
                                type={'text'}
                                style={{ width: '100%' }}
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                }}
                                types={['(regions)']}
                                componentRestrictions={{ country: "nz" }}
                                // className={'form-control'}
                            />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label for="pwd">Enter Your City</label>
                        </div>
                            {/* <div className="form-group">
                                <label for="email">First Name:</label>
                                <input type="text" value={this.state.firstName} className="form-control" ref="firstName" placeholder="Firstname" onChange={(e) => { this.onInputChange(e, 'firstName') }} />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Last Name:</label>
                                <input type="text" className="form-control" value={this.state.lastName} ref="lastName" placeholder="Lastname" onChange={(e) => { this.onInputChange(e, 'lastName') }} />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Enter Your City</label>
                                 <input type="text" className="form-control" value={this.state.city} ref="city" placeholder="City" onChange={(e) => { this.onInputChange(e, 'city') }} /> 
                                <Autocomplete
                                
                                    style={{ width: '100%' }}
                                    onPlaceSelected={(place) => {
                                        console.log(place);
                                    }}
                                    types={['(regions)']}
                                    componentRestrictions={{ country: "in" }}
                                    className={'form-control'}
                                />
                            </div> */}
                            <div class="radioGroup">
                            <div class="radio">
                                <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(1) }} />
                                <label>Seeker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(2) }} />
                                <label>Tasker</label>
                            </div>
                            <div class="radio">
                                <input type="radio" name="optradio" value={this.state.role} ref="role" onChange={(e) => { this.onRadioChange(3) }} />
                                <label>Both</label>
                            </div>
                            </div>
                            <span class="btn">
                            <button type="submit" class="lightBlue hvr-grow-shadow">Submit</button>
                            </span>
                            {/* <button  className="btn btn-primary">Submit</button> */}
                        </form>


                    </div>
                </Modal>
                <ToastContainer autoClose={5000} />
            </div>

        );
    }
}


const mapStateToProps = state => ({
    user: state.User
});

const mapDispatchToProps = dispatch => ({
    registerStep1: (data) => { dispatch(registerStep1(data)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep1);
