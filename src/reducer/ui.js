const initialState = { messsage: "welcome to my web app", loginModal: false,signupModal:false }
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
        default:
            return state;
            break;
    }
}