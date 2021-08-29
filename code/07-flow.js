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
function add4 (str) {
  return str + 4
}

function flow (...fns) {
  // fns是传入的参数伪数组，如果函数的参数如果是一个，就直接返回
  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduceRight((a, b) => (...args) => a(b(...args)))
}

function flowRight (...fns) {
  // fns是传入的参数伪数组，如果函数的参数如果是一个，就直接返回
  if (fns.length === 1) {
    return fns[0]
  }

  return fns.reduce((a, b) => (...args) => a(b(...args)))
}

// 从左到右
let flowed = flow(add1, add2, add3, add4)
let flowed2 = flowRight(add1, add2, add3, add4)
console.log(flowed(str))
console.log(flowed2(str))

/*
fns.reduceRight((a, b) => (...args) => a(b(...args)))
第一次执行
a = add4,b=add3 => (str) => add4(add3(str)))
第二次执行
a = add4(add3(str))),b = add2 => add4(add3(add2(str))))
第二次执行
a = add4(add3(add2(str)))),b = add1 =>  add4(add3(add2(add1(str)))))
*/
