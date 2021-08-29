const { compose } = require('lodash/fp')

// Pointed
let money = 500
// 买车
money -= 100
// 买房
money -= 200
console.log(money)

// PointedFree
let money2 = 500

function buyHouse (money) {
  return money - 200
}
function buyCar (money) {
  return money - 100
}
let fn = compose(buyHouse, buyCar)
console.log(fn(money2))
