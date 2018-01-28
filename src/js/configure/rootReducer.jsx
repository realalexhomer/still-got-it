// import / combine all reducers here
import { combineReducers } from 'redux'
import counter from '../components/Counter/reducer'

const rootReducer = combineReducers({
  counter,
})

export default rootReducer
