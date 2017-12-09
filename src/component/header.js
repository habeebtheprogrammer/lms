import React, { Component } from "react"
import ui from "../reducer/ui";
import {connect} from "react-redux";
import {loginModal,signupModal} from "../actions/index"
import {bindActionCreators} from "redux"
function mapStateToProps(state){
    return {
        ui: state.ui
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        loginModal: loginModal,
        signupModal: signupModal
    }, dispatch)
}
class Header extends Component {

    loginDropdown(){
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
                <nav className="navbar navbar-inverse" role="navigation" style={{ margin: "0px",borderRadius:"0px", minHeight: "80px", background:"rgba(0, 0, 0,0.88)"}}>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">

                            <i className="fa fa-paw fa-lg"></i>
                            <span> PROJECTFIVERR</span>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-ex1-collapse">

                        <form className="navbar-form navbar-left" role="search" style={{padding:"15px"}}>
                            <div className="form-group">
                                <select name="" id="input${1/(\w+)/\u\1/g}" className="form-control" required="required" style={{ background: "transparent", color: "#fff", border: "1px solid #777"}}>
                                    <option value=""> CATEGORIES </option>
                                </select>
                            </div>
                        </form>
                        <form className="navbar-form navbar-left" role="search" style={{ padding: "15px" }}>
                            <div className="form-group">
                                
                                <input type="search" name="" id="input${1/(\w+)/\u\1/g}" className="form-control" value="" required="required" title="" placeholder="What do you want to learn" style={{ background: "transparent", color: "#fff", border: "1px solid #777" }}/>
                                
                            </div>
                        </form>
                        <ul className="nav navbar-nav">
                            <li ><a href="/news">News</a></li>
                            <li><a href="/nextcourse">Next Course</a></li>
                            <li><a href="#">My Course</a></li>
                            <li><a href="#">Group</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" className="get-started" onClick={this.signupDropdown.bind(this)}>Get Started</a></li>
                            <li><a href="#" onClick={this.loginDropdown.bind(this)} className="login" >Log in</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Header);