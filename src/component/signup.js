import React, { Component } from "react";

class Signup extends Component {

    render() {
        return (
            <div className="signup-modal flipInY  animated">
                <div className="row  ">
                    <div className="    ">
                        <div className="box">
                            
                            <div role="tabpanel">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a href="#student" aria-controls="home" role="tab" data-toggle="tab" style={{background:"none",border:"none"}}>Student</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#general" aria-controls="tab" role="tab" data-toggle="tab" style={{ background: "none", border: "none" }}>General</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#company" aria-controls="tab" role="tab" data-toggle="tab" style={{ background: "none", border: "none" }}>company</a>
                                    </li>
                                </ul>
                            
                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="student">
                                        <form action="" method="POST" role="form">
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                                </center>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="" placeholder="password" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="" placeholder="password" />
                                            </div>
                                            <div className="form-group">
                                                <p>Forgot your password? <a href="">click here</a></p>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block bg-orange">Submit</button>
                                        </form>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="general">
                                        <form action="" method="POST" role="form">
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                                </center>
                                            </div>
                                            <div className="form-group">
                                                <input type="number" className="form-control" id="" placeholder="Nombre" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="" placeholder="Coreo" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="" placeholder="Contrasena" />
                                            </div>
                                            <div className="form-group">
                                                <p>Forgot your password? <a href="">click here</a></p>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block bg-orange">Submit</button>
                                        </form>
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="company">
                                        <form action="" method="POST" role="form">
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                                </center>
                                            </div>
                                            <div className="form-group">
                                                <input type="number" className="form-control" id="" placeholder="Nombre" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="" placeholder="Coreo" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="" placeholder="Contrasena" />
                                            </div>
                                            <div className="form-group">
                                                <p>Forgot your password? <a href="">click here</a></p>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block bg-orange">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default Signup