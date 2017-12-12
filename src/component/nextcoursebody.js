import React, { Component } from "react";
import Sidebar from "./sidebar"
class Nextcoursebody extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="" style={{background:'#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 zero">
                            <div className="row">
                                <div className="col-sm-5">
                                    <h3>Course Name </h3>
                                    <p style={{ fontSize: "1em", textTransform: "capitalize" }}>ApplicationS Of Voice Telecommunication</p>
                                </div>
                                <div className="col-sm-4">
                                    <h3>City </h3>
                                    <p style={{ fontSize: "1em" }}>Ilorin</p>
                                </div>
                                <div className="col-sm-3">
                                    <h3>Date </h3>
                                    <p style={{ fontSize: "1em" }}>19 jan 2018</p>
                                </div>
                                <div className="col-sm-5">
                                    <h3>Instructor </h3>
                                    <p style={{ fontSize: "1em" }}>19 jan 2018</p>
                                </div>
                                <div className="col-sm-5">
                                    <h3>Price </h3>
                                    <p style={{ fontSize: "1em" }}>$4,403</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Recent Courses</b></p>
                                <div className="row box2">
                                    <div className="col-xs-2 zero">
                                        <img src="./images/blacklogo.jpg" width="100%" className=" " alt="img" />
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


                </div>
            </div >
        )
    }
}

export default Nextcoursebody;