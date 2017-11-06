import axios from "axios"

export function addCoffe(coffeeId) {
    return {
        type: 'ADD_COFFEE_TO_CART',
        coffeeId
    }
}

export function removeCoffee(coffeeId) {
    return {
        type: 'REMOVE_COFFEE_FROM_CART',
        coffeeId
    }
}

function requestCoffees() {
    return {
        type: 'REQUEST_COFFEES'
    }
}

function receiveCoffees(coffees) {
    return {
        type: 'RECEIVE_COFFEES',
        coffees
    }
}

export function fetchCoffees() {
    //Agrego timeout para simular tiempo de espera a un server externo
    return dispatch => {
        dispatch(requestCoffees())
        return axios.get('http://localhost:9000/api/coffees')
            .then(response => setTimeout(function(){
                dispatch(receiveCoffees(response.data))
            }, 5000))
    }
}
