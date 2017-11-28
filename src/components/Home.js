import React from 'react'
//import Login from './Login'

const Home = function( {onLogin} ) {
    function handleEmailFocus(e) {
        document.getElementById('emailLabel').classList.add('active');
    }

    function handlePassFocus(e) {
        document.getElementById('passLabel').classList.add('active');
    }

    function handleEmailClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    function handlePassClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    function handleMainClick(e) {
        if(!document.getElementById('defaultForm-email').value) {
            document.getElementById('emailLabel').classList.remove('active');
        }
        if(!document.getElementById('defaultForm-pass').value) {
            document.getElementById('passLabel').classList.remove('active');
        }
    }

    return (
        <div>
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
            <div className="hm-black-light">
                <div onClick={handleMainClick} className="full-bg-img flex-center">
                    <div className="row">
                        <div className="col">
                            <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="md-form">
                                    <i className="fa fa-envelope prefix"></i>
                                    <input onClick={handleEmailClick} onFocus={handleEmailFocus} type="text" id="defaultForm-email" className="form-control white-text" />
                                    <label id="emailLabel" className="text-white" htmlFor="defaultForm-email">Your email</label>
                                </div>
    
                                <div className="md-form">
                                    <i className="fa fa-lock prefix"></i>
                                    <input onClick={handlePassClick} onFocus={handlePassFocus} type="password" id="defaultForm-pass" className="form-control white-text" />
                                    <label id="passLabel" className="text-white" htmlFor="defaultForm-pass">Your password</label>
                                </div>
    
                                <div className="text-center">
                                    <button className="btn btn-elegant" onClick={onLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home