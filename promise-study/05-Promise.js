/**
 * Promise是一个类 我们可以new Promise 创造一个实例
 * Promise 有三个状态 ：1.默认状态叫等待态 pending
 *                    2.resolve表示成功态 fulfilled
 *                    3.reject表示变成失败态 rejected
 * 只有在pending的状态的时候才能改变状态，  不能从成功变成失败 ， 不能从失败变成成功
 * 成功有成功的原因 失败同样也有失败的原因 , 除了调用resolve和reject能改变状态外，还可以使用throwerror 抛出异常也会执行到失败的逻辑
 */

// 工资
const money = 9999
const bugPhone = new Promise((resolve, reject) => {
  if (money > 10000) {
    resolve('有钱，买！')
  } else {
    reject('我先给我买手机了')
  }
})
// then方法中提供两个参数 1. 成功回调 2.失败的回调
bugPhone.then((value) => {
  console.log(value, 'success')
}, (reason) => {
  console.log(reason, 'fail')
})