import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers/reducer'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import './Stylesheets/style.css'


const store = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
