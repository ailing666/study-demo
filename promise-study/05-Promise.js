/**
 * Promise是一个类 我们可以new Promise 创造一个实例
 * Promise 有三个状态 ：1.默认状态叫等待态 pending
 *                    2.resolve表示成功态 fulfilled
 *                    3.reject表示变成失败态 rejected
 * 只有在pending的状态的时候才能改变状态，  不能从成功变成失败 ， 不能从失败变成成功
 * 成功有成功的原因 失败同样也有失败的原因 , 除了调用resolve和reject能改变状态外，还可以使用throwerror 抛出异常也会执行到失败的逻辑
 */

// 工资
// const money = 9999
// const bugPhone = new Promise((resolve, reject) => {
//   if (money > 10000) {
//     resolve('有钱，买！')
//   } else {
//     reject('我先给我买手机了')
//   }
// })
// // then方法中提供两个参数 1. 成功回调 2.失败的回调
// bugPhone.then((value) => {
//   console.log(value, 'success')
// }, (reason) => {
//   console.log(reason, 'fail')
// })

// // 既调用resolve，又调用reject
// // 只会指定第一个，因为状态无法再改变
// const promise = new Promise((resolve, reject) => {
//   resolve('ok')
//   reject('error')
// })
// promise.then((value) => {
//   console.log(value, 'success')
// }, (reason) => {
//   console.log(reason, 'fail')
// })

// // 失败状态的方法reject和throw new Error都可以变为失败态
// const promise2 = new Promise((resolve, reject) => {
//   // reject('error')
//   throw new Error('error')
// })
// promise2.then((value) => {
//   console.log(value, 'success')
// }, (reason) => {
//   console.log(reason, 'fail')
// })

// const promise3 = new Promise((resolve, reject) => {
//   resolve('ok')
// }).then(data => {
//   return new Promise((resolve, reject) => {
//     // 返回一个promise，并是成功态
//     resolve('ok')
//   })
// }).then((data) => {
//   console.log(data); // 进入成功
// }, err => {
//   console.log('err', err)
// })

// const promise4 = new Promise((resolve, reject) => {
//   resolve('ok')
// }).then(data => {
//   return new Promise((resolve, reject) => {
//     // 返回一个promise，并是失败态，或异常
//     // reject('err')
//     throw new Error('error')
//   })
// }).then((data) => {
//   console.log(data);
// }, err => {
//   console.log('err', err) // 进入失败
// })

// const promise5 = new Promise((resolve, reject) => {
//   resolve('ok')
// }).then(data => {
//   // 返回一个非promise
//   return 666
// }).then((data) => {
//   console.log(data); // 直接进入成功
// }, err => {
//   console.log('err', err)
// })

// 问题1 循环引用的问题
// let promise6 = new Promise((resolve, reject) => {
//   resolve('ok')
// }).then(data => {
//   return promise6;// prending resolve()/reject()
// })
// promise6.then((data) => {
//   console.log(data);
// }, err => {
//   console.log('err', err) // err [TypeError: Chaining cycle detected for promise #<Promise>]
// })

let promise7 = new Promise((resolve, reject) => {
  reject('err')
  // 当then里没有传任何值的时候，最后一个then用的依然是第一次传入的值
}).then().then().then((data) => {
  console.log(data);
}, err => {
  console.log('err', err)
})