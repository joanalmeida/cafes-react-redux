import { combineReducers } from 'redux'
import app from './app'
import coffee from './coffee'
import order from './order'

export default combineReducers({
    app,
    coffee,
    order
})