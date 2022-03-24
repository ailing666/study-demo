import React from 'react'

// 函数子组件
function SonF (props) {
  return <div>SonF,{props.msg}</div>
}

// 类子组件
class SonC extends React.Component {
  render () {
    return <div>SonC,{this.props.msg}</div>
  }
}

// 父组件
class App extends React.Component {
  state = {
    msg: '父组件值'
  }
  render () {
    return (
      <div>
        <SonF msg={this.state.msg}></SonF>
        <SonC msg={this.state.msg}></SonC>
      </div>
    )
  }
}

export default App
