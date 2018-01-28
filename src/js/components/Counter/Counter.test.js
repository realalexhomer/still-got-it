import { expect } from 'chai'
import reducer from './reducer'
import { counterStep } from './actions'

describe('Counter', () => {
  describe('CounterReducer', () => {
    let counterStore = reducer(undefined, {})

    it('should start with a counterNumber of 0', () => {
      expect(counterStore.counterNumber).to.equal(0)
    })

    it('should increment or decrement by the number of steps provided', () => {
      counterStore = reducer(counterStore, counterStep(1))

      expect(counterStore.counterNumber).to.equal(1)

      counterStore = reducer(counterStore, counterStep(-100))

      expect(counterStore.counterNumber).to.equal(-99)
    })
  })
})
