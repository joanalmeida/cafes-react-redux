export function logIn() {
    return {
        type: 'LOG_IN'
    }
}

export function addCoffe(coffeId) {
    return {
        type: 'ADD_COFFE_TO_CART',
        coffeId
    }
}
