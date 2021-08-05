const myPromise3 = require('./myPromise3')
Promise.resolve会等待异步任务执行完毕再进入resolve
myPromise3.resolve(new myPromise3((resolve, reject) => {
  setTimeout(() => {
    resolve('hello', 'success');
  }, 2000);
})).then(data => {
  console.log(data); // hello
})
// Promise.reject会直接进入catch
myPromise3.reject(new myPromise3((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 1000);
})).catch(err => {
  console.log('err', err); // err Promise { <pending> }
})

// Promise.resolve('ok').then(data => {
//   console.log(data); // ok
// })
// // Promise.reject会直接进入catch
// Promise.reject('失败').catch(err => {
//   console.log('err', err); // 失败
// })
