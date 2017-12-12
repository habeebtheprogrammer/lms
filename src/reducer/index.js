import {combineReducers} from "redux"
import ui from "./ui.js"
import Auth from "./auth.js"

var allReducer = combineReducers({
    ui: ui,
    auth : Auth
})

export default allReducer;