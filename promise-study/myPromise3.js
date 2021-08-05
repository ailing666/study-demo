const PENDING = 'PENDING'; // 默认等待态
const FULFILLED = 'FULFILLED'; // 成功态 
const REJECTED = 'REJECTED'; // 失败态

// 处理promise逻辑的函数
/**
 * 1.x是一个promise，会根据promise的成功或失败来调用 resolve还是reject
 * 2.x是一个非promise，统统调用resolve
 * 3.x是抛出异常，进入reject
 * 4.x和promise2不能一样，会出现循环引用
 * 5.resolve和reject都只能调用一次
 * @param {返回的promise} x 
 * @param {new的新} promise2 
 * @param {成功方法} resolve 
 * @param {失败方法} reject 
 * @returns 
 */
function resolvePromise(x, promise2, resolve, reject) {

  // 如果返回的x和上一个promise2是同一个promise，就产生循环引用抛出异常
  if (x === promise2) {
    return reject(new TypeError('循环引用'))
  }
  // 判断返回的x是否是一个promise(promsise需要有then方法)
  // 可能是一个名为promise的对象，或者是一个自定义的promise函数
  if ((typeof x === 'object' && x !== null) || (typeof x == 'function')) {
    // 记录状态是否改变
    let called = false;
    try {
      // 获取返回的then方法
      let then = x.then;
      if (typeof then === 'function') {
        // 因为返回的有可能还是一个promise
        // 所以需要递归调用resolvePromise，处理返回的值，知道这个值是普通值
        // 使用then.call(x)而不是x.then是因为x.then会在获取一次then方法，触发了get，出现不必要的bug
        then.call(x, (y) => {
          // 如果状态改变了，就不往下走
          if (called) return;
          // 执行到这里说明状态没有被改变，就标记为已改变
          called = true
          // 这里说明返回的promise是成功状态
          resolvePromise(y, promise2, resolve, reject)
        }, (r) => {
          // 如果状态改变了，就不往下走
          if (called) return;
          // 执行到这里说明状态没有被改变，就标记为已改变
          called = true
          // 这里是失败，直接走失败
          reject(r);
        })
      } else {
        // 进到这里可能是{then:1}，非promise值直接进成功
        resolve(x);
      }
    } catch (error) {
      // 如果状态改变了，就不往下走
      if (called) return;
      // 执行到这里说明状态没有被改变，就标记为已改变
      called = true
      //  让promise2 变成失败态
      reject(error)
    }
  } else {
    // 进这里，说明x是一个非promise，直接调用resolve
    resolve(x);
  }
}

class Promise {
  constructor(executor) {
    // 默认状态改为PENDING
    this.status = PENDING;
    // 储存传入的成功值
    this.value = undefined;
    // 储存传入的失败
    this.reason = undefined;
    // 用户调用resolve和reject,可以将对应的结果暴露在当前的promise实例上，存起来
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    // 成功方法
    const resolve = (value) => {
      // 看resolve中是否是一个promise
      if (value instanceof Promise) {
        // 如果是，就手动掉用then方法。递归知道他不是一个promise
        return value.then(resolve, reject);
      }
      // 只有等待态才能改变状态
      if (this.status === PENDING) {
        // 将传入的值赋给value
        this.value = value
        // 将状态改为成功
        this.status = FULFILLED
        // 执行储存的成功回调
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败方法
    const reject = (reason) => {
      // 只有等待态才能改变状态
      if (this.status === PENDING) {
        // 将传入的值赋给value
        this.reason = reason
        // 将状态改为失败
        this.status = REJECTED
        // 执行储存的失败回调
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      // 默认new Promise中的函数会立即执行
      executor(resolve, reject);
    } catch (e) {
      // 如果执行时出错,将错误传递到reject中,执行到了失败的逻辑
      reject(e)
    }
  }
  // then方法
  then(onFulfilled, onRejected) {
    // 这里是then()如果传空值，就使用上一个的值
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : v => v;
    onRejected = typeof onRejected == 'function' ? onRejected : e => { throw e };
    // 由于promise状态无法修改，所以不能使用同一个promise
    // 实现链式调用不能return this
    // 每次调用then方法 都必须返回一个全新的promise
    let promise2 = new Promise((resolve, reject) => {
      switch (this.status) {
        // 成功时
        case FULFILLED:
          // 因为需要promise2做参数，所以需要异步调用
          setTimeout(() => {
            try {
              // x 就是上一个then成功或者失败的返回值，这个x决定proomise2 走成功还是走失败
              let x = onFulfilled(this.value)
              // 处理函数
              resolvePromise(x, promise2, resolve, reject)
            } catch (e) {
              // 如果出错，直接就走失败
              reject(e)
            }
          }, 0)
          break;
        // 失败时
        case REJECTED:
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(x, promise2, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
          break;
        default:
          // 等待时
          this.onResolvedCallbacks.push(() => {
            setTimeout(() => {
              try {
                // 将成功函数push到成功回调队列
                let x = onFulfilled(this.value);
                resolvePromise(x, promise2, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })
          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              try {
                // 将成功函数push到失败回调队列
                let x = onRejected(this.reason);
                resolvePromise(x, promise2, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })
          break;
      }
    })
    // 返回新的promise，供链式调用
    return promise2;
  }
  catch(errFn) {
    return this.then(null, errFn);
  }
  // 静态方法resolve
  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    })
  }
  // 静态方法reject
  static reject(err) {
    return new Promise((resolve, reject) => {
      reject(err);
    })
  }
  static all(promises) {
    return new Promise((resolve, reject) => {
      // 将数组中的promise依次执行 
      let result = [];
      let index = 0;
      // 处理函数
      function process(v, k) {
        // 将函数与索引映射
        result[k] = v;
        if (++index === promises.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < promises.length; i++) {
        let p = promises[i];
        // 判断p是否是promsie
        if (p && typeof p.then === 'function') {
          p.then(data => {
            process(data, i)
          }, reject) // 只要有一个失败，就直接调reject
        } else {
          // 说明不是promise
          process(p, i)
        }
      }
    })
  }
}


// 官方提供的测试静态方法
// npm install promises-aplus-tests -g;
Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd
}
module.exports = Promise