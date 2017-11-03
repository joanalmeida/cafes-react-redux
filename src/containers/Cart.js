import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'

class Cart extends Component {
    removeCoffee(id) {
        this.props.coffeeActions.removeCoffee(id)
    }

    render() {
        let cartList = this.props.cart.map(coffee => {
            return {
                ...this.props.coffees[coffee.id],
                qty: coffee.qty
            }
        })

        return (
            <div>
                <h1>El carrito</h1>
                <ul>
                    {
                        cartList.map(coffee => {
                            return (
                                <li key={coffee.id} onClick={() => {this.removeCoffee(coffee.id)}}>
                                    {coffee.name} - Qty: {coffee.qty}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.coffee.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        coffeeActions: bindActionCreators(coffeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)