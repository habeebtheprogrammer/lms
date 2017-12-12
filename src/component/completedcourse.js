import React, { Component } from "react";
import Sidebar from "./sidebar"
class Completedcourse extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="grid-course" style={{ marginTop: "20px", borderTop: "2px solid #ddd" }}>


                <div className="container">


                    <div className="row">
                        <div className=" col-sm-12 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>REGISTERED COURSE</b></p>

                        </div>
                        <div className="col-sm-9">
                            <div className="row box">
                                <div className=" col-sm-6 zero">
                                    <div style={{ background: "url('./images/tcs7.jpg')", height: "200px", backgroundSize: "cover" }}>
                                    </div>

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info" style={{ padding: "0px 0px 20px" }}>
                                        <p style={{ fontSize: '1.6em' }}><small><b>Name : </b></small> Introduction To Networking</p>
                                        <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date/Hour : </b> kl </p>
                                        <p> <b>  <i className="fa fa-map-marker fa-1x"></i> Location : </b> Los angels</p>
                                        <p> <b>  <i className="fa fa-calendar-times-o fa-1x"></i> Downloads : </b> Not Available</p>
                                        <p> <b>  <i className="fa fa-calendar-times-o fa-1x"></i>Instructor : </b> Kelvicv klein</p>
                                        <p> <b>  <i className="fa fa-vcard-o fa-1x"></i>F.A.Q : </b> Not Available</p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Completed Courses</b></p>
                                <div className="row box2">
                                    <div className="col-xs-2 zero">
                                        <img src="./images/advertise.png" width="30px" className="rounded" alt="img" />
                                    </div>
                                    <div className="col-xs-10">
                                        <small>12 oct 2015</small><br />
                                        <a href="/" style={{ color: "#222" }}>
                                            <small><b>An open letter to every employer</b></small><br />
                                            <small style={{ color: "#aaa" }}>Instructor</small>
                                        </a>
                                    </div>
                                </div>

                                <div className="row box2">
                                    <div className="col-xs-2 zero">
                                        <img src="./images/advertise.png" width="30px" className="rounded" alt="img" />
                                    </div>
                                    <div className="col-xs-10">
                                        <small>12 oct 2015</small><br />
                                        <a href="/" style={{ color: "#222" }}>
                                            <small><b>An open letter to every employer</b></small><br />
                                            <small style={{ color: "#aaa" }}>Instructor</small>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">


                        <div className=" col-sm-12 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>CERTIFICATION</b></p>

                        </div>


                        <div className="col-sm-9 ">
                            <div className="row box">
                                <div className=" col-sm-6 zero">
                                    <div style={{ background: "url('./images/tcs5.jpg')", height: "200px", backgroundSize: "cover" }}>
                                    </div>

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>completed course</b></small>
                                        <p className="course-title"> Telecommunication And Networks</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Completedcourse;