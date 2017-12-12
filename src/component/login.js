import React, { Component } from "react";
import axios from "axios"
import { host } from "../config"
import classnames from "classnames";
import ui from "../reducer/index"
import auth from "../reducer/index"
import { connect } from "react-redux"
import jwt from "jsonwebtoken"
import {setCurrentUser} from "../actions/index"
import setAuthorizationToken from "./auth"
import { bindActionCreators } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";
function mapStateToProps(state) {
    return { ui: state.ui,
    auth: state.auth }
}
function matchDispatchToProps(dispatch) { 
    return bindActionCreators({
        setCurrentUser : setCurrentUser
    },dispatch)
 }
class Login extends Component {


    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            isLoading: false
        }
    }

    typing(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
    }

    submit(e) {
        e.preventDefault();
        this.setState({isLoading:true})
        setTimeout(function(){
            axios.post(`${host}/api/userlogin`, this.state).then((res) => {
                console.log(res)
                if(res.data.token){
                    var token = res.data.token;
                    localStorage.setItem("jwToken", token);
                    setAuthorizationToken(token);
                    window.location.assign("/")
                }
                this.setState({ error: res.data, isLoading:false });
                console.log(jwt.decode(token))
            });
        }.bind(this),3000)
    }
    render() {
        console.log(this.props)
        
        return (
            this.props.ui.loginModal ?
                < div className={classnames("login-modal", "flipInY", "animated")}>
                    <div className="row  ">
                        <div className="    ">
                            <div className="box">
                                <p className="modal-header">Login</p>
                                <form action="" method="POST" role="form" onSubmit={this.submit.bind(this)}>
                                    <div className="form-group" style={{ padding: "30px 0px" }}>
                                        <center>
                                            <img src="./images/user.png" className="rounded" width="70px" alt="img" />
                                        </center>
                                    </div>
                                    <div className={classnames("form-group", this.state.error.email ? "has-error" : null)}>
                                        <input type="email" name="email" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Email" />
                                    </div>
                                    {this.state.error.email ?
                                                <div className="form-group has-error">
                                                    <p>{this.state.error.email}</p>
                                                </div>
                                                : null}
                                    <div className={classnames("form-group", this.state.error.password ? "has-error" : null)}>
                                        <input type="password" name="password" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="password" />
                                    </div>

                                        {this.state.error.password?
                                                <div className="form-group has-error">
                                                    <p>{this.state.error.password}</p>
                                                </div>
                                        : null}

                                    <div className="form-group">
                                        <p>Forgot your password? <a href="">click here</a></p>
                                    </div>


                                    <button type="submit"  className={classnames("btn","btn-primary",
                                     "btn-block", "bg-orange", this.state.isLoading ?"disabled":null)}> {this.state.isLoading ?
                                    <i className="fa fa-spinner fa-spin"></i>
                                     :"Signin" }</button>
                                </form>

                            </div>

                        </div>
                    </div>

                </div> :
                null
        )
    }

}

export default connect(mapStateToProps,matchDispatchToProps)(Login);