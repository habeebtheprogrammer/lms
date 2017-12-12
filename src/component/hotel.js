import React, { Component } from "react";
import axios from "axios"
import { host } from "../config"
import classnames from "classnames";
import ui from "../reducer/index"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return { ui: state.ui }
}
class Hotel extends Component {


    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: ""
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
        axios.post(`${host}/api/userlogin`, this.state).then((success) => {
            console.log(typeof (success.data))
            this.setState({ error: success.data })

        })
    }
    render() {
        return (
            < div className={classnames("login-modal", "flipInY", "animated")}>
                <div className="row  ">
                    <div className="    ">
                        <div className="box">
                            <p className="modal-header">Add Hotel</p>
                            <form action="" method="POST" role="form">
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="number" name="amount" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Amount" />
                                </div>
                                {typeof (this.state.error) == "object" ?
                                    this.state.error.map((error) => (
                                        error.param == "username" ?
                                            <div className="form-group has-error">
                                                <p>{error.msg}</p>
                                            </div>
                                            : null))

                                    : null}
                                {typeof (this.state.error) == "string" ?
                                    <div className="form-group has-error">
                                        <p>{this.state.error}</p>
                                    </div> : null}
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="file" name="file" onChange={this.typing.bind(this)} style={{ border: "0px" }} />
                                </div>

                                <div className="form-group" style={{ color: "#eee" }}>
                                    <span>Factura : </span>
                                    <div className="radio" style={{ display: "inline-block" }}>
                                        <label> <input type="radio" name="" value="" checked="checked" /> Yes </label>
                                    </div>
                                    <div className="radio" style={{ display: "inline-block" }}>

                                        <label>   <input type="radio" name="" value="" /> No </label>
                                    </div>
                                </div>
                                <button type="submit" onClick={this.submit.bind(this)} className="btn btn-danger btn-block btn-xs bg-orange">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default connect(mapStateToProps)(Hotel);