const ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART'
const REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART'

const initialState = {
    cart: [],
    coffees: {
      1: {
        id: 1,
        name: "Lungo"
      },
      2: {
        id: 2,
        name: "Capuchino"
      }
    },
    coffeeList: [1, 2]
}

export default function cafes(state = initialState, action = {}) {
    let cart;
    switch(action.type) {
        case ADD_COFFEE_TO_CART:
            let exist = state.cart.filter(elem => { return elem.id === action.coffeeId })
            if(exist.length > 0) {
                return state
            } else {
                cart = state.cart.concat({id: action.coffeeId, qty: 1})
                return {
                    ...state,
                    cart
                }
            }

        case REMOVE_COFFEE_FROM_CART:
            cart = state.cart.filter(elem => {return elem !== action.coffeeId})
            return {
                ...state,
                cart
            }


        default:
            return state
    }
}
