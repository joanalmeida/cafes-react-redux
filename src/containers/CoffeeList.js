import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'

class CoffeeList extends Component {
    render() {
        /*
        let list = this.props.list.map(coffeeID => {
            return this.props.coffees[coffeeID]
        })
        */

        let { coffeeList, coffees } = this.props.all
        let list = coffeeList.map(coffeeID => {
            return coffees[coffeeID]
        })

        return (
            <div>
                <h1>La lista de cafes</h1>
                <ul>
                    {
                        list.map(coffee => {
                            return <li key={coffee.id}>{coffee.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    /*
    return {
        list: state.coffee.coffeeList,
        coffees: state.coffee.coffees
    }
    */
    return {
        all: state.coffee
    }
}

function mapDispatchToProps(dispatch) {
    return {
        coffeeActions: bindActionCreators(coffeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeList)