const initialState = { messsage: "welcome to my web app",addTodo:false,
 loginModal: false,signupModal:false,addRecommendation:false,
    addCourse: false, addFaq: false, addHotel: false, addOthers: false, addPrinting: false, addTransport: false, addFood: false }
export default function ui(state = initialState, action) {
    switch (action.type) {
        case "SHOW_LOGIN_MODAL":
            var newState = Object.assign({}, state);
            newState.loginModal = !newState.loginModal
            return newState;
            break;
        case "SHOW_SIGNUP_MODAL":
            var newState = Object.assign({}, state);
            newState.signupModal = !newState.signupModal
            return newState;
            break;
        case "ADD_RECOMMENDATION":
            var newState = Object.assign({}, state);
            newState.addRecommendation = !newState.addRecommendation
            return newState;
            break;
        case "ADD_COURSE":
            var newState = Object.assign({}, state);
            newState.addCourse = !newState.addCourse
            return newState;
            break;
        case "ADD_FAQ":
            var newState = Object.assign({}, state);
            newState.addFaq = !newState.addFaq
            return newState;
            break;
        case "ADD_TODO":
            var newState = Object.assign({}, state);
            newState.addTodo = !newState.addTodo
            return newState;
            break;
        case "ADD_PRINTING":
            var newState = Object.assign({}, state);
            newState.addPrinting = !newState.addPrinting
            return newState;
            break;
        case "ADD_TRANSPORT":
            var newState = Object.assign({}, state);
            newState.addTransport = !newState.addTransport
            return newState;
            break;
        case "ADD_HOTEL":
            var newState = Object.assign({}, state);
            newState.addHotel = !newState.addHotel
            return newState;
            break;
        case "ADD_FOOD":
            var newState = Object.assign({}, state);
            newState.addFood = !newState.addFood
            return newState;
            break;
        case "ADD_OTHERS":
            var newState = Object.assign({}, state);
            newState.addOthers = !newState.addOthers
            return newState;
            break;
        default:
            return state;
            break;
    }
}