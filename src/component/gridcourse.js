import React, {Component} from "react";
import Sidebar from "./sidebar"
class Gridcourse extends Component{

    componentDidMount(){
        
    }
    render(){
        return(
            <div className="grid-course">
                <div className="container">
                    <p style={{fontSize:"1.4em"}}><b>Featured Learning Path</b></p>
                    
                    <div className="row">
                        <div className="col-sm-9 zero">
                            <div className="row">
                                <div className=" col-sm-6 zero">

                                    <img src="./images/demo1.jpg" width="100%" alt="img" />

                                </div>
                                <div className="col-sm-6">
                                    <div className="course-info">
                                        <small style={{ color: "#f05a28" }}><b>RECOMMENDED COURSE</b></small>
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

export default Gridcourse;