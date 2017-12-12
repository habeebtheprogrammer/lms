import React, { Component } from 'react';
import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Addcourse from "./addcourse"
import Printing from "./printing"
import Hotel from "./hotel"
import Tranport from "./transport"
import Food from "./food"
import Signup from "./signup"
import Sidebar from "./sidebar"
import { addRecommendation, addFood, addHotel, addOthers, addTransport, addPrinting, addCourse, addFaq, addTodo } from "../actions/index"
import { bindActionCreators } from "redux"
function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addCourse: addCourse,
        addFaq: addFaq,
        addTodo: addTodo,
        addFood: addFood,
        addOthers: addOthers,
        addHotel: addHotel,
        addFood: addFood,
        addTransport: addTransport,
        addPrinting: addPrinting,
        addRecommendation: addRecommendation
    }, dispatch)
}

class Instructormain extends Component {


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
    addFood(e) {
        e.preventDefault();
        this.props.ui.addPrinting ? this.props.addPrinting() : null;
        this.props.ui.addTransport ? this.props.addTransport() : null;
        this.props.ui.addHotel ? this.props.addHotel() : null;
        this.props.ui.addOthers ? this.props.addOthers() : null;
        this.props.addFood();
    }
    addTransport(e) {
        e.preventDefault();
        this.props.ui.addFood ? this.props.addFood() : null;
        this.props.ui.addHotel ? this.props.addHotel() : null;
        this.props.ui.addPrinting ? this.props.addPrinting() : null;
        this.props.ui.addOthers ? this.props.addOthers() : null;
        this.props.addTransport();
    }
    addPrinting(e) {
        e.preventDefault();
        this.props.ui.addFood ? this.props.addFood() : null;
        this.props.ui.addTransport ? this.props.addTransport() : null;
        this.props.ui.addHotel ? this.props.addHotel() : null;
        this.props.ui.addOthers ? this.props.addOthers() : null;
        this.props.addPrinting();

    }
    addHotel(e) {
        e.preventDefault();
        this.props.ui.addFood ? this.props.addFood() : null;
        this.props.ui.addTransport ? this.props.addTransport() : null;
        this.props.ui.addPrinting ? this.props.addPrinting() : null;
        this.props.ui.addOthers ? this.props.addOthers() : null;
        this.props.addHotel();
    }
    addOthers(e) {
        e.preventDefault();
        this.props.ui.addFood ? this.props.addFood() : null;
        this.props.ui.addTransport ? this.props.addTransport() : null;
        this.props.ui.addHotel ? this.props.addHotel() : null;
        this.props.ui.addPrinting ? this.props.addPrinting() : null;
        this.props.addOthers();
    }
    saveRec() {

    }
    typing() {

    }
 
    render() {

        return (
            <div className="next-course" style={{ background: "#fff", paddingBottom: "30px" }}>
                <div style={{ background: "url('./images/group.jpg')", backgroundSize: "cover", minHeight: "300px" }}>
                </div>
                <div>
                    <center>
                        <img src="./images/user.png" width="120px" className="rounded profile-img" alt="Image" />
                    </center>
                </div>
                {this.props.ui.addPrinting ? <Printing /> : null}
                {this.props.ui.addFood ? <Food /> : null}
                {this.props.ui.addHotel ? <Hotel /> : null}
                {this.props.ui.addTransport ? <Tranport /> : null}
             

                <div className="container">
                   
                    <div className="row">

                        <div className=" col-sm-9 ">
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
                        <div className="col-sm-3">
                            <div className="sidebar">
                                <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Course Details</b></p>
                                <div className="row box2">
                                    <p ><b>Course Name : </b><b>ApplicationS of Voice Telecommunication</b></p>
                                    <small style={{ fontSize: "1em" }}></small>
                                    <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date : </b> 32 jan 3014</p>
                                    <p> <b> <i className="fa fa-user fa-1x"></i> Instructor : </b> White Suite Hacking</p>
                                    <p> <b>  <i className="fa fa-map-marker fa-1x"></i> Location : </b> Los Angeles</p>
                                    <p> <b>  <i className="fa fa-money fa-1x"></i> Price : </b> $4,4334</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-sm-12">
                            <div className="row">
                                <p style={{ fontSize: "1.5em", marginTop: "20px" }}><b>Course Expenses</b>
                                </p>
                                <div className="row">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Amount</th>
                                                <th>Type</th>
                                                <th>Updated Ticket</th>
                                                <th> Factura</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                        <div className=" col-sm-12 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Student List</b></p>

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Owes</th>
                                        <th>Paid</th>
                                        <th>Form Of Payment(QUITAR)</th>
                                        <th>Assistance</th>
                                        <th>Comment</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sample Name</td>
                                        <td>None</td>
                                        <td>True</td>
                                        <td> Credit Card</td>
                                        <td> False</td>
                                        <td>Sample comment</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>


                    </div>

                    <div className="grid-course">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 zero">
                                    <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Manage Expenses </b></p>

                                    <div className="row">

                                        <div className=" col-sm-4 ">
                                            <a href="" onClick={this.addPrinting.bind(this)}>
                                                <div className="dashboard-box" >

                                                    <i className="fa fa-plus fa-spin fa-3x"></i>
                                                    <p>Add Printing</p>

                                                </div>
                                            </a>
                                        </div>
                                        <div className=" col-sm-4 ">
                                            <a href="" onClick={this.addFood.bind(this)}>
                                                <div className="dashboard-box" >
                                                    <i className="fa fa-spoon fa-spin fa-3x"></i>
                                                    <p>Add Food</p>

                                                </div>
                                            </a>
                                        </div>
                                        <div className=" col-sm-4 ">
                                            <a href="" onClick={this.addHotel.bind(this)}>
                                                <div className="dashboard-box" >

                                                    <i className="fa fa-home fa-spin fa-3x"></i>
                                                    <p>Add Hotel</p>

                                                </div>
                                            </a>
                                        </div>
                                        <div className=" col-sm-4 ">
                                            <a href="" onClick={this.addTransport.bind(this)}>
                                                <div className="dashboard-box" >

                                                    <i className="fa fa-bus fa-spin fa-3x"></i>
                                                    <p>Add Tranport</p>

                                                </div>
                                            </a>
                                        </div>
                                        <div className=" col-sm-8 ">
                                            <a href="" onClick={this.addOthers.bind(this)}>
                                                <div className="dashboard-box" >

                                                    <i className="fa fa-vcard-o fa-spin fa-3x"></i>
                                                    <p>Add Others</p>

                                                </div>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                      
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Instructormain);