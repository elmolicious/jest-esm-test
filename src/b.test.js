import { getCurrentState } from './b.js'

describe('b', () => {
  describe('getCurrentState', () => {
    it('it should return 5', () => {
      expect(getCurrentState()).toBe(5);
    })
  })
})
