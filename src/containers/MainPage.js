import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'
import CoffeeList from '../components/CoffeeList'
//import Cart from '../components/Cart'
import Cart from './Cart'

class MainPage extends Component {
    clickCoffeeList(id) {
        this.props.coffeeActions.addCoffe(id)
    }

    render() {
        let list = Object.values(this.props.coffees)

        return (
            <div className="columns">
                <div className="column is-8">
                    <CoffeeList list={list} onClick={this.clickCoffeeList.bind(this)}/>
                </div>
                <div className="column is-4">
                    <Cart coffees={this.props.coffees} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coffees: state.coffee.coffees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        coffeeActions: bindActionCreators(coffeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)