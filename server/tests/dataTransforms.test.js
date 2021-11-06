const { formatStyles } = require('../helpers/dataTransforms');
const { mockAPIData, expected } = require('./mockData/mockData');

describe('dataTransforms', () => {
  describe('formatStyles()', () => {
    it('should format styles properly', () => {
      const actual = formatStyles(mockAPIData);
      expect(actual).toEqual(expected);
    });
  });
});
