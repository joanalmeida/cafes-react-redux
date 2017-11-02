import React from 'react'

const CoffeeList = ( {list, onClick} ) => (
    <div>
        <h1>La lista de Cafes</h1>
        <ul>
            {
                list.map(coffee => {
                    return <li key={coffee.id} onClick={() => onClick(coffee.id)}>{coffee.name}</li>
                })
            }
        </ul>
    </div>
)

export default CoffeeList
