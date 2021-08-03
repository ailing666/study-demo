// 柯里化的概念： 如果一个函数有多个参数,可以根据参数的个数 转化成n个函数,参数是一个一个的传递的
// 偏函数： 根据参数的个数 分解成函数，每次调用函数的参数个数可以不是一个



// 求和函数
function sum(a, b, c, d) {
  return a + b + c + d
}
let res = sum(1, 2, 3, 4)
console.log(res);
// 需求：将上述函数变为柯里化函数
// res = sum(1)(2)(3)(4)
function curring(fn) {
  // 这里用来记录参数的个数, 记录每次调用传入的总个数
  let args = [];
  const inner = (arr = []) => { // 每次调用的个数
    // 将参数存起来
    args.push(...arr);
    // 如果参数个数比要接受的小，就继续调用inner，当等于的时候，就掉用函数
    return args.length >= fn.length ? fn(...args) : (...args) => inner(args)
  }
  return inner();
}
res = curring(sum)(1)(2)(3)(4);
console.log(res);

// 实现一个函数，传入变量和类型，判断是否是这个类型
function isType(type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}
let isString = curring(isType)('String');
let isNumber = curring(isType)('Number')
let isBoolean = curring(isType)('Boolean');

console.log(isString(123));
console.log(isNumber(456));
console.log(isBoolean(123));