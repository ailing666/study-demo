// 默认值处理,内部有两个值，左值只会在右值不存在时起作用
class Either {
  constructor (left, right) {
    this.left = left
    this.right = right
  }
  static of (left, right) {
    return new Either(left, right)
  }
  map (fn) {
    // 当右边值存在时，用右边的值，当右边值不存在时，用左边的默认值
    return this.right
      ? Either.of(this.left, fn(this.right))
      : Either.of(fn(this.left), this.right)
  }
  get value () {
    return this.right || this.left
  }
}

let res = { name: 'loveZero', age: 18 }
let res2 = { name: 'loveZero', age: null }
let either = Either.of(20, res.age).map(x => `年龄:${x}`)
let either2 = Either.of(20, res2.age).map(x => `年龄:${x}`)
console.log('either: ', either.value) // either:  年龄:18
console.log('either: ', either2.value) // either:  年龄:20
