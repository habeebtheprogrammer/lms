import React from 'react';
import RenderDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./app";
import { Provider } from "react-redux";
import { createStore } from "redux"
import allReducer from "./reducer/index"
var store = createStore(allReducer);

RenderDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider >
    </BrowserRouter>
    , document.getElementById("root")
)