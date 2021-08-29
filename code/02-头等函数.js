function add (a, b) {
  return a + b
}

// 可以给变量赋值
let add1 = add

// 可以作为参数
function exec (fn, a, b) {
  return fn(a, b)
}

exec(add, 1, 2)

// 可以作为返回值
function exec2 (fn) {
  return function (a, b) {
    return fn(a, b)
  }
}
exec2(add)(1, 2)
