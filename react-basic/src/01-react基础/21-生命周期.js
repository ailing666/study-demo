import React from 'react'
class SonC extends React.Component {
  // 卸载 - 组件销毁时候
  componentWillUnmount () {
    console.log('componentWillUnmount')
  }
  render () {
    return (
      <div>SonC</div>
    )
  }
}
class App extends React.Component {
  // 挂载 - 只在创建组件时执行一次
  constructor() {
    super()
    console.log('constructor')
  }

  // 挂载 - 在DOM渲染完成后触发
  componentDidMount () {
    console.log('componentDidMount')
  }
  // 更新 - 每次组件渲染都会触发
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  state = {
    flag: true
  }

  // 挂载/更新 - 每次组件渲染都会触发
  render () {
    let { flag } = this.state
    console.log('render')
    return (
      <>
        <button onClick={() => { this.setState({ flag: !flag }) }}>{flag ? '存在' : '不存在'}</button>
        {flag ? <SonC></SonC> : null}
      </>
    )
  }
}

export default App