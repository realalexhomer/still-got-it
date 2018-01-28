import chai from 'chai'

describe('Array', () => {
  it('should start empty', () => {
    const arr = []

    chai.assert.equal(arr.length, 0)
  })
})
