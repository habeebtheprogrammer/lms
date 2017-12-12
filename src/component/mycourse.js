import React, { Component } from 'react';
import Completedcourse from "./completedcourse";
import Certification from "./certification";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Login from "./login"
import Signup from "./signup"

function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
class Mycourse extends Component {
    render() {
        return (
            <div className="next-course" >
                {this.props.ui.loginModal ? <Login /> : null}
                {this.props.ui.signupModal ? <Signup /> : null}

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="item">
                            <div className="">
                                <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                                    <div className="col-sm-7 zero">
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden", background: "url('./images/tcs4.jpg')", backgroundSize: "cover" }}>
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>REGISTERED COURSES</b></small>
                                            <p className="course-title"> whats the best way to let go of good employers</p>
                                            <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                            <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                            </p>
                                            <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>
                                            <div className="course-extra">

                                                <div className="row">
                                                    <div className=" col-sm-4">
                                                        <img src="./images/logo.jpg" className="rounded" width="30px" alt="img" /><small><b> Fuad Habeeb</b> </small>
                                                    </div>
                                                    <div className=" col-sm-4">
                                                        <img src="./images/make-money.png" className="rounded" width="30px" alt="img" /><small><b> $9,423.00    </b> </small>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="">
                                <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                                    <div className="col-sm-7 zero">
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden", background: "url('./images/tcs.jpg')", backgroundSize: "cover"}}>
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>REGISTERED COURSES</b></small>
                                            <p className="course-title"> whats the best way to let go of good employers</p>
                                            <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                            <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                            </p>
                                            <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>
                                            <div className="course-extra">

                                                <div className="row">
                                                    <div className=" col-sm-4">
                                                        <img src="./images/logo.jpg" className="rounded" width="30px" alt="img" /><small><b> Fuad Habeeb</b> </small>
                                                    </div>
                                                    <div className=" col-sm-4">
                                                        <img src="./images/make-money.png" className="rounded" width="30px" alt="img" /><small><b> $9,423.00    </b> </small>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item active">
                            <div className="">
                                <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                                    <div className="col-sm-7 zero">
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden", background:"url('./images/LOGOTIPO_WHITESUIT-BLANCO.jpg')",backgroundSize:"cover"}}>
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>REGISTERED COURSES</b></small>
                                            <p className="course-title"> whats the best way to let go of good employers</p>
                                            <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                            <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                            </p>
                                            <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>
                                            <div className="course-extra">

                                                <div className="row">
                                                    <div className=" col-sm-4">
                                                        <img src="./images/logo.jpg" className="rounded" width="30px" alt="img" /><small><b> Fuad Habeeb</b> </small>
                                                    </div>
                                                    <div className=" col-sm-4">
                                                        <img src="./images/make-money.png" className="rounded" width="30px" alt="img" /><small><b> $9,423.00    </b> </small>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left"></span></a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right"></span></a>
                    </div>

                </div>
                <div style={{padding:"0px 20px"}}>
                
                <Completedcourse /> 
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(Mycourse);