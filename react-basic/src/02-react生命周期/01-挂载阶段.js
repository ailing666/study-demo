import React from 'react'
class App extends React.Component {
  // constructor只在创建组件时执行一次
  constructor() {
    super()
    console.log('constructor')
  }

  // 在DOM渲染完成后触发
  componentDidMount () {
    console.log('componentDidMount')
  }

  state = {
    count: 0
  }

  // 每次组件渲染都会触发
  render () {
    console.log('render')
    return (
      <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>{this.state.count}</button>
    )
  }
}

export default App