import React from 'react'
import Coffee from './Coffee'

const CoffeeList = ( {list, onClick} ) => (
    <div>
        <h1>La lista de Cafes</h1>
        <div className="row">
            {
                list.map(coffee => {
                    return <Coffee key={coffee._id} coffee={coffee} onClick={onClick} />
                })
            }
        </div>
    </div>
)

export default CoffeeList
