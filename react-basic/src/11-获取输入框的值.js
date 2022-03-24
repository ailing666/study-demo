// 引入createRef方法
import React, { createRef } from 'react'
class HelloC extends React.Component {
  // 调用createRef，储存到实例中
  msgRef = createRef()
  state = {
    text: ''
  }
  btnClick = () => {
    // 将输入框的值赋值给state
    this.setState({
      text: this.msgRef.current.value
    })
  }
  render () {
    return (
      <>
        {/* 为input添加ref属性 */}
        <input ref={this.msgRef}></input>
        <button onClick={this.btnClick}>点击获取值</button>
        <div>{this.state.text}</div>
      </>
    )
  }
}
function App () {
  return (
    <div className="App">
      <HelloC></HelloC>
    </div>
  )
}
export default App
