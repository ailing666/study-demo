// let promise = new Promise((resolve, reject) => {
//   resolve('ok')
// }).then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve('ok')
//         }, 2000);
//       }));
//     }, 1000);
//   })
// })
// promise.then((data) => {
//   console.log(data);
// }, err => {
//   console.log('err', err)
// })

const myPromise2 = require('./myPromise2')
let p = new myPromise2((resolve, reject) => {
  reject('ok')
}).then().then().then((data) => {
  console.log(data);
}, err => {
  console.log(err, 'err')
})