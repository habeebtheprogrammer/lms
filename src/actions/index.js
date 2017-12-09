
export const loginModal = (object)=>{
    return {
        type: "SHOW_LOGIN_MODAL", payload: object
    }
}
export const signupModal = (object) => {
    return {
        type: "SHOW_SIGNUP_MODAL", payload: object
    }
}