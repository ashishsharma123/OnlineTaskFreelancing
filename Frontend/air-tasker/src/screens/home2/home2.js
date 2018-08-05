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
class Home2 extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
                return (
            
            <div className="wrapper">
            <section class="home-container jumbotron paddB0">
            <h1 className="welcome-text">Welcome to Task Mafia !!</h1>
            <img src="../images/bannerBg.png" class="center"/>
            </section>       
            <section class="">
             <div class="jumbotron transparent container">
                
                <h2> Get your to-dos done!</h2>
                <ul class="todoMenu">
                    <li>
                        <a href="">
                            <span class="rounded-0 iconBlock">
                                <img src="../images/baking.svg" />
                             {/* <i class="glyphicon glyphicon-gift"></i> */}
                            </span>
                            <span>Baking & Cooking</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="rounded-0 iconBlock">
                                <img src="../images/baking.svg" />
                            </span>
                            <span class="txt">Business & Admin</span>
                            </a>
                    </li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt" class="txt">Cleaning</span></a></li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">delivery & Removals</span></a></li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">Events & Photography</span></a></li>

                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">Furniture</span></a></li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt" >Home & Gardening</span></a></li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">Handymen & Tradies</span>
                    </a></li>
                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">Party & Staffing</span></a></li>

                    <li><a href=""><span class="rounded-0 iconBlock">
                    <img src="../images/baking.svg" />
                    </span><span class="txt">Everything Else</span></a></li>    
                </ul>

</div>
                </section>
                <section class="greyBg">
                <div class="jumbotron transparent container completeTaskBlk">
                    <h2 class="white mT0">See what has recently been completeted</h2>

                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row ">
                    <div class="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div class="block">
            <img class=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        <div class="carousel-item">
        <div class="row ">
                    <div class="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div class="block">
            <img class=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        <div class="carousel-item ">
                    <div class="row ">
                    <div class="col-md-4 col-md-sm-4 col-xs-4 ">
                    <div class="block">
            <img class=" personimage left " src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        <div class="col-md-4 col-md-sm-4 col-xs-4">
        <div class="block">
            <img class=" personimage left" src="images/personImg.png" alt="card image" />
            <span className="task-heading">Dash cam installation</span>
            <p className="task-detail">I have to fix some scratches and polish my car before selling. Scratches are minor and doesn't need painting, just touch up and polish.</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>
        </div>
                    </section>
                    <section ><div class="jumbotron transparent container videoblk">
                    <h2>How does taskmafia work?</h2>
                    <div class="relblk">
                    <img src="/images/ofcimg.jpg" class="imgBlk"/>
                    <img src="/images/dload.png" class="play" />
                    <img src="/images/videoChar.png" class="pos" />
                    </div>
<ul>
    <li class="col-md-4 col-md-sm-4 col-xs-4">
<img class=" icon " src="images/postTask.png" alt="card image" />
<span class=""><span class="task-heading">Post your task
</span><span class="task-detail">Tell us what you need. It's FREE to post.</span></span>
</li>
    <li class="col-md-4 col-md-sm-4 col-xs-4">
    <img class=" icon " src="images/reviewOff.png" alt="card image" />
    <span class=""><span class="task-heading">Review received offers
</span><span class="task-detail">Get offers from trusted Taskers and view profiles.</span></span>
</li>
<li class="col-md-4 col-md-sm-4 col-xs-4">
<img class=" icon " src="images/taskDone.png" alt="card image" />
<span class=""><span class="task-heading">Get your job done
</span><span class="task-detail">Choose the right person for your task and get it done.</span></span></li>
        </ul>
                    
                    
                    </div></section>


                    <section class="bluecatBg">
                    <div class="jumbotron transparent container catBlock">
<h2 class="white">Some of our top categories</h2>
<ul class="white"><li>Accounting</li><li>admin</li><li>Alteration</li><li>Appliances</li><li>Assembly</li>
<li>Audio-visual auto</li><li>Beauty</li><li>Bricklaying</li> 
<li>Building</li><li>Business</li><li>Carpentry</li><li>Cleaning</li><li>Computers</li><li>Cooking</li>
<li>Concreting</li><li>Decking</li>
<li>Delivery</li><li>Design</li><li>Driving</li><li>Electical</li><li>Entertainment-party</li>
<li>Events-Catering</li> 
<li>Fencing</li><li>Fitness</li><li>Flooring</li><li>Food-Delivery</li><li>Gardening</li>
<li>Handyman</li><li>Home-Theatre</li><li>Immigration</li>
<li>Landscaping</li>
</ul>
<a href="" class="white"><strong>See all categories</strong></a>
                    </div>
                    </section>

            </div>

        );
    }
}


const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home2);