import React, { Component } from "react"
import { Link } from "react-router-dom"
import ui from "../reducer/ui";
import { connect } from "react-redux";
import { loginModal, signupModal } from "../actions/index"
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
class Instructorheader extends Component {

    loginDropdown() {
        this.props.loginModal();
        console.log("dropdown toggle")
    }
    signupDropdown() {
        this.props.signupModal();
        console.log("dropdown toggle")
    }
    render() {
        console.log(this.props)
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
                        <a className="navbar-brand" href="/profile">


                            <img src="./images/LOGOTIPO_WHITESUIT-BLANCO2.png" width="30px" className="rounded" alt="img" style={{ display: "inline-block" }} />

                            <span> WhiteSuiteHacking</span>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">

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
                                    <a href="/profile" style={{padding:"18px 30px"}}>
                                    <img src="./images/user.png" width="40px" className="rounded" alt="img" />
                                    </a>
                                </li>
                            </ul>
                        
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Instructorheader);