import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import SubHeader from '../../components/sub-header/sub-header'
/**
 * Static Screen Component to display Static Screen Content.
 * Will be customized on basis of url
 */
class StaticScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="static-screen">

                <SubHeader linkName="abc"></SubHeader>
                <div className="container-fluid">
                    <div className="main-container">
                        <div className="row center-align near-service-row">
                            <h1 className="near-service-label">Auto Services Near You</h1>
                        </div>
                        <div className="row recieve-row">
                            <h2 className="recieve-label">Receive no-obligation quotes from reviewed, rated & trusted Mechanics in minutes.</h2>
                        </div>

                    </div>
                    <div className="row selection-row">
                        <div className="col-sm-5 right-align">
                            <span className="i-need-label">I need </span>
                        </div>
                        <div className="col-sm-2">
                            <select class="form-control" id="sel1">
                                <option>Auto Service</option>
                                <option>Auto Repair</option>
                                <option>Auto Servicing</option>
                                <option>Something else...</option>
                            </select>
                        </div>
                        <div className="col-sm-5 left-align">
                            <a href="javascript:void(0)" className="get-free-quotes">Get Free quotes</a>
                        </div>
                    </div>
                    {/* What is air Tasker Section */}
                    <div>
                        <div className="row center-align top-margin">
                            <span className="what-is-airTasker-label">What is AirTasker?</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 center-align">
                                <div class="d-flex flex-row-reverse">
                                    <div class="p-2">
                                        <img class="page__Img-s4t7qk-0 juqzSi" width="82" height="82" src="https://assets-airtasker-com.s3.amazonaws.com/uploads/message_asset/message_attachment/1910941/modal_what-is-airtasker-one.png" alt="Post your task" />
                                    </div>
                                    <div class="p-2 main-title-label">
                                        <span>Post your task</span>
                                    </div>
                                    <div class="p-2 sub-title-label">
                                        <span>
                                            Tell us what you need, it's FREE to post.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 center-align">
                                <div class="d-flex flex-row-reverse">
                                    <div class="p-2">
                                        <img class="page__Img-s4t7qk-0 juqzSi" width="82" height="82" src="https://assets-airtasker-com.s3.amazonaws.com/uploads/message_asset/message_attachment/1910949/modal_what-is-airtasker-two.png" alt="Post your task" />
                                    </div>
                                    <div class="p-2 main-title-label">
                                        <span>Review offers</span>
                                    </div>
                                    <div class="p-2 sub-title-label">
                                        <span>
                                            Tell us what you need, it's FREE to post.
                                </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 center-align">
                                <div class="d-flex flex-row-reverse">
                                    <div class="p-2">
                                        <img class="page__Img-s4t7qk-0 juqzSi" width="82" height="82" src="https://assets-airtasker-com.s3.amazonaws.com/uploads/message_asset/message_attachment/1910953/modal_what-is-airtasker-three.png" alt="Post your task" />
                                    </div>
                                    <div class="p-2 main-title-label">
                                        <span>Get it done</span>
                                    </div>
                                    <div class="p-2 sub-title-label">
                                        <span>
                                            Tell us what you need, it's FREE to post.
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default StaticScreen;
