export function addCoffe(coffeId) {
    return {
        type: 'ADD_COFFEE_TO_CART',
        coffeId
    }
}

export function removeCoffee(coffeId) {
    return {
        type: 'REMOVE_COFFEE_FROM_CART',
        coffeId
    }
}
