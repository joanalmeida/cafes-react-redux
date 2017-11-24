import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/AppActions'
import Home from '../components/Home'
import MainPage from './MainPage'

class App extends Component {
    componentDidMount() {
        //this.props.appActions.logIn()
    }

    handleLogin(e) {
        e.preventDefault()
        this.props.appActions.logIn()
    }

    render() {
        let { isLoggedIn } = this.props.app

        return (
            <div id="app">
                {
                    isLoggedIn
                    ?
                    <MainPage />
                    :
                    <Home onLogin={this.handleLogin.bind(this)} />
                }
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