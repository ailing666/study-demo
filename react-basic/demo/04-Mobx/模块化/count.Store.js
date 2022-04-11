import { makeAutoObservable } from 'mobx'
// CountStore模块
class CountStore {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  addCount = () => {
    this.count++
  }
}

const countStore = new CountStore()
export default countStore