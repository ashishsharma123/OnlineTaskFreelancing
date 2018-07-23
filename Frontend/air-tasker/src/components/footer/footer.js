import React, { Component } from "react";
import PropTypes from "prop-types";

// import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
        <footer class="footer-bs">
        <div class="row">
        	<div class="col-md-3 footer-brand animated fadeInLeft">
            	<h2>Task Mafia</h2>
                <p>Get Your Task Done Here</p>
                <p>© All Rights Reserved</p>
            </div>
        	<div class="col-md-4 footer-nav animated fadeInUp">
            	<h4>Discover</h4>
            	<div class="col-md-6">
                    <ul class="pages">
                        <li><a href="javascript:void(0)">Task Mafia Cards</a></li>
                        <li><a href="javascript:void(0)">How it works</a></li>
                        <li><a href="javascript:void(0)">Task Mafia for business</a></li>
                        <li><a href="javascript:void(0)">Earn money</a></li>
                        <li><a href="javascript:void(0)">New users FAQ</a></li>
                    </ul>
                </div>
            	<div class="col-md-6">
                    <ul class="list">
                        <li><a href="javascript:void(0)">About Us</a></li>
                        <li><a href="javascript:void(0)">Contacts</a></li>
                        <li><a href="javascript:void(0)">Terms & Condition</a></li>
                        <li><a href="javascript:void(0)">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        	<div class="col-md-2 footer-social animated fadeInDown">
            	<h4>Company</h4>
            	<ul>
                	<li><a href="javascript:void(0)">About us</a></li>
                	<li><a href="javascript:void(0)">Careers</a></li>
                	<li><a href="javascript:void(0)">Community guidelines</a></li>
                	<li><a href="javascript:void(0)">Terms & conditions</a></li>
                </ul>
            </div>
        	<div class="col-md-3 footer-ns animated fadeInRight">
            	<h4>Newsletter</h4>
                <p>Search for latest offer at Air Tasker</p>
                <p>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search for..."/>
                      <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
