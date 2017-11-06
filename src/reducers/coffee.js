const ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART'
const REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART'
const REQUEST_COFFEES = 'REQUEST_COFFEES'
const RECEIVE_COFFEES = 'RECEIVE_COFFEES'
const PLUS_ONE_COFFEE = 'PLUS_ONE_COFFEE'
const MINUS_ONE_COFFEE = 'MINUS_ONE_COFFEE'

const initialState = {
    fetchingCoffees: false,
    cart: [],
    coffees: {}
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
            cart = state.cart.filter(elem => { return elem._id !== action.coffeeId })
            return {
                ...state,
                cart
            }

        case PLUS_ONE_COFFEE:
            cart = state.cart.map(elem => { 
                if(elem._id === action.coffeeId) {
                    elem = {...elem, qty: elem.qty+1}
                }
                return elem
            })
            return {
                ...state,
                cart
            }

        case MINUS_ONE_COFFEE:
            cart = state.cart.map(elem => {
                if(elem.qty > 1 && elem._id === action.coffeeId) {
                    elem = {...elem, qty: elem.qty-1}
                }
                return elem
            })
            return {
                ...state,
                cart
            }

        default:
            return state
    }
}
