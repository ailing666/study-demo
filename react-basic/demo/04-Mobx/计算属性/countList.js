import { makeAutoObservable } from 'mobx'
class CountList {
  list = [1, 2, 3, 4, 5]

  constructor() {
    makeAutoObservable(this)
  }

  // 使用 get 方法定义计算属性
  get filterList () {
    return this.list.filter(item => item > 2)
  }
}

const countList = new CountList()
export default countList