import React, { Component } from 'react';
import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
import auth from "../reducer/index"
import Addcourse from "./addcourse"
import Signup from "./signup"
import Sidebar from "./sidebar"
import { addRecommendation, addFood, addHotel, addOthers, addTransport, addPrinting, addCourse, addFaq, addTodo } from "../actions/index"
import { bindActionCreators } from "redux"
function mapStateToProps(state) {
    return {
        ui: state.ui,
        auth: state.auth
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addCourse: addCourse,
        addFaq: addFaq,
        addTodo: addTodo,
        addFood: addFood,
        addOthers: addOthers,
        addFood: addFood,
        addTransport: addTransport,
        addPrinting: addPrinting,
        addRecommendation: addRecommendation
    }, dispatch)
}

class Adminmain extends Component {

    componentWillMount() {
        if(this.props.auth.user.clearanceLevel !== "admin" ) window.location.assign('/admin/login');
    }
    
    
    

    addCourseDropdown(e) {
        e.preventDefault();
        this.props.addCourse();
    }
    addRecommendationDropdown() {
        this.props.addRecommendation();
    }
    addFaq() {
        this.props.addFaq();
    }
    addTodo() {
        this.props.addTodo();
    }
    addFood() {
        this.props.addFood();
    }
    addTransport() {
        this.props.addTransport();
    }
    addPrinting() {
        this.props.addPrinting();
    }
    addHotel() {
        this.props.addHotel();
    }
    addOthers() {
        this.props.addOthers();
    }
    saveRec() {

    }
    typing() {

    }
    render() {

        return (
            <div className="next-course" style={{ background: "#fff", paddingBottom: "30px" }}>
                {this.props.ui.addCourse ? <Addcourse /> : null}
                {/* <div className="">
                    <div className="row" style={{ borderBottom: "2px solid #ddd" }}>
                        <div className="col-sm-7 zero">
                            <div className="course-img" style={{ height: "380px", overflow: "hidden" }}>
                                <img src="./images/wsh.png" width="100%" alt="img" />
                            </div>

                        </div>
                        <div className="col-sm-5" style={{ background: "#fff" }}>
                            <div className="course-info">
                                <small style={{ color: "#f05a28" }}><b>COURSE INFO</b></small>
                                <p className="course-title"><small>Course Name : </small>ApplicationS of Voice Telecommunication</p>
                                <small style={{ fontSize: "1em" }}></small>
                                <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date : </b> 32 jan 3014</p>
                                <p> <b> <i className="fa fa-user fa-1x"></i> Instructor : </b> White Suite Hacking</p>
                                <p> <b>  <i className="fa fa-map-marker fa-1x"></i> Location : </b> Los Angeles</p>
                                <p> <b>  <i className="fa fa-money fa-1x"></i> Price : </b> $4,4334</p>
                                <div className="course-extra">


                                </div>

                            </div>

                        </div>
                    </div>
                </div> */}


                <div className="grid-course">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 zero">
                                <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Preparation For Course</b></p>

                                <div className="row">

                                    <div className=" col-sm-3 ">
                                        <a href="" onClick={this.addCourseDropdown.bind(this)}>
                                            <div className="dashboard-box" >

                                                <i className="fa fa-plus fa-3x"></i>
                                                <p>Add Course</p>

                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-sm-3 ">
                                        <a href="">
                                            <div className="dashboard-box" >

                                                <i className="fa fa-download fa-3x"></i>
                                                <p>Upload videos</p>

                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-sm-3 ">
                                        <a href="">
                                            <div className="dashboard-box" >

                                                <i className="fa fa-download fa-3x"></i>
                                                <p>Upload Files</p>

                                            </div>
                                        </a>
                                    </div>
                                    <div className=" col-sm-3 ">
                                        <a href="">
                                            <div className="dashboard-box" >

                                                <i className="fa fa-download fa-3x"></i>
                                                <p>New Prep Page</p>

                                            </div>
                                        </a>
                                    </div>
                                </div>


                            </div>
                            <div className="col-sm-3">
                                <div className="sidebar">
                                    <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Preparation Name</b></p>
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
                    </div>

                </div>
                <div className="container">
                    <div className="row">

                        <div className=" col-sm-6 ">
                            <div className="course-info">

                                <small style={{ color: "#f05a28" }}><b>COURSE INFO</b></small>
                                <p style={{ fontSize: '1.6em' }}><small><b>Course Name : </b></small>ApplicationS of Voice Telecommunication</p>
                                <small style={{ fontSize: "1em" }}></small>
                                <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date : </b> 32 jan 3014</p>
                                <p> <b> <i className="fa fa-user fa-1x"></i> Instructor : </b> White Suite Hacking</p>
                                <p> <b>  <i className="fa fa-map-marker fa-1x"></i> Location : </b> Los Angeles</p>
                                <p> <b>  <i className="fa fa-money fa-1x"></i> Price : </b> $4,4334</p>

                            </div>
                        </div>

                        <div className=" col-sm-6 ">
                            <div className="course-info">
                                <small style={{ color: "#f05a28" }}><b>COURSE INFO</b></small>
                                <p style={{ fontSize: '1.6em' }}><small><b>Course Name : </b></small>ApplicationS of Voice Telecommunication</p>
                                <small style={{ fontSize: "1em" }}></small>
                                <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date : </b> 32 jan 3014</p>
                                <p> <b> <i className="fa fa-user fa-1x"></i> Instructor : </b> White Suite Hacking</p>
                                <p> <b>  <i className="fa fa-map-marker fa-1x"></i> Location : </b> Los Angeles</p>
                                <p> <b>  <i className="fa fa-money fa-1x"></i> Price : </b> $4,4334</p>

                            </div>
                        </div>
                        <div className=" col-sm-12 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Recommendation </b>
                                <button type="button" onClick={this.addRecommendationDropdown.bind(this)} className="btn rounded btn-xs btn-default">
                                    <i className="fa fa-plus"></i>
                                </button> </p>
                            {this.props.ui.addRecommendation ?
                                <div>
                                    <div className="form-group fadeIn animated">
                                        <textarea type="textarea" onChange={this.typing.bind(this)} name="recommendation" className="form-control" id="" placeholder="Input field" />
                                    </div>
                                    <button type="submit" onClick={this.saveRec.bind(this)} className="btn btn-default btn-xs"> Save </button>
                                </div>
                                : null}
                            fuga cum autem, quas eius ut veniam nemo repellat! Eos, rem similique reprehenderit illo doloribus explicabo iste labore possimus!
                        </div>
                        <div className=" col-sm-6 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>F.A.Q  </b>
                                <button onClick={this.addFaq.bind(this)} type="button" className="btn rounded btn-xs btn-default">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </p>
                            {this.props.ui.addFaq ?
                                <div>
                                    <div className="form-group fadeIn animated">
                                        <textarea type="textarea" onChange={this.typing.bind(this)} name="recommendation" className="form-control" id="" placeholder="Input field" />
                                    </div>
                                    <button type="submit" onClick={this.saveRec.bind(this)} className="btn btn-default btn-xs"> Save </button>
                                </div>
                                : null}
                            fuga cum autem, quas eius ut veniam nemo repellat! Eos, rem similique reprehenderit illo doloribus explicabo iste labore possimus!
                        </div>
                        <div className=" col-sm-6 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Things To Do Before The Course </b>
                                <button type="button" onClick={this.addTodo.bind(this)} className="btn rounded btn-xs btn-default">
                                    <i className="fa fa-plus"></i>
                                </button></p>

                            <div className="row">
                                {this.props.ui.addTodo ?
                                    <div>
                                        <div className="form-group fadeIn animated">
                                            <textarea type="textarea" onChange={this.typing.bind(this)} name="recommendation" className="form-control" id="" placeholder="Input field" />
                                        </div>
                                        <button type="submit" onClick={this.saveRec.bind(this)} className="btn btn-default btn-xs"> Save </button>
                                    </div>
                                    : null}
                                <div className="col-xs-1 zero">

                                    <div className="form-group">
                                        <input type="checkbox" name="" class="form-control" value="" />
                                    </div>

                                </div>
                                <div className="col-xs-10">
                                    fuga cum autem, quas eius ut veniam nemo repellat! Eos, rem similique reprehenderit illo doloribus explicabo iste labore possimus!
                                </div>
                                <div className="col-xs-1">
                                    <a href=""> <i className="fa fa-download fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-6 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Expenses </b>
                                <button type="button" onClick={this.addTodo.bind(this)} className="btn rounded btn-xs btn-default">
                                    <i className="fa fa-plus"></i>
                                </button></p>

                            <div className="row">
                                {this.props.ui.addTodo ?
                                    <div>
                                        <div className="form-group fadeIn animated">
                                            <textarea type="textarea" onChange={this.typing.bind(this)} name="recommendation" className="form-control" id="" placeholder="Input field" />
                                        </div>
                                        <button type="submit" onClick={this.saveRec.bind(this)} className="btn btn-default btn-xs"> Save </button>
                                    </div>
                                    : null}
                                <div className="col-xs-1 zero">

                                    <div className="form-group">
                                        <input type="checkbox" name="" class="form-control" value="" />
                                    </div>

                                </div>
                                <div className="col-xs-10">
                                    fuga cum autem, quas eius ut veniam nemo repellat! Eos, rem similique reprehenderit illo doloribus explicabo iste labore possimus!
                                </div>
                                <div className="col-xs-1">
                                    <a href=""> <i className="fa fa-download fa-2x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Student List</b></p>

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Owes</th>
                                        <th>Paid</th>
                                        <th>Form Of Payment(QUITAR)</th>
                                        <th>Assistance</th>
                                        <th>Notes</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sample Name</td>
                                        <td>kay@gmail.com</td>
                                        <td>0.00</td>
                                        <td>0.00</td>
                                        <td> Credit Card</td>
                                        <td> False</td>
                                        <td>Sample comment</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                    </div>


                </div>



            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Adminmain);