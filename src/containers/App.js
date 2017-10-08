import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/AppActions'
import Home from '../components/Home'

class App extends Component {
    componentDidMount() {
        //this.props.appActions.logIn()
    }

    handleLogin(e) {
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
                <section className="hero is-primary is-fullheight">
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
                                <p>Estas logueado, go to cafes</p>
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

        /*
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
            */
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