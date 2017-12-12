import React, { Component } from "react";
import axios from "axios";
import { host } from "../config"
import classnames from "classnames";

import { connect } from "react-redux";
import { loginModal, signupModal } from "../actions/index";
import { ui} from "../reducer/index";
import { bindActionCreators } from "redux"
function mapStateToProps(state) {
    return {
        ui: state.ui
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loginModal: loginModal,
        signupModal: signupModal
    }, dispatch)
}
class Signup extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            code: "",
            error: "",
            isLoading: false
        }
    }

    
    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        this.setState({ isLoading: true });
        setTimeout(function () {
            axios.post(`${host}/api/usersignin`, this.state).then((success) => {
                this.setState({ error: success.data, isLoading: false })
                this.props.ui.signupModal ? this.props.signupModal() : null
                { this.state.error.success ? this.props.loginModal() : null }
                console.log(this.props)
            });
        }.bind(this), 3000);
    }

    render() {
        console.log(this.state)
        return (
            <div className="signup-modal flipInY  animated">
                <div className="row  ">
                    <div className="    ">
                        <div className="box">

                            <div role="tabpanel">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a href="#general" aria-controls="tab" role="tab" data-toggle="tab" style={{ background: "none", border: "none" }}>General</a>
                                    </li>
                                    <li role="presentation" >
                                        <a href="#student" aria-controls="home" role="tab" data-toggle="tab" style={{ background: "none", border: "none" }}>Student</a>
                                    </li>

                                    <li role="presentation">
                                        <a href="#company" aria-controls="tab" role="tab" data-toggle="tab" style={{ background: "none", border: "none" }}>company</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="general">
                                        <form action="" method="POST" role="form" onSubmit={this.submit.bind(this)}>
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    {this.state.error.success ?
                                                        
                                                        <i className="fa fa-check-circle fa-5x fadeIn anmiated" style={{opacity:1}}></i>
                                                        
                                                        : <img src="./images/user.png" className="rounded" width="70px" alt="img" />} 
                                                    
                                                </center>
                                            </div>
                                            <div className={classnames("form-group", this.state.error.name || this.state.error? "has-error" : null)}>
                                                <input type="text" className="form-control" name="name" onChange={this.typing.bind(this)} id="" placeholder="Full Name" />
                                            </div>
                                            {this.state.error.name?
                                                <div className="form-group has-error">
                                                    <p>{this.state.error.name}</p>
                                                </div>
                                                : null} 
                                            <div className={classnames("form-group", this.state.error.email || this.state.error? "has-error" : null)}>
                                                <input type="email" className="form-control" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                                            </div>
                                            {this.state.error.email ?
                                                <div className="form-group has-error">
                                                    <p>{this.state.error.email}</p>
                                                </div>
                                                : null}
                                            <div className={classnames("form-group", this.state.error.password || this.state.error? "has-error" : null)}>
                                                <input type="password" className="form-control" name="password" onChange={this.typing.bind(this)} placeholder="Password" />
                                            </div>
                                            {this.state.error.password ?
                                                <div className="form-group has-error">
                                                    <p>{this.state.error.password}</p>
                                                </div>
                                                : null}
                                            <button type="submit" className={classnames("btn", "btn-primary",
                                                "btn-block", "bg-orange", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                                                    <i className="fa fa-spinner fa-spin"></i>
                                                    : "Sign Up"}</button>
                                        </form>
                                    </div>
                                    <div role="tabpanel" className="tab-pane " id="student">
                                        <form action="" method="POST" onSubmit={this.submit.bind(this)} role="form">
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                                </center>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="" name="name" onChange={this.typing.bind(this)} placeholder="Full Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="number" className="form-control" name="code" onChange={this.typing.bind(this)} placeholder="Code" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="" name="password" onChange={this.typing.bind(this)} placeholder="password" />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block bg-orange">Submit</button>
                                        </form>
                                    </div>

                                    <div role="tabpanel" className="tab-pane" onSubmit={this.submit.bind(this)} id="company">
                                        <form action="" method="POST" role="form">
                                            <div className="form-group" style={{ padding: "30px 0px" }}>
                                                <center>
                                                    <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                                </center>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" onChange={this.typing.bind(this)} placeholder="Full Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="password" onChange={this.typing.bind(this)} placeholder="Password" />
                                            </div>
                                            <button type="submit" className={classnames("btn", "btn-primary",
                                                "btn-block", "bg-orange", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                                                    <i className="fa fa-spinner fa-spin"></i>   : "Signin"}
                                            </button>
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

export default connect(mapStateToProps, matchDispatchToProps)(Signup)