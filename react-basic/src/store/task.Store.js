
import { makeAutoObservable } from 'mobx'
class TaskStore {
  list = [
    {
      id: 1,
      name: '学习react',
      isDone: true
    },
    {
      id: 2,
      name: '搞定mobx',
      isDone: false
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }

  allCheck = (e) => {
    this.list.forEach(item => item.isDone = e.target.checked)
  }

  // 单选功能
  setIsDone = (id) => {
    let res = this.list.find(item => item.id === id)
    res.isDone = !res.isDone
  }
}
export default TaskStore
