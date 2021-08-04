const myPromise = require('./myPromise')
let promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    // throw new Error('error')
    reject('error');
    resolve('ok')
    // return new Error('失败')
  }, 1000);
})

promise.then((value) => {
  console.log(value, 'success')
}, (reason) => {
  console.log(reason, 'fail')
})
