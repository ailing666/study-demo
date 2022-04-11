// 引入createContext
import React, { createContext } from 'react'
// 导出 Provider 和 Consumer对象
const { Provider, Consumer } = createContext()
// 组件A
function SonA () {
  return <SonB></SonB>
}

// 组件B
function SonB () {
  return (
    // 用Consumer包裹取数据，固定写法{value => /* 基于 context 值进行渲染*/}
    <Consumer>
      {value => <div>{value}</div>}
    </Consumer>
  )
}
// 父组件
class App extends React.Component {
  state = {
    msg: 'APP'
  }

  render () {
    return (
      // 用Provider包裹组件
      <Provider value={this.state.msg}>
        <SonA></SonA>
      </Provider>
    )
  }
}

export default App
