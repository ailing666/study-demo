let _ = require('lodash')
let str = 'hello'
function add1 (str) {
  return str + 1
}

function add2 (str) {
  return str + 2
}

function add3 (str) {
  return str + 3
}
// 从左到右
let flowed = _.flow(add1, add2, add3)
// 从右到左
let flowed2 = _.flowRight(add3, add2, add1)
console.log(flowed(str))
console.log(flowed2(str))
