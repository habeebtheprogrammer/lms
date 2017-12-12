import React, { Component } from "react"
import { Link } from "react-router-dom"
import ui from "../reducer/ui";
import auth from "../reducer/index";
import { connect } from "react-redux";
import { loginModal, signupModal, setCurrentUser } from "../actions/index"
import { bindActionCreators } from "redux"
import setAuthorizationToken from "./auth"
function mapStateToProps(state) {
    return {
        ui: state.ui,
        auth: state.auth
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loginModal: loginModal,
        signupModal: signupModal,
        setCurrentUser: setCurrentUser
    }, dispatch)
}
class Header extends Component {

    loginDropdown() {
        this.props.ui.signupModal ? this.props.signupModal() : null
        this.props.loginModal();
        console.log("dropdown toggle")
    }
    logout() {
        localStorage.removeItem("jwToken");
        setAuthorizationToken(false);
        window.location.assign("/")
    }
    signupDropdown() {
        this.props.ui.loginModal ? this.props.loginModal() : null
        this.props.signupModal();
        setCurrentUser(false)
        console.log("dropdown toggle")
    }
    render() {
        console.log(this.props.location)
        const { isAuthenticated } = this.props.auth;
        const { user } = this.props.auth
        console.log(user)

        const General = (<div> <ul className="nav navbar-nav">
            <li ><Link to="/news">News</Link></li>
            <li><Link to="/nextcourse">Next Course</Link></li>
            <li><a href="/mycourse">My Course</a></li>
            <li><a href="/group">Group</a></li>
        </ul>
            <ul className="nav navbar-nav navbar-right">
                <li className="" >
                    <a href="/profile" style={{ padding: "26px 25px 24px" }}>
                        <img src="./images/user.png" width="30px" className="rounded" alt="img" /> <span style={{margin:"13px 10px 0px"}}> Profile </span>
                    </a>
                </li>
            </ul>
        </div>);

        const Student = (<div><ul className="nav navbar-nav">
            <li ><Link to="/news">News</Link></li>
            <li><Link to="/nextcourse">Next Course</Link></li>
            <li><a href="/mycourse">My Course</a></li>
            <li><a href="/group">Form</a></li>
            <li><a href="/group">Group</a></li>
            <li><a href="/group">Work</a></li>
        </ul>
            <ul className="nav navbar-nav navbar-right">
                <li className="" >
                    <a href="/profile" style={{ padding: "18px 30px" }}>
                        <img src="./images/user.png" width="40px" className="rounded" alt="img" />
                        
                    </a>
                </li>
            </ul>
        </div>);
        const Instructor = (<div>
            <ul className="nav navbar-nav">
                <li ><Link to="/instructor">Courses</Link></li>
                <li><Link to="/conference">Conferences</Link></li>
                {/* <li><a href="/money">Money</a></li> */}
                <li><a href="/publication">News</a></li>
                {/* <li><a href="/iles">Files</a></li> */}
                <li><a href="/job">Job</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
                <li className="" >
                    <a href="/profile" style={{ padding: "18px 30px" }}>
                        <img src="./images/user.png" width="40px" className="rounded" alt="img" />
                    </a>
                </li>
            </ul>
        </div>)

        return (
            <div className="header">
                <nav className="navbar fixed-bar navbar-inverse" role="navigation" style={{ margin: "0px", borderRadius: "0px", minHeight: "80px", background: "rgba(0, 0, 0,0.88)" }}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src="./images/LOGOTIPO_WHITESUIT-BLANCO2.png" width="30px" className="rounded" alt="img" style={{ display: "inline-block" }} />
                            <span> WhiteSuiteHacking</span>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        {user.clearanceLevel === "generalUser" ? General : null}
                        {user.clearanceLevel === "Student" ? Student : null}
                        {user.clearanceLevel === "Instructor" ? Instructor : null}

                        {isAuthenticated ?
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#" onClick={this.logout.bind(this)} className="login" >
                                        <span> Logout</span></a></li>
                                </ul>
                                :
                            <div>

                            <ul className="nav navbar-nav">
                                    <li ><Link to="/news">News</Link></li>
                                    <li><Link to="/nextcourse">Next Course</Link></li>
                                    <li><a href="/group">Group</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="#" onClick={this.signupDropdown.bind(this)} className="login" >
                                        <i className="fa fa-sign-in"></i>
                                        <span> Signup</span></a></li>
                                    <li><a href="#" onClick={this.loginDropdown.bind(this)} className="login" >
                                        <i className="fa fa-user"></i>
                                        <span> Log in</span></a></li>
                                </ul>
                            </div>}

                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);