import React from 'react'

const Coffee = ( { coffee, onClick } ) => (
    <div className="column is-4">
        <div className="card">
            <div className="card-image" onClick={() => onClick(coffee._id)}>
                <figure className="image">
                    <img src={coffee.img} alt="Coffee category" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    {coffee.name}
                </div>
            </div>
        </div>
    </div>
)

export default Coffee