import { getCurrentState } from './a'

describe('a', () => {
  describe('getCurrentState', () => {
    it('it should return 5', () => {
      expect(getCurrentState()).toBe(5);
    })
  })
})
