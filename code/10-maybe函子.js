// 可以过滤空值
class Maybe {
  constructor (value) {
    this.value = value
  }
  static of (value) {
    return new Maybe(value)
  }
  map (fn) {
    return this.value ? new Maybe(fn(this.value)) : this
  }
}

let res = Maybe.of(null).map(x => x.toString())

console.log('Maybe: ', res.value)
