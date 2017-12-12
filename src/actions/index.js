
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
export const addRecommendation = (object) => {
    return {
        type: "ADD_RECOMMENDATION", payload: object
    }
}
export const addCourse = (object) => {
    return {
        type: "ADD_COURSE", payload: object
    }
}
export const addFaq = (object) => {
    return {
        type: "ADD_FAQ", payload: object
    }
}

export const addTodo = (object) => {
    return {
        type: "ADD_TODO", payload: object
    }
}
export const addPrinting = (object) => {
    return {
        type: "ADD_PRINTING", payload: object
    }
}
export const addTransport = (object) => {
    return {
        type: "ADD_TRANSPORT", payload: object
    }
}
export const addHotel = (object) => {
    return {
        type: "ADD_HOTEL", payload: object
    }
}
export const addFood = (object) => {
    return {
        type: "ADD_FOOD", payload: object
    }
}
export const addOthers = (object) => {
    return {
        type: "ADD_OTHERS", payload: object
    }
}
export const addPublication = (object) => {
    return {
        type: "ADD_PUBLICATION", payload: object
    }
}
export const setCurrentUser = (user) => {
    return {
        type: "SET_CURRENT_USER", payload: user
    }
}
