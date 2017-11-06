import React from 'react'
import Coffee from './Coffee'

const CoffeeList = ( {list, onClick} ) => (
    <div>
        <h1>La lista de Cafes</h1>
        <div className="columns is-multiline">
            {
                list.map(coffee => {
                    //return <li key={coffee._id} onClick={() => onClick(coffee._id)}>{coffee.name}</li>
                    return <Coffee key={coffee._id} coffee={coffee} onClick={onClick} />
                })
            }
        </div>
    </div>
)

export default CoffeeList
