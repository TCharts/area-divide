/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


/**
 * 通过 data 数据划分 width，height 的数组
 * 最后返回一个瓜分的数组
 * @param width
 * @param height
 * @param data
 [
   {value:335, name:'直接访问'},
   {value:310, name:'邮件营销'},
   {value:274, name:'联盟广告'},
   {value:235, name:'视频广告'},
   {value:400, name:'搜索引擎'},
 ]
 或者
 [335, 310, 274, 235, 400]
 *
 * @returns {Array}
 * @constructor
 *
 *  +-------------------+------------+
 *  |                   |    B:10%   |
 *  |                   |            |
 *  |                   |------------+
 *  |       A:75%       |            |
 *  |                   |    C:20%   |
 *  |                   |            |
 *  +-------------------+------------+
 *
 */
function AreaDivide(width, height, data) {
  // TODO
  return [{
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
  }];
}

module.exports = AreaDivide;