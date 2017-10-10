import React from 'react'

const Login = ( {onSubmit} ) => (
    <div>
        <div className="field">
            <div className="control">
                <input className="input" type="text" placeholder="Username" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <input className="input" type="password" placeholder="Password" />
            </div>
        </div>
        <div className="field is-grouped is-grouped-right">
            <div className="control">
                <button onClick={onSubmit} className="button is-light">Log In</button>
            </div>
        </div>
    </div>
)

/*
<form onSubmit={onSubmit}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Log In</button>
        </form>
        */

export default Login
