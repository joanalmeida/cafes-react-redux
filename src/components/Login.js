import React from 'react'

const Login = ( {onSubmit} ) => (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Log In</button>
        </form>
    </div>
)

export default Login
