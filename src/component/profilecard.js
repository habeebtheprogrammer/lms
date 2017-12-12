import React, { Component } from 'react';

import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Addcourse from "./addcourse"
import axios from "axios"
import {host} from "../config"

class Profilecard extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            emailAddress: "",
            createdAt: "",
            noOfCoursesTaking: "",
            noOfRegCourses: ""




        }
    }
    componentWillMount() {
        axios.get(`${host}/api/userprofile?email=habibmail31@gmail.com`).then((res) => {
            if(res.data){
                var obj = res.data
                this.setState({...obj})
            }
        })

    }
    render() {
        console.log(this.state)
        return (
            <div style={{ background: "#fff" }}>
                <div style={{ background: "url('./images/Rubber Stamp MockUp.jpg')", backgroundSize: "cover", minHeight: "300px" }}>
                </div>
                <div>
                    <center>
                        <img src="./images/user.png" width="120px" className="rounded profile-img" alt="Image" />
                    </center>
                </div>
                <div >
                    <div className="container" >
                        <div className="row">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>Profile Information </b></p>

                            <div className="col-sm-4 zero">
                                <div className="course-info" style={{ padding: "0px 0px 20px" }}>
                                    <p style={{ fontSize: '1.6em' }}><small><b>Name : </b></small>{this.state.name}</p>
                                    <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Registered at : </b> {this.state.createdAt} </p>
                                    <p> <b>  <i className="fa fa-calendar-times-o fa-1x"></i> Numbers Of Reg Courses : </b> {this.state.noOfRegCourses}</p>


                                </div>
                            </div>
                            <div className="col-sm-4 zero">
                                <div className="course-info" >
                                    <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Email Address : </b> {this.state.emailAddress}</p>
                                    <p> <b>  <i className="fa fa-vcard"></i> Tiempo Trabajando en WS : </b></p>
                                    <p> <b>  <i className="fa fa-calendar-times-o fa-1x"></i> Priviledge Level: </b> {this.state.clearanceLevel === "generalUser"? "General User" : null}</p>
 
                                </div>
                            </div>
                            <div className="col-sm-4 zero" >
                                <div className="course-info" >
                                    <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Phone Number : </b> Not Available</p>
                                    <p> <b>  <i className="fa fa-map-marker"></i> Location : Not Availble</b></p>
                                    <p> <b>  <i className="fa fa-star"></i> Performance Rating : </b>
                                        Not Available
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );

    }
}

export default Profilecard;
