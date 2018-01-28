// @flow
import React from 'react'
import 'rxjs'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider, ReactRedux } from 'react-redux' // eslint-disable-line no-unused-vars
import App from './components/App'
import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
