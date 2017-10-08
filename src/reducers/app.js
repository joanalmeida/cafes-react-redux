const LOG_IN = 'LOG_IN'

const ADD_COFFE_TO_CART = 'ADD_COFFE_TO_CART'

const initialState = {
    isLoggedIn: false,
    cart: [1, 2, 3]
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true
            }
        
        case ADD_COFFE_TO_CART:
            let cart = state.cart.concat(action.coffeId)

            return {
                ...state,
                cart
            }
        
        default:
            return state
    }
}
