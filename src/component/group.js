import React, { Component } from 'react';
import Sidebar from "./sidebar";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Login from "./login"
import Signup from "./signup"

function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
class Group extends Component {
    render() {
        return (
            <div className="next-course">
                {this.props.ui.loginModal ? <Login /> : null}
                {this.props.ui.signupModal ? <Signup /> : null}
                <div className="">
                    <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                        <div className="col-sm-12 zero">
                            <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                <img src="./images/wsh.png" width="100%" alt="img" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="grid-course">
                    <div className="container">
                        <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Featured Learning Path</b></p>

                        <div className="row">
                            <div className="col-sm-9 zero">
                                <div className="row box">
                                    <div className=" col-sm-6 ">

                                        <img src="./images/stdfb.png" width="100%" alt="img" />

                                    </div>
                                    <div className="col-sm-6">
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>RECOMMENDED LINK</b></small>
                                            <p className="course-title"> Student Facebook Group Link</p>
                                            <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                            </p>
                                            <a className="btn btn-danger btn-custom" href="#" role="button">join</a>


                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-sm-6 ">

                                        <img src="./images/fblink.jpg" width="100%" alt="img" />

                                    </div>
                                    <div className="col-sm-6">
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>RECOMMENDED Link</b></small>
                                            <p className="course-title">General Facebook Group Link</p>
                                            <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                            </p>
                                            <a className="btn btn-danger btn-custom" href="#" role="button">join</a>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <Sidebar />
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        );
    }
}

export default connect(mapStateToProps)(Group);