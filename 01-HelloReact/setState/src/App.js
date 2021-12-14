import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'Hello World'
    }
  }

  render () {
    return (
      <div>
        <h2>当前计数: {this.state.message}</h2>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }
  componentDidUpdate () {
    // 方式二: 获取异步更新的state
    console.log(this.state.message)
  }
  changeText () {
    this.setState(
      {
        message: '你好'
      },
      e => {
        console.log(this.state.message)
      }
    )
  }
}
