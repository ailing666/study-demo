import React from 'react'
// 函数组件默认值
function SonF ({ pageSize = 10 }) {
  return (
    <div>{pageSize}</div>
  )
}

class SonC extends React.Component {
  // 类组件默认值
  static defaultProps = {
    pageSize: 10
  }
  render () {
    return (
      <div>{this.props.pageSize}</div >
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <>
        <SonF></SonF>
        <SonC></SonC>
        {/* <SonF pageSize={20}></SonF>
        <SonC pageSize={20}></SonC> */}
      </>
    )
  }
}

export default App