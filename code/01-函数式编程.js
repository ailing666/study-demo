// 面向过程
// 从上到下一行行执行，一行行写
let a = 1
let b = 2
let res1 = a + b
console.log(res1)

// 面向对象
class Calculaor {
  add (a, b) {
    return a + b
  }
}
let c = new Calculaor()
console.log(c.add(1, 2))

// 函数式编程
function addNum (a, b) {
  return a + b
}
let res2 = add(1, 2)
console.log(res2)
