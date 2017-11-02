import React from 'react'
import CoffeeList from '../containers/CoffeeList'


const MainPage = () => (
    <div className="columns">
        <div className="column is-8">
            {/*Coffee List*/}
            <CoffeeList />
        </div>
        <div className="column is-4">
            {/*Coffee Cart*/}
        </div>
    </div>
)

export default MainPage