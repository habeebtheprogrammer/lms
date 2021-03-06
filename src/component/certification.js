import React, { Component } from "react";
import Sidebar from "./sidebar"
class Certification extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="grid-course">
                <div className="container">
                    <p style={{ fontSize: "1.4em" }}><b>CERTIFICATION</b></p>

                    <div className="row">
                        <div className="col-sm-9 zero">
                            <div className="row box">
                                <div className=" col-sm-6 zero">
                                    <div style={{ background: "url('./images/tcs8.jpg')", height: "200px", backgroundSize: "cover" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>completed course</b></small>
                                        <p className="course-title"> Digital Skill Acquisition</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className=" col-sm-6 zero">
                                    <div style={{ background: "url('./images/tcs4.jpg')", height: "200px", backgroundSize: "cover" }}>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>Certification</b></small>
                                        <p className="course-title"> whats the best way to let go of good employers</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


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
        )
    }
}

export default Certification;