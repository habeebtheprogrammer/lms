import React, {Component} from "react";
import Landing from "./landing";
import Gridcourse from "./gridcourse"
import Footer from "./footer"
class Main extends Component{
    render(){
        return(
            <div>
                <Landing />
                {/* <Gridcourse />
                <Footer /> */}
            </div>
        )
    }
}

export default Main;