import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from "./component/main";
import Header from "./component/header"
import Login from "./component/login"
import News from "./component/news"
import NextCourse from "./component/nextcourse"
class App extends Component {
    render() {
        return (
            <div>
                {window.location.pathname =="/login"?null:<Header />}
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/nextcourse" component={NextCourse} />
                </Switch>
            </div>
        )
    }
}

export default App;