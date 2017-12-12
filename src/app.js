import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from "./component/main";
import Header from "./component/header"
import Instructorheader from "./component/instructorheader"
import Login from "./component/login"
import News from "./component/news"
import NextCourse from "./component/nextcourse"
import Mycourse from "./component/mycourse"
import Instructormain from "./component/instructormain"
import Conference from "./component/conference"
import Publication from "./component/publication"
import Group from "./component/group"
import Money from "./component/money"
import Profile from "./component/profile"
import Adminlogin from "./component/adminlogin"
import Adminmain from "./component/adminmain"
class App extends Component {
    render() {
        return (
            <div>
                {window.location.pathname ==="/admin/login" ?null : <Header />}
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/nextcourse" component={NextCourse} />
                    <Route exact path="/Mycourse" component={Mycourse} />
                    <Route exact path="/Group" component={Group} />
                    <Route exact path="/money" component={Money} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/conference" component={Conference} />
                    <Route exact path="/admin/login" component={Adminlogin} />
                    <Route exact path="/admin" component={Adminmain} />
                    <Route exact path="/publication" component={Publication} />
                    <Route exact path="/Instructor" component={Instructormain} />
                </Switch>
            </div>
        )
    }
}

export default App;