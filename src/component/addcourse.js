import React, { Component } from "react";
import axios from "axios"
import { host } from "../config"
import classnames from "classnames";
import ui from "../reducer/index"
import {connect} from "react-redux"

function mapStateToProps(state) {
    return {ui:state.ui}
}
class Addcourse extends Component {

    
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
        console.log(nextProps,nextState);
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
            < div className={classnames("login-modal","flipInY","animated")}>
                <div className="row  ">
                    <div className="    ">
                        <div className="box">
                            <p className="modal-header">Add Course</p>
                            <form action="" method="POST" role="form">
                              
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="email" name="title" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Course Title" />
                                </div>
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="text" name="city" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="City" />
                                </div>
                                  <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="text" name="Place" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Geographical Location" />
                                </div>
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="date" name="date" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Hour of Starting" />
                                </div>
                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="date" name="date" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Hour of Ending" />
                                </div>
                                 <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="number" name="date" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Price" />
                                </div>
                                 <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="text" name="date" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Instructor" />
                                </div>

                                <div className={classnames("form-group", this.state.error ? "has-error" : null)}>
                                    <input type="text" name="date" onChange={this.typing.bind(this)} className="form-control" id="" placeholder="Max Capacity" />
                                </div>
                                <button type="submit" onClick={this.submit.bind(this)} className="btn btn-sm btn-primary btn-block bg-orange">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default connect(mapStateToProps)(Addcourse);