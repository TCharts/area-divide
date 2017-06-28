# area-divide

> Divide an area by the percentage.

[![Build Status](https://travis-ci.org/tcharts/area-divide.svg?branch=master)](https://travis-ci.org/tcharts/area-divide) [![Coverage Status](https://coveralls.io/repos/github/tcharts/area-divide/badge.svg)](https://coveralls.io/github/tcharts/area-divide)


## Usage

> **npm i --save area-divide**


```js
var areaDivide = require('area-divide');

var data = [5, 5, 5];
areaDivide(100, 50, data);

// will get array like below:
[{
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
}]
```


## License

ISC@[ProtoTeam](https://github.com/ProtoTeam).

