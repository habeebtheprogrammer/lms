import React, {Component} from "react";
import Sidebar from "./sidebar"
class Gridcourse extends Component{

    componentDidMount(){
        
    }
    render(){
        return(
            <div className="grid-course">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 zero">
                                    <div className="course-info">
                                        <p className="course-title"> whats the best way to let go of good employers</p>
                                        <p className="course-desc"> We asked our best rangers to show us the best way to go in dealing with employers out there
                                        <br /><small style={{ fontSize: "0.7em" }}> - 32 jan 3014</small>
                                        </p>
                                        <a className="btn btn-danger btn-custom" href="#" role="button">Keep Reading</a>


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