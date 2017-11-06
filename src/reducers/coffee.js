const ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART'
const REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART'
const REQUEST_COFFEES = 'REQUEST_COFFEES'
const RECEIVE_COFFEES = 'RECEIVE_COFFEES'

const initialState = {
    fetchingCoffees: false,
    cart: [],
    coffees: {},
    coffeeList: [1, 2]
}

export default function cafes(state = initialState, action = {}) {
    let cart;
    switch(action.type) {
        case REQUEST_COFFEES:
            return {
                ...state,
                fetchingCoffees: true
            }

        case RECEIVE_COFFEES:
            let coffees = action.coffees.reduce(function(coffees, item) {
                coffees[item._id] = item;
                return coffees;
            }, {})

            return {
                ...state,
                fetchingCoffees: false,
                coffees
            }

        case ADD_COFFEE_TO_CART:
            let exist = state.cart.filter(elem => { return elem._id === action.coffeeId })
            if(exist.length > 0) {
                return state
            } else {
                cart = state.cart.concat({_id: action.coffeeId, qty: 1})
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
