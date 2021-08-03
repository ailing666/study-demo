// 引入node中的fs模块 
const fs = require('fs');
const { finished } = require('stream');

// const obj = {}

// // 异步读取文件
// fs.readFile('./promise-study/name.txt', 'utf8', function (err, data) {
//   obj.name = data
// })

// fs.readFile('./promise-study/age.txt', 'utf8', function (err, data) {
//   obj.age = data
// });

// // 希望将拿到的数据添加到obj
// console.log(obj);

let event = {
  // 将订阅的回调函数存起来
  _arr: [],
  data: {},
  // 订阅
  on(fn) {
    this._arr.push(fn);
  },
  // 发布
  emit(key, value) {
    this.data[key] = value;
    //让存储的函数依次执行
    this._arr.forEach(fn => fn(this.data))
  }
}
// 订阅第一次
event.on((data) => {
  console.log('收到了一个数据', data)
})
// 订阅第二次
event.on((data) => {
  // 定义结束订阅的次数
  if (Reflect.ownKeys(data).length === 3) {
    console.log('收到了全部数据', data)
  }
})
fs.readFile('./promise-study/name.txt', 'utf8', function (err, data) {
  event.emit('name', data)
})

fs.readFile('./promise-study/age.txt', 'utf8', function (err, data) {
  event.emit('age', data)
});
setTimeout(() => {
  event.emit('money', 20000)
}, 2000)
/**
 * 收到了一个数据 { name: 'loveZero' }
 * 收到了一个数据 { name: 'loveZero', age: '18' }
 * 收到了一个数据 { name: 'loveZero', age: '18', money: 20000 }
 * 收到了全部数据 { name: 'loveZero', age: '18', money: 20000 }
 */