import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'
import * as orderActions from '../actions/OrderActions'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.addOrder = this.addOrder.bind(this);
    }

    addOrder() {
        this.props.orderActions.addOrder({user: 1, coffee: this.props.cart})
    }

    removeCoffee(id) {
        this.props.coffeeActions.removeCoffee(id)
    }

    plusOne(id) {
        this.props.coffeeActions.plusOne(id)
    }

    minusOne(id) {
        this.props.coffeeActions.minusOne(id)
    }

    render() {
        let cartList = this.props.cart.map(coffee => {
            return {
                ...this.props.coffees[coffee._id],
                qty: coffee.qty
            }
        })

        return (
            <div>
                <h1>El carrito</h1>
                <ul className="list-group">
                    {
                        cartList.map(coffee => {
                            return (
                                <li key={coffee._id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {coffee.name}
                                    <span className="badge badge-primary badge-pill">{coffee.qty}</span>
                                </li>
                                    /*
                                    <img src={coffee.img} alt="Coffee category" onClick={() => {this.removeCoffee(coffee._id)}}/>
                                    <button onClick={() => {this.plusOne(coffee._id)}}>Add</button>
                                    <button onClick={() => {this.minusOne(coffee._id)}}>Del</button>
                                    */
                            )
                        })
                    }
                </ul>
                <button onClick={this.addOrder}>Order</button>
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
        coffeeActions: bindActionCreators(coffeeActions, dispatch),
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)