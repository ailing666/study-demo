import { makeAutoObservable } from 'mobx'
// ListStore 模块
class ListStore {
  list = [1, 2, 3, 4, 5]

  constructor() {
    makeAutoObservable(this)
  }

  addList = () => {
    this.list.push(6, 7, 8)
  }
}

const listStore = new ListStore()
export default listStore