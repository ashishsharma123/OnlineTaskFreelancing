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
            	<h2>Taskmafia</h2>
                <p>Taskmafia description comes here. Get Your Task Done Here</p>
                <p>©2018 All Rights Reserved</p>
                <div>
                <a href="#"><img src="./images/fb.png" class="fb"/></a>
        <a href="#"><img src="./images/twitter.png" class="twitter"/></a>
        <a href="#"><img src="./images/play.png" class="playstore" /></a>
        <a href="#"><img src="./images/apple.png" class="ios" /></a>
        </div>
            </div>
        	<div class="col-md-9 col-sm-9 col-xs-1 2footer-nav animated fadeInUp">
            	
            	<div class="linkBlk">
                <h4>Company</h4>
                    <ul class="pages">
                    <li><a href="javascript:void(0)">About us</a></li>
                        <li><a href="javascript:void(0)">Blog</a></li>
                        <li><a href="javascript:void(0)">Contact us</a></li>
                        <li><a href="javascript:void(0)">Press & News</a></li>
                                            </ul>
                </div>
               
                
            	<div class="linkBlk">
                <h4>Discover</h4>
                    <ul class="pages">
                        <li><a href="javascript:void(0)">How it works</a></li>
                        <li><a href="javascript:void(0)">Browse tasks</a></li>
                        <li><a href="javascript:void(0)">Earn money</a></li>
                        <li><a href="javascript:void(0)">Post a task</a></li>
                        <li><a href="javascript:void(0)">Refer a friend</a></li>

                        
                    </ul>
                </div>
            
            <div class="linkBlk">
            	<h4>Popular Categories</h4>
            	<ul class="pages">
                <li><a href="javascript:void(0)">Accounting</a></li>
                    <li><a href="javascript:void(0)">Admin</a></li>
                	<li><a href="javascript:void(0)">Design</a></li>
                	<li><a href="javascript:void(0)">Cleaning</a></li>
                	<li><a href="javascript:void(0)">Driving</a></li>
                	
                </ul>
            </div>
        	<div class="linkBlk">
            	<h4>Resources</h4>
            	<ul>
                <li><a href="javascript:void(0)">Community guidelines</a></li>
                <li><a href="javascript:void(0)">Privacy Policy</a></li>
                <li><a href="javascript:void(0)">Terms & Conditions</a></li>
                   
                	<li><a href="javascript:void(0)">Trust & Safety</a></li>
                	<li><a href="javascript:void(0)">Support centre</a></li>
                	
                	
                </ul>
            </div>
        	{/* <div class="footer-ns animated fadeInRight linkBlk">
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
            </div> */}
        </div>
        {/* <div class="footer-ns animated fadeInRight linkBlk">
        <a href="#"><img src="../images/fb.png" class="fb"/></a>
        <a href="#"><img src="../images/twitter.png" class="twitter"/></a>
        <a href="#"><img src="../images/play.png" class="playstore" /></a>
        <a href="#"><img src="../images/apple.png" class="ios" /></a>
        </div> */}
        </div>
    </footer>
    );
  }
}

export default Footer;
