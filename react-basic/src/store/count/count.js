
// 3. 引入 makeAutoObservable 钩子
import { makeAutoObservable } from 'mobx'
// 1. 创建 Count 类
class Count {

  // 2. 定义数据状态
  count = 0

  // 4. 在 constructor 中调用 makeAutoObservable 并传入 this，使数据成为响应式
  constructor() {
    makeAutoObservable(this)
  }

  // 5. 定义修改数据的方法
  addCount = () => {
    this.count++
  }
}

// 6. 实例化 Count 类并导出实例
const countStore = new Count()
export default countStore