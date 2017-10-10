import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'
import CoffeeList from '../components/CoffeeList'
import Cart from '../components/Cart'

class MainPage extends Component {
    render() {
        let { coffeeList, coffees, cart } = this.props.coffeeGral
        let list = coffeeList.map(coffeeID => {
            return coffees[coffeeID]
        })

        return (
            <div className="columns">
                <div className="column is-8">
                    <CoffeeList list={list} />
                </div>
                <div className="column is-4">
                    <Cart list={cart} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coffeeGral: state.coffee
    }
}

function mapDispatchToProps(dispatch) {
    return {
        coffeeActions: bindActionCreators(coffeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)