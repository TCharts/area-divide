var areaDivide = require('./');
var expect = require('expect');

describe('area-divide', function() {
  it('1. areaDivide, 3 element.', function() {
    var data = [0.4, 0.3, 0.3];

    expect(areaDivide(100, 50, data)).toEqual([{
      x1: 0,
      y1: 0,
      x2: 40,
      y2: 50,
    }, {
      x1: 40,
      y1: 0,
      x2: 100,
      y2: 25,
    }, {
      x1: 40,
      y1: 25,
      x2: 100,
      y2: 50,
    }]);
  });

  it('2. areaDivide, 4 element.', function() {
    var data = [0.4, 0.2, 0.2, 0.2];

    expect(areaDivide(100, 60, data)).toEqual([{
      x1: 0,
      y1: 0,
      x2: 40,
      y2: 60,
    }, {
      x1: 40,
      y1: 0,
      x2: 100,
      y2: 20,
    }, {
      x1: 40,
      y1: 20,
      x2: 70,
      y2: 60,
    }, {
      x1: 70,
      y1: 20,
      x2: 100,
      y2: 60,
    }]);
  });

  it('3. areaDivide, 5 element.', function() {
    var data = [0.2, 0.2, 0.2, 0.2, 0.2];

    expect(areaDivide(100, 100, data)).toEqual([{
      x1: 0,
      y1: 0,
      x2: 20,
      y2: 100,
    }, {
      x1: 20,
      y1: 0,
      x2: 100,
      y2: 25,
    }, {
      x1: 20,
      y1: 25,
      x2: 47,
      y2: 100,
    }, {
      x1: 47,
      y1: 25,
      x2: 100,
      y2: 62,
    }, {
      x1: 47,
      y1: 62,
      x2: 100,
      y2: 100,
    }]);
  });
});