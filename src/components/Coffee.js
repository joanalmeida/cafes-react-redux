import React from 'react'

const Coffee = ( { coffee, onClick } ) => (
    <div className="col-4">
        <section>
            <div className="card card-dark">
                <div className="view overlay hm-white-slight">
                    <img src={"img/" + coffee.img} alt="Coffee" className="img-fluid"/>
                </div>
                <div className="card-body">
                    <a className="activator" onClick={() => onClick(coffee._id)}><i className="fa fa-plus"></i></a>
                    <h4 className="card-title">{coffee.name}</h4>
                    <hr />
                    <p className="card-text white-text">{coffee.description}</p>
                </div>
            </div>
        </section>
    </div>
)

export default Coffee