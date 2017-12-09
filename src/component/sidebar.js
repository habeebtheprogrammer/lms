import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <p style={{ fontSize: "1.4em", textTransform: "uppercase" }}><b>On the rise</b></p><hr />
                <div className="row">
                    <div className="col-xs-2 zero">
                        <img src="./images/advertise.png" width="30px" className="rounded" alt="img" />
                    </div>
                    <div className="col-xs-10">
                        <small>12 oct 2015</small><br />
                        <a href="/" style={{color:"#222"}}>
                        <small><b>An open letter to every employer</b></small><br />
                        <small style={{color:"#aaa"}}>Instructor</small>
                        </a>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Sidebar;