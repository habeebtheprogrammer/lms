import React, { Component } from "react"
import {connect} from "react-redux";
import ui from "../reducer/index"
import Login from "./login"
import Signup from "./signup"
function mapStateToProps(state) { 
    return{
        ui: state.ui
    }
 }

class Landing extends Component {

    render() {
        return (
            <div>
                <div className="landing-page">
                
                <div className="row bounceInLeft animated">
                    <div className=" col-sm-6">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                              
                                <div className="carousel-inner">
                                    <div className="item">
                                        <div className="container">
                                            <p className="text-lg"> Build skills. Work smarter</p>
                                            <p className="x-content"> Take your skills to the next level with courses on the most popular programming languages, developer tools, software practices and application development platforms. Measure your skills to know where you stand, and gain a deep understanding of how to build, deploy, secure and scale everything from web apps to mobile apps using C#, Java,</p>


                                            <p>
                                                <a href="/" className="btn btn-default start">Start a FREE 10-day trial</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="container">
                                            <p className="text-lg"> Build skills. Work smarter</p>
                                            <p className="x-content"> Take your skills to the next level with courses on the most popular programming languages, developer tools, software practices and application development platforms. Measure your skills to know where you stand, and gain a deep understanding of how to build, deploy, secure and scale everything from web apps to mobile apps using C#, Java,</p>


                                            <p>
                                                <a href="/" className="btn btn-default start">Start a FREE 10-day trial</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item active">
                                        <div className="container">
                                            <p className="text-lg"> Build skills. Work smarter</p>
                                            <p className="x-content"> Take your skills to the next level with courses on the most popular programming languages, developer tools, software practices and application development platforms. Measure your skills to know where you stand, and gain a deep understanding of how to build, deploy, secure and scale everything from web apps to mobile apps using C#, Java,</p>


                                            <p>
                                                <a href="/" className="btn btn-default start">Start a FREE 10-day trial</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            

                    </div>
                    <div className="col-sm-6 zero">
                            {this.props.ui.loginModal ? <Login /> : null}
                            {this.props.ui.signupModal ? <Signup /> : null}
                        
                    </div>
                </div>
            

                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Landing);