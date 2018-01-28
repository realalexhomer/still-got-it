import { expect } from 'chai'
import reducer from './reducer'
import { counterStep } from './actions'

describe('Counter', () => {
  describe('CounterReducer', () => {
    let counterStore = reducer(undefined, {})

    it('should initialize the store with a count of 0', () => {
      expect(counterStore.count).to.equal(0)
    })

    it('should increment or decrement the count by the number of steps provided', () => {
      counterStore = reducer(counterStore, counterStep(1))

      expect(counterStore.count).to.equal(1)

      counterStore = reducer(counterStore, counterStep(-100))

      expect(counterStore.count).to.equal(-99)
    })
  })
})
