import React from 'react'
import LoginStore from './login.Store'
import UserStore from './user.Store'
import ChannelStore from './channel.Store'

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
    this.channelStore = new ChannelStore()
  }
}

const rootStore = React.createContext(new RootStore())
export const useStore = () => React.useContext(rootStore)