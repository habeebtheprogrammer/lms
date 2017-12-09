import React, { Component } from 'react';
import Gridcourse from "./gridcourse"
class nextCourse extends Component {
    render() {
        return (
            <div className="next-course">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="item">
                            <div className="">
                                <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                                    <div className="col-sm-7 zero">
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                            <img src="./images/group.jpg" width="100%" alt="img" />
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>RECOMMENDED COURSE</b></small>
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
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                            <img src="./images/group.jpg" width="100%" alt="img" />
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>RECOMMENDED COURSE</b></small>
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
                                        <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                            <img src="./images/group.jpg" width="100%" alt="img" />
                                        </div>

                                    </div>
                                    <div className="col-sm-5" style={{ background: "#fff" }}>
                                        <div className="course-info">
                                            <small style={{ color: "#f05a28" }}><b>RECOMMENDED COURSE</b></small>
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
                    </div>

                </div>
             
                <Gridcourse />


            </div>
        );
    }
}

export default nextCourse;