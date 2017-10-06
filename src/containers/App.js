import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/AppActions'
import Login from '../components/Login'

class App extends Component {
    componentDidMount() {
        //this.props.appActions.logIn()
    }

    handleClick(e) {
        e.preventDefault()
        this.props.appActions.logIn()
    }

    clickCoffe() {
        this.props.appActions.addCoffe(1)
    }

    render() {
        let { isLoggedIn } = this.props.app

        return (
            <div>
                {
                    isLoggedIn
                    ?
                    <h1>Estas logueado</h1>
                    :
                    <Login onSubmit={this.handleClick.bind(this)}/>
                }
                <hr />
                <div>
                    <button onClick={this.clickCoffe.bind(this)}>Add Coffe</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)