import {combineReducers} from "redux"
import ui from "./ui.js"

var allReducer = combineReducers({
    ui : ui
})

export default allReducer;