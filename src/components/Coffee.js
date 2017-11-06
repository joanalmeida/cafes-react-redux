import React from 'react'

const Coffee = ( { coffee, onClick } ) => (
    <div className="column is-4">
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={coffee.img} alt="Coffee category" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    {coffee.description}
                </div>
            </div>
        </div>
    </div>
)

export default Coffee