import React, { Component } from "react";

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="text-area">
                <center>
                        <p className="text-lg"> Lets create the future together</p>
                        <p> 
                        <a className="btn btn-default" href="#" role="button">Start a 10 days free trial    </a>
                        </p>
                </center>
                </div>
                <div className="row">
                    <div className=" col-sm-2">
                        <p> 
                        <i className="fa fa-paw"></i><span>About</span>
                         </p>
                    </div>
                    <div className=" col-sm-3">
                        <p><b>SOLUTIONS</b> </p>
                    </div>
                    <div className=" col-sm-3">
                        <p><b>SUPPORT</b> </p>
                        
                    </div>
                    <div className=" col-sm-3">
                        <p><b>COMPANY</b> </p>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;