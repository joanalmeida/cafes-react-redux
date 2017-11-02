import React from 'react'

const Cart = ( {list} ) => (
    <div>
        <h1>El carrito</h1>
        <ul>
            {
                list.map(coffee => {
                    return <li key={coffee.id}>{coffee.name}</li>
                })
            }
        </ul>
    </div>
)

export default Cart
