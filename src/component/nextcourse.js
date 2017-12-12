import React, { Component } from 'react';
import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Login from "./login"
import Signup from "./signup"

function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
class nextCourse extends Component {
    render() {
        return (
            <div className="next-course">
                {this.props.ui.loginModal ? <Login /> : null}
                {this.props.ui.signupModal ? <Signup /> : null}
                <div className="">
                    <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                        <div className="col-sm-7 zero">
                            <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                <img src="./images/tcs8.jpg" width="100%" alt="img" />
                            </div>

                        </div>
                        <div className="col-sm-5" style={{ background: "#fff" }}>
                            <div className="course-info">
                                <small style={{ color: "#f05a28" }}><b>NEXT COURSE</b></small>
                                <p className="course-title">ApplicationS of Voice Telecommunication</p>
                                <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                    <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                </p>
                                <a className="btn btn-danger btn-custom" href="#" role="button"> Continue </a>
                                <div className="course-extra">

                                    <div className="row">
                                        <div className=" col-sm-4">
                                            <img src="./images/blacklogo.jpg" className="rounded" width="30px" alt="img" /><small><b> White Suite Hacking</b> </small>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <Nextcoursebody />
                {/* <Gridcourse /> */}


            </div>
        );
    }
}

export default connect(mapStateToProps)(nextCourse);