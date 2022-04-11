import React from 'react'

// 组件A
function SonA (props) {
  return <div>
    这里是A组件---{props.msg}
  </div>
}

// 组件B
function SonB (props) {
  return <div>
    {/* 将数据传递给父组件 */}
    <button onClick={() => props.appF('向A组件传数据')}>向A组件传数据</button>
  </div>
}
// 父组件
class App extends React.Component {
  state = {
    msg: ''
  }
  // 接受B组件传来的数据
  appF = (sonMsg) => {
    this.setState({
      msg: sonMsg
    })
  }
  render () {
    return (
      <div>
        {/* 传递给A组件数据 */}
        <SonA msg={this.state.msg}></SonA>
        {/* 传递给B组件接受数据的方法 */}
        <SonB appF={this.appF}></SonB>
      </div>
    )
  }
}

export default App
