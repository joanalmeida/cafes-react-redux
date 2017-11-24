import React from 'react'

const Coffee = ( { coffee, onClick } ) => (
    <div className="col-4">
        <section>
            <div className="card card-dark">
                <div className="view overlay hm-white-slight">
                    <img src={coffee.img} alt="Coffee" className="img-fluid"/>
                </div>
                <div className="card-body">
                    <a className="activator" onClick={() => onClick(coffee._id)}><i className="fa fa-plus"></i></a>
                    <h4 className="card-title">{coffee.name}</h4>
                    <hr />
                    <p className="card-text white-text">Super descripcion de un par de renglones para ver como queda una larga</p>
                </div>
            </div>
        </section>
    </div>
)

export default Coffee