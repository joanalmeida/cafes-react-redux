const LOG_IN = 'LOG_IN'

const initialState = {
    isLoggedIn: false
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        
            default:
                return state
    }
}
