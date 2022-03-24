import React from 'react'
class HelloC extends React.Component {
  // 定义组件状态
  state = {
    name: '小艾同学'
  }
  btnClick = () => {
    // 必须使用setState方法修改状态
    this.setState({
      name: 'loveZero'
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.btnClick}>点击修改</button>{this.state.name}
      </div>
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
