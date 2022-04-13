import LoginStore from './login.Store'
import React from 'react'
class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const rootStore = React.createContext(new RootStore())
export const useStore = () => React.useContext(rootStore)