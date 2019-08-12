import {  createStore } from 'redux'
import reducer from './reducer'

let initialState = {}

const store = createStore(reducer, initialState)


export default store
