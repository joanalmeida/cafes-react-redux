const ADD_ORDER = 'ADD_ORDER'

const initialState = {
    officeOrder: []
}

export default function orders(state = initialState, action = {}) {
    switch(action.type) {
        case ADD_ORDER:
            return {
                ...state,
                officeOrder: state.officeOrder.concat(action.order)
            }
        
        default:
            return state
    }
}
