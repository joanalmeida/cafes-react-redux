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
            <div>
                <section className="hero is-primary is-fullheight app">
                    {/* HEADER */}
                    <div className="hero-head">
                        <header className="nav">
                            Navigation Header
                        </header>
                    </div>
                    {/*BODY*/}
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            {
                                isLoggedIn
                                ?
                                <MainPage />
                                :
                                <Home onLogin={this.handleLogin.bind(this)}/>
                            }
                        </div>
                    </div>
                    {/*FOOTER*/}
                    <div className="hero-foot">
                        <nav className="tabs is-boxed is-fullwidth">
                            <div className="container">
                                <ul>
                                    <li><a>Test</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </section>
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