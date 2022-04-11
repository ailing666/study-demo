import React from 'react'
class HelloC extends React.Component {
  state = {
    text: 'hello'
  }
  iptChange = (e) => {
    // 将输入框的值赋值给state
    this.setState({
      text: e.target.value
    })
  }
  render () {
    return (
      // 绑定值和方法
      <input value={this.state.text} onChange={this.iptChange}></input>
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
