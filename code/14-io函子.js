let { compose } = require('lodash/fp')

let localStorage = {
  getItem (key) {
    if (key === 'data') {
      return `{"code":"0","userId":"1"}`
    } else if (key === '1') {
      return `{"userId":"1","name":"loveZero"}`
    }
  }
}
// 函子
class IO {
  constructor (value) {
    this.value = value
  }

  map (fn) {
    // compose吧this.value和fn组合成一个新的函数
    return new IO(compose(fn, this.value))
  }
  flatMap (fn) {
    return new IO(compose(x => x.value(), fn, this.value))
  }
  start (callback) {
    callback(this.value())
  }
}
// 输入有副作用
const readByKey = key => new IO(() => localStorage.getItem(key))
// 无副作用
const parseJSON = str => JSON.parse(str)
// 输出，有副作用
const write = console.log
// IO函子通过推迟执行的方式实现对副作用的管理和隔离
readByKey('data') // 拿到数据‘data’
  .map(parseJSON) // 转json
  .map(x => x.userId) // 拿到对应的userId
  .flatMap(readByKey) // 取出对应userId=1的字段
  .map(parseJSON) // 转json
  .start(write) // 什么时候调start，什么时候执行
