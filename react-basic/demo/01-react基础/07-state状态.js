import React from 'react'
class HelloC extends React.Component {
  // 定义组件状态
  state = {
    count: 1,
    name: '小艾同学',
    list: [1, 2, 3, 4],
    person: {
      name: '张三',
      age: 18,
      hobby: '打篮球'
    }
  }
  btnClick = () => {
    // 必须使用setState方法修改状态
    this.setState({
      count: this.state.count++
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
