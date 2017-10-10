import React from 'react'

const CoffeeList = ( {list} ) => (
    <div>
        <h1>La lista de Cafes</h1>
        <ul>
            {
                list.map(coffee => {
                    return <li key={coffee.id}>{coffee.name}</li>
                })
            }
        </ul>
    </div>
)

export default CoffeeList
