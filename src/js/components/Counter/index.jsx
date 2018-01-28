// @flow
import React from 'react'
import { connect } from 'react-redux'
import { counterStep } from './actions'

type CounterProps = {
  step: Function,
  count: Number,
}

function Counter(props:CounterProps) {
  const { step, count } = props

  return (
    <div>
      <button onClick={() => { step(1) }}>Increment</button>
      <button onClick={() => { step(-1) }}>Decrement</button>
      The count is {count}
    </div>
  )
}

const mapStateToProps = state => ({ count: state.counter.count })

const mapDispatchToProps = dispatch => ({
  step: (steps) => {
    dispatch(counterStep(steps))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
