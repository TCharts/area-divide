var areaDivide = require('./');
var expect = require('expect');

describe('area-divide', function() {
  it('1. areaDivide', function() {
    expect(areaDivide(100, 50, [5, 5, 5])).toEqual([{
      x1: 0,
      y1: 0,
      x2: 33,
      y2: 33,
    }, {
      x1: 33,
      y1: 0,
      x2: 100,
      y2: 25,
    }, {
      x1: 33,
      y1: 25,
      x2: 100,
      y2: 50,
    }]);
  });
});