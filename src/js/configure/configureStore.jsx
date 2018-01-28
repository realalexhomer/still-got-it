import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpic'
import rootReducer from './rootReducer'

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(createEpicMiddleware(rootEpic)),
  )
}
