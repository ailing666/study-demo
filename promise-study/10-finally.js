
// // finally 不管成功还是失败都会执行
// // finally 如果返回的是一个promise那么会有等待效果
// Promise.reject('err').finally((f) => {
//   // 没有参数
//   console.log('无论成功失败都执行', f)
//   // return 一个普通值没有意义
//   return 'finally'
// }).then((data) => {
//   console.log('成功', data)
// }).catch(err => {
//   console.log('失败', err)
// });

// Promise.resolve('ok').finally((f) => {
//   console.log('无论成功失败都执行', f)
// }).then((data) => {
//   console.log('成功', data)
// }).catch(err => {
//   console.log('失败', err)
// });

// Promise.reject('ok').finally(() => {
//   console.log('无论成功失败都执行')
//   // return一个promise
//   // 如果返回的promise里是失败状态，就会进入失败，并用返回的promise失败的原因
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('finally reject')
//     }, 1000);
//   });
// }).then((data) => {
//   console.log('成功', data)
// }).catch(err => {
//   console.log('失败', err)
// });

// Promise.reject('ok').finally(() => {
//   console.log('无论成功失败都执行')
//   // return一个promise
//   // 如果返回的promise里是成功状态，掉用finally的promise是失败状态，还是会进入reject
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('finally resolve')
//     }, 1000);
//   });
// }).then((data) => {
//   console.log('成功', data)
// }).catch(err => {
//   console.log('失败', err)
// });

Promise.resolve('ok').finally(() => {
  console.log('无论成功失败都执行')
  // return一个promise
  // 如果返回的promise里是成功状态，调用finally的promise是成功状态，进入resolve，并用调用finally的promise成功原因
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('finally resolve')
    }, 1000);
  });
}).then((data) => {
  console.log('成功', data)
}).catch(err => {
  console.log('失败', err)
});

// Promise.resolve('ok').finally(() => {
//   console.log('无论成功失败都执行')
//   // return一个promise
//   // 如果返回的promise里是成功状态，调用finally的promise是成功状态，进入resolve，并用调用finally的promise成功原因
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('finally reject')
//     }, 1000);
//   });
// }).then((data) => {
//   console.log('成功', data)
// }).catch(err => {
//   console.log('失败', err)
// });

Promise.prototype.finally = function (cb) {
  return this.then((y) => {
    // 使用Promise.resolve是因为需要有等待功能
    // 成功就直接进then，但使用的原因是外层的原因
    return Promise.resolve(cb()).then((d) => y);
  }, (r) => {
    //cb执行一旦报错 就直接跳过后续的then的逻辑，直接将错误向下传递
    return Promise.resolve(cb()).then(() => { throw r })
  })
}