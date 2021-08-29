function add (a, b, c) {
  return a + b + c
}
// 柯里化函数
function curry (fn) {
  // 函数形参个数
  let argsLength = fn.length
  let curried = (...args) => {
    // 如果传入的参数小于形参的个数
    if (args.length < argsLength) {
      // 将传入的参数和参数后的第一个参数作为参数，递归调用curried
      return (...rest) => curried(...args, ...rest)
    }
    // 如果传入的参数不小于形参的个数，就将所有参数传入返回函数调用值
    return fn(...args)
  }
  return curried
}
let curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3))
