import React from 'react'
import countStore from './count.Store'
import listStore from './list.Store'
// 创建根模块
class RootStore {
  // 在 constructor 中将子模块分别挂载到 this 上
  constructor() {
    this.countStore = countStore
    this.listStore = listStore
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore } 