// @flow
import React from 'react'
import { connect } from 'react-redux'
import { counterStep } from './actions'
import style from './style.css'

type CounterProps = {
  step: Function,
  count: Number,
}

function Counter(props:CounterProps) {
  const { step, count } = props

  return (
    <div className={style.counter}>
      <button className={style.button} onClick={() => { step(1) }}>Increment</button>
      <button className={style.button} onClick={() => { step(-1) }}>Decrement</button>
      <p className={style.count}>{count}</p>
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
