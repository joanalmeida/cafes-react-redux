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
