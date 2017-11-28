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
                <div className="list-group">
                    {
                        cartList.map(coffee => {
                            return (
                                <div key={coffee._id} className="list-group-item">
                                    <div className="media">
                                        <img className="d-flex mr-3" src={"img/thumbnail/" + coffee.img} alt="placeholder"/>
                                        <div className="media-body">
                                            <h6>
                                                {coffee.name}
                                                <i onClick={() => {this.removeCoffee(coffee._id)}} className="fa fa-close float-right clickable" aria-hidden="true"></i>
                                                <span className="badge badge-primary badge-pill float-right mr-10">{coffee.qty}</span>
                                            </h6>
                                            <a onClick={() => {this.plusOne(coffee._id)}} className="link-carrito plus"><i className="fa fa-plus"></i></a>
                                            <a onClick={() => {this.minusOne(coffee._id)}} className="link-carrito"><i className="fa fa-minus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
                <div><button type="button" className="btn btn-elegant" onClick={this.addOrder}>Pedir</button></div>
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