
const PENDING = 'PENDING'; // 默认等待态
const FULFILLED = 'FULFILLED'; // 成功态 
const REJECTED = 'REJECTED'; // 失败态
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
    switch (this.status) {
      case FULFILLED:
        // 成功时
        onFulfilled(this.value)
        break;
      case REJECTED:
        // 失败时
        onRejected(this.reason)
        break;
      default:
        // 等待时
        this.onResolvedCallbacks.push(() => {
          // 将成功函数push到成功回调队列
          onFulfilled(this.value)
        })
        this.onRejectedCallbacks.push(() => {
          // 将成功函数push到失败回调队列
          onRejected(this.reason);
        })
        break;
    }
  }
}
module.exports = Promise