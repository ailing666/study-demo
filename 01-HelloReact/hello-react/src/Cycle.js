import React, { Component } from 'react'
class Son extends Component {
  render () {
    return <h2>我是Son组件</h2>
  }

  componentWillUnmount () {
    console.log('调用了Son的componentWillUnmount方法')
  }
}

export default class Cycle extends Component {
  constructor () {
    console.log('constructor')
    super()

    this.state = {
      counter: 0,
      isShow: true
    }
  }
  render () {
    console.log('render')
    return (
      <div>
        Cycle
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <hr />
        <button onClick={e => this.changeCpnShow()}>切换</button>
        {this.state.isShow && <Son></Son>}
      </div>
    )
  }
  increment () {
    this.setState({ counter: this.state.counter + 1 })
  }
  changeCpnShow () {
    this.setState({ isShow: !this.state.isShow })
  }

  componentDidMount () {
    console.log('componentDidMount方法')
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate方法')
  }
}
