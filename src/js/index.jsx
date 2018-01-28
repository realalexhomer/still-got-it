// @flow
import React from 'react'
import 'rxjs'
import { render } from 'react-dom'
import { Provider, ReactRedux } from 'react-redux' // eslint-disable-line no-unused-vars
import App from './components/App'
import Counter from './components/Counter'
import configureStore from './configure/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <App>
      <Counter />
    </App>
  </Provider>,
  document.getElementById('root'),
)
