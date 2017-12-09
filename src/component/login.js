import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <div className="login-modal flipInY  animated">
                <div className="row  ">
                    <div className="    ">
                        <div className="box">
                            <p className="modal-header">Login</p>
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
                                    <p>Forgot your password? <a href="">click here</a></p>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block bg-orange">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default Login