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

// 实例化 rootStore
const rootStore = new RootStore()
// 将 rootStore 作为参数传入 createContext钩子
const context = React.createContext(rootStore)
// 通过 useContext 拿到 rootStore 的实例对象然后返回
const useStore = () => React.useContext(context)

export { useStore } 