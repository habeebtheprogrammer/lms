import React, { Component } from "react";
import Sidebar from "./sidebar"
import axios from "axios";
import {host} from "../config"
class Gridblog extends Component {
    constructor(){
        super();
        this.state ={

        }
    }
    componentWillMount() {
        axios.get(`${host}/api/publications`).then((res) => {
            if (res.data) {
               console.log(res.data);
                var obj = res.data[0]
                this.setState({ ...obj })
            }
        })

    }
    render() {
        return (
        
            <div className="grid-course">
                <div className="container">
                    <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>All Publications</b></p>

                    <div className="row">
                        <div className="col-sm-9 zero">
                            <div className="row box">
                                <div className=" col-sm-6 zero">

                                    <img src="./images/tcs7.jpg" width="100%" alt="img" />

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>RECOMMENDED FOR YOU</b></small>
                                        <p className="course-title"> whats the best way to let go of good employers</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


                                    </div>
                                </div>
                            </div>
                            <div className="row box">
                                <div className=" col-sm-6 zero">

                                    <img src="./images/tcs8.jpg" width="100%" alt="img" />

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>RECOMMENDED FOR YOU</b></small>
                                        <p className="course-title"> whats the best way to let go of good employers</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


                                    </div>
                                </div>
                            </div>
                            <div className="row box">
                                <div className=" col-sm-6 zero">

                                    <img src="./images/tcs7.jpg" width="100%" alt="img" />

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>RECOMMENDED FOR YOU</b></small>
                                        <p className="course-title"> whats the best way to let go of good employers</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


                                    </div>
                                </div>
                            </div>
                            <div className="row box">
                                <div className=" col-sm-6 zero">

                                    <img src="./images/tcs8.jpg" width="100%" alt="img" />

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>RECOMMENDED FOR YOU</b></small>
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

export default Gridblog;