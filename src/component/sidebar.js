import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <p style={{ fontSize: "1.4em", padding: "20px 0px 0px", textTransform: "uppercase" }}><b>Recent Courses</b></p>
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
        );
    }
}

export default Sidebar;