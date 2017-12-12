import React, { Component } from 'react';
import Nextcoursebody from "./nextcoursebody";
import { connect } from "react-redux";
import ui from "../reducer/index"
import Addcourse from "./addcourse"
import Signup from "./signup"
import Sidebar from "./sidebar"
import { addPublication } from "../actions/index"
import { bindActionCreators } from "redux"
function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPublication: addPublication,

    }, dispatch)
}

class Publication extends Component {


    addPublication(e) {
        e.preventDefault();
        this.props.addPublication();
    }

    render() {

        return (
            <div className="next-course" style={{ background: "#fff", paddingBottom: "30px" }}>
                {this.props.ui.addCourse ? <Addcourse /> : null}
                <div style={{ background: "url('./images/blacklogo.jpg')", backgroundSize: "cover", minHeight: "300px" }}>
                </div>
                <div>
                    <center>
                        <img src="./images/user.png" width="120px" className="rounded profile-img" alt="Image" />
                    </center>
                </div>
                <div className="container">
                    <div className="row">
                        <div className=" col-sm-6 publication">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>New Publication </b></p>
                            <div>
                                <div className="form-group fadeIn animated">


                                    <input type="text" name="title" className="form-control" id="" placeholder="Title" />
                                </div>
                                <div className="form-group fadeIn animated">
                                    <input type="text" name="title" className="form-control" id="" placeholder="Subtitl" />
                                </div>
                                <div className="form-group fadeIn animated">
                                    <textarea type="textarea" name="recommendation" className="form-control" id="" placeholder="Input field" />
                                </div>
                                <div className="form-group fadeIn animated">
                                    <input type="text" name="title" className="form-control" id="" placeholder="Subtitle" />
                                </div>
                                <div className="form-group adeIn animated">
                                    <label className="form-label">Image</label>
                                    <input type="file" name="title" style={{ border: "0px" }} />
                                </div>
                                <button type="submit" className="btn btn-default btn-block btn-sm"> Save </button>
                            </div>
                        </div>
                        
                        <div className=" col-sm-6 ">
                            <p style={{ fontSize: "1.4em", marginTop: "20px" }}><b>New Publication </b></p>
                        </div>

                        <div className=" col-sm-6 ">
                            <div className="course-info" style={{ padding: "0px 0px 20px" }}>
                                <p style={{ fontSize: '1.6em' }}><small><b>Course Title : </b></small>ApplicationS of Voice Telecommunication</p>
                                <small style={{ fontSize: "1em" }}></small>
                                <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date of Publication: </b> 32 jan 3014</p>
                                <p> <b>  <i className="fa fa-map-marker fa-1x"></i> URL : </b> http://localhost:3000/news</p>
                                <p> <b>  <i className="fa fa-money fa-1x"></i> Status : </b> approved</p>

                            </div>


                        </div>

                        <div className=" col-sm-6 ">
                            <div className="course-info" style={{ padding: "0px 0px 20px" }}>
                                <p style={{ fontSize: '1.6em' }}><small><b>Course Title : </b></small>ApplicationS of Voice Telecommunication</p>
                                <small style={{ fontSize: "1em" }}></small>
                                <p> <b> <i className="fa fa-calendar-times-o fa-1x"> </i> Date of Publication: </b> 32 jan 3014</p>
                                <p> <b>  <i className="fa fa-map-marker fa-1x"></i> URL : </b> http://localhost:3000/news</p>
                                <p> <b>  <i className="fa fa-money fa-1x"></i> Status : </b> approved</p>
                            </div>
                        </div>



                    </div>


                </div>



            </div >
        );
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Publication);