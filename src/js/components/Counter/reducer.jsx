// @flow
import { COUNTER_STEP } from './actions'
import { Action } from '../../types/actions'

const initialState = {
  counterNumber: 0,
}

export default function counterReducer(state = initialState, action:Action) {
  switch (action.type) {
    case COUNTER_STEP:
      return { ...state, counterNumber: state.counterNumber + action.payload.steps }
    default:
      break
  }

  return state
}
