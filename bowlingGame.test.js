const {getScore, bestScore} = require('./bowlingGame');

describe('Bowling Game: Sample test cases', () => {
  describe('Test cases for getScore', () => {
    it('should return the score of the game', () => {
      let result = getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
      expect(result).toEqual(90);
    });
    it('should return the score of the game', () => {
      let result = getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
      expect(result).toEqual(30);
    });
    it('should return the score of the game', () => {
      let result = getScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(result).toEqual(16);
    });
  });

  describe('Test cases for bestScore', () => {
    it('should return the max score out of all games', () => {
      let result = bestScore([
        [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 
        [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]);
      expect(result).toEqual(90);
    });
  });
});