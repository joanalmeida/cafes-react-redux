import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as coffeeActions from '../actions/CoffeeActions'
import CoffeeList from '../components/CoffeeList'
import Cart from './Cart'

class MainPage extends Component {
    componentDidMount() {
        this.props.coffeeActions.fetchCoffees()
    }

    clickCoffeeList(id) {
        this.props.coffeeActions.addCoffe(id)
    }

    render() {
        let list = Object.values(this.props.coffees);

        return (
            <div className="full-height">
                {/* HEADER - NAV */}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar bg-special-color">
                    <div className="container">
                        <a className="navbar-brand"><img src="img/logo_transparente.png" alt="logo sondeos"/></a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav left">
                                <li className="nav-item"><a className="nav-link">Pedido Actual</a></li>
                                <li className="nav-item"><a className="nav-link">Mis pedidos</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div id="test">
                    <div className="container main-content">
                        <div className="row">
                            <div className="col-9">
                                {
                                    this.props.fetchingCoffees
                                    ?
                                    <h3>Cargando...</h3>
                                    :
                                    <CoffeeList list={list} onClick={this.clickCoffeeList.bind(this)}/>
                                }
                            </div>
                            <div className="col-3 ml-auto">
                                {
                                    this.props.fetchingCoffees
                                    ?
                                    <h3>Cargando...</h3>
                                    :
                                    <Cart coffees={this.props.coffees} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coffees: state.coffee.coffees,
        fetchingCoffees: state.coffee.fetchingCoffees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        coffeeActions: bindActionCreators(coffeeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)