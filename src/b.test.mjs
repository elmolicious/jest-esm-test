import { getCurrentState } from './b'

describe('b', () => {
  describe('getCurrentState', () => {
    it('it should return 5', () => {
      expect(getCurrentState()).toBe(5);
    })
  })
})
