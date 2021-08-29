// 纯函数
// function add (a, b) {
//   return a + b
// }

// // 非纯函数
// let c = 1
// let d = 2
// function add2 (a, b) {
//   // 修改了外部变量
//   d++
//   // 返回值依赖了外部变量
//   return a + b + c
// }
// add2()
// console.log(d)

// 可缓存
function add (a, b) {
  console.log('执行了')
  return a + b
}
// 相同参数调用3次，函数会执行3次
// console.log(add(1, 2))
// console.log(add(1, 2))
// console.log(add(1, 2))

/*打印结果
  执行了
  3
  执行了
  3
  执行了
  3
 */
// 缓存
function memoize (fn) {
  // 深拷贝参数
  const resolver = (...args) => JSON.stringify(args)
  // 定义缓存对象，存放参数和结果的对应关系
  let cache = {}
  return (...args) => {
    // 将传入的参数作为key
    const key = resolver(...args)
    // 如果cache中对应参数已经有值了，就直接返回值，否则就将函数调用该值的结果存入缓存中
    return cache[key] ? cache[key] : (cache[key] = fn(...args))
  }
}
// 缓存add函数
const memoizeAdd = memoize(add)
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(1, 2))
console.log(memoizeAdd(1, 2))
/*打印结果
  执行了
  3
  3
  3
 */
