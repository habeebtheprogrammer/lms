import React from 'react';
import RenderDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import jwt from "jsonwebtoken";
import {setCurrentUser} from "./actions/index"
import setAuthorizationToken  from "./component/auth"
import allReducer from "./reducer/index"
var store = createStore(allReducer);

if(localStorage.jwToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwToken)))
}

RenderDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider >
    </BrowserRouter>
    , document.getElementById("root")
)