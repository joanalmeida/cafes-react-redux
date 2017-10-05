import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/AppActions'

class App extends Component {
    componentDidMount() {
        //this.props.appActions.logIn()
    }

    handleClick(e) {
        this.props.appActions.logIn()
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
                    <h1>Logueate plz</h1>
                }
                <button onClick={this.handleClick.bind(this)}>Log In</button>
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