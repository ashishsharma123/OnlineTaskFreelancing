import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { sendPostRequest } from '../../utils/network';
import * as urls from '../../config/configuration';
import { LoadingOverlay, Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';


/**
 * Content of Signup screen.
 */
class Home extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
                return (
            
            <div className="wrapper">
            <section className="home-container jumbotron paddB0">
            <div class="headtext">
            <h1 className="welcome-text white">
							<span class="h1">taskmafia<sup>Beta</sup></span>
                            <span>An online market place</span>
                            <span>where kiwis get everything done!</span></h1>
                            <div class="btnGroup">
                            <button class="yellow">Get started now</button>
                            <button class="lightBlue">See how it's done</button>
                            </div>
                            </div>
            {/* <img src="../images/bannerBg.png" className="center"/> */}
            <img src="./images/professionalImage.jpg" className="center"/>
            </section>       
            <section className="">
             <div className="jumbotron transparent container">
                
                <h2>Get your to-dos done!</h2>
                <ul className="todoMenu">
                    <li>
                        <a href="">
                            <span className="rounded-0 iconBlock">
                                <img src="../images/baking.svg" />
                             {/* <i className="glyphicon glyphicon-gift"></i> */}
                            </span>
                            <span>Baking & Cooking</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="rounded-0 iconBlock">
                                <img src="./images/baking.svg" />
                            </span>
                            <span className="txt">Business & Admin</span>
                            </a>
                    </li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt" className="txt">Cleaning</span></a></li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">delivery & Removals</span></a></li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">Events & Photography</span></a></li>

                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">Furniture</span></a></li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt" >Home & Gardening</span></a></li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">Handymen & Tradies</span>
                    </a></li>
                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">Party & Staffing</span></a></li>

                    <li><a href=""><span className="rounded-0 iconBlock">
                    <img src="./images/baking.svg" />
                    </span><span className="txt">Anything</span></a></li>    
                </ul>

</div>
                </section>
                <section class="tabBlockGrey center">
                <div class="container jumbotron transparent">
                <h2>Why use Taskmafia</h2>
                <img alt="Brand" className="main-logo-bg" src="images/logo.png"/>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="terms-tab" data-toggle="tab" href="#terms" role="tab" aria-controls="terms" aria-selected="true">Your Terms</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="timeline-tab" data-toggle="tab" href="#timeline" role="tab" aria-controls="timeline" aria-selected="false">Your Timeline</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="safety-tab" data-toggle="tab" href="#safety" role="tab" aria-controls="safety" aria-selected="false">Your Safety</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="selection-tab" data-toggle="tab" href="#selection" role="tab" aria-controls="selection" aria-selected="false">Your Selection</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="badges-tab" data-toggle="tab" href="#badges" role="tab" aria-controls="badges" aria-selected="false">Your Badges</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade in active" id="terms" role="tabpanel" aria-labelledby="terms-tab">Whatever you need to simplify your to do list, no matter your budget.
  </div>
  <div class="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="timeline-tab">Find services based on your goals and deadlines, it’s that simple.
</div>
  <div class="tab-pane fade" id="safety" role="tabpanel" aria-labelledby="safety-tab">Your payment is always secure, taskmafia is built to protect your peace of mind.</div>

<div class="tab-pane fade" id="selection" role="tabpanel" aria-labelledby="selection-tab">Whoever you find is good fit for your task, hire him.</div>

<div class="tab-pane fade" id="badges" role="tabpanel" aria-labelledby="badges-tab">Badges give members a bit more verified info when deciding who to work with on a task. Each badge has certain requirements that must be met and verified before they’re shown on the member's profile
.</div>
</div>
                </div>
                    </section>
                <section className="greyBg">
                <div className="jumbotron transparent container completeTaskBlk">
                    <h2 className="white mT0">See what has recently been completed</h2>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                              <div className="item active">
                      <div className="row ">
                    <div className="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div className="block">
            <img className=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        <div className="item">
        <div className="row ">
                    <div className="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div className="block">
            <img className=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        <div className="item ">
                    <div className="row ">
                    <div className="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div className="block">
            <img className=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div className="col-md-4 col-md-sm-4 col-xs-4">
        <div className="block">
            <img className=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        

        </div>
        </div>
        </div>
                    </section>
                    <section class="blackBg">
                    <img src="images/becomTasker.jpg" class="becomImg"/>
                        <div class="container jumbotron transparent contentPos">
                    <h2 class="white">Become a tasker</h2>
                   <span>it'll have description of 2-4 linesit'll have description of 2-4 linesit'll have<br/> description of 2-4 linesit'll have
                         description of 2-4 linesit'll have description<br/> of 2-4 lines it'll have description of 2-4 lines
                         it'll have description<br/> of 2-4 linesit'll have description of 2-4 lines</span>
                    </div>
                    </section>
                    <section ><div className="jumbotron transparent container videoblk">
                    <h2>How does taskmafia work?</h2>
                   
                    <ul>
    <li className="col-md-4 col-md-sm-4 col-xs-4">
<img className=" icon " src="images/postTask.png" alt="card image" />
<span className=""><span className="task-heading">Post your task
</span><span className="task-detail">Tell us what you need. It's FREE to post.</span></span>
</li>
    <li className="col-md-4 col-md-sm-4 col-xs-4">
    <img className=" icon " src="images/reviewOff.png" alt="card image" />
    <span className=""><span className="task-heading">Review received offers
</span><span className="task-detail">Get offers from trusted Taskers and view profiles.</span></span>
</li>
<li className="col-md-4 col-md-sm-4 col-xs-4">
<img className=" icon " src="images/taskDone.png" alt="card image" />
<span className=""><span className="task-heading">Pay when it's done</span>
<span className="task-detail">Choose the right person for your task and get it done.</span></span></li>
        </ul>
    
                    <div className="relblk">
                    <img src="/images/ofcimg.jpg" className="imgBlk"/>
                    <img src="/images/dload.png" className="play" />
                    <img src="/images/videoChar.png" className="pos" />
                    </div>
                
                    
                    </div></section>


                    <section className="bluecatBg">
                    <div className="jumbotron transparent container catBlock">
<h2 className="white">Some of our top categories</h2>
<ul className="white">
<li>Accounting</li><li>admin</li><li>Alteration</li><li>Appliances</li><li>Assembly</li>
<li>Audio visual auto</li><li>Beauty</li><li>Bricklaying</li><li>Building</li>
<li>Business</li><li>Carpentry</li><li>Cleaning</li><li>Computers</li><li>Cooking</li><li>Concreting</li>
<li>Decking</li><li>Delivery</li><li>Design</li><li>Driving</li><li>Electical</li><li>Entertainment party</li>
<li>Events Catering</li> <li>Fencing</li><li>Fitness</li>
{/* <li>Flooring</li><li>Food-Delivery</li><li>Gardening</li>
<li>Handyman</li><li>Home-Theatre</li><li>Immigration</li>
<li>Landscaping</li> */}
</ul>
<a href="" className="white"><strong>See all categories</strong></a>
                    </div>
                    </section>
                    <section class="greyBg dloadSection">
                        <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6 padd0">
<img src="./images/dloadApp.jpg" class="dloadImg"/>
         </div>
<div class="col-md-6 col-sm-6 col-xs-6 yellow padd0">
<div class="dloadTxt">
                        <h2>DOWNLOAD THE APP</h2>
	<p>Get the best taskmafia experience ...blah blah ... and support
         by downloading the iOS/Android app.</p>
         <button class="greyBg">Download</button></div>
        </div>
         </div>
         </section>


            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
