import React, { Component } from 'react';
import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
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

class Conference extends Component {


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
                {this.props.ui.addPrinting ? <Printing /> : null}
                {this.props.ui.addFood ? <Food /> : null}
                {this.props.ui.addHotel ? <Hotel /> : null}
                {this.props.ui.addTransport ? <Tranport /> : null}
   
                <div style={{ background: "url('./images/wsh.png')", backgroundSize: "cover", minHeight: "300px" }}>
                </div>
                <div>
                    <center>
                        <img src="./images/user.png" width="120px" className="rounded profile-img" alt="Image" />
                    </center>
                </div>
                <div className="grid-course">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 zero">
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
                            <div className="col-sm-3">
                                <div className="sidebar">
                                    <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Conference Details</b></p>
                                    <div className="row box2">
                                        <div className="col-xs-2 zero">
                                            <img src="./images/advertise.png" width="30px" className="rounded" alt="img" />
                                        </div>
                                        <div className="col-xs-10">
                                            <small>12 oct 2015</small><br />
                                            <a href="/" style={{ color: "#222" }}>
                                                <small><b>An open letter to every employer</b></small><br />
                                                <small style={{ color: "#aaa" }}> 
                                                <i className="fa fa-map-marker"></i><span> Los Angeles </span></small>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container">
                    <p style={{ fontSize: "1.5em", marginTop: "20px" }}><b>Conference Expenses</b>
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
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Conference);